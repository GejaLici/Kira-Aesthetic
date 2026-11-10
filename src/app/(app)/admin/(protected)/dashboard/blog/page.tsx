
'use client';

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { BlogPost } from "@/lib/data"
import { PlusCircle, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { NewPostDialog } from "./NewPostDialog"
import { EditPostDialog } from "./EditPostDialog"
import { useBlogPosts } from "@/firebase/firestore/use-blog-posts"
import { useFirestore } from "@/firebase"
import { saveBlogPost, deleteBlogPost, updateBlogPost } from "@/lib/db"
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { i18n } from "@/i18n-config"

export default function BlogManagementPage() {
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, loading, mutate } = useBlogPosts(languageFilter === 'all' ? undefined : { language: languageFilter });
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleNewPost = async (post: Omit<BlogPost, 'id'>) => {
    if (!firestore) return;
    try {
      await saveBlogPost(firestore, post);
      toast({ title: "Blog post created successfully!"});
      mutate(); // Re-fetch posts
    } catch (error) {
      toast({ variant: 'destructive', title: "Error creating post", description: "There was an error saving the blog post." });
    }
  };

  const handleEditClick = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditDialogOpen(true);
  }

  const handleUpdatePost = async (post: Omit<BlogPost, 'id' | 'createdAt'>) => {
    if (!firestore || !editingPost) return;
    try {
      await updateBlogPost(firestore, editingPost.id, post);
      toast({ title: "Blog post updated successfully!"});
      mutate(); // Re-fetch posts
    } catch (error) {
       toast({ variant: 'destructive', title: "Error updating post", description: "There was an error updating the blog post." });
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!firestore) return;
    try {
      await deleteBlogPost(firestore, postId);
      toast({ title: "Blog post deleted."});
      mutate(); // Re-fetch posts
    } catch (error) {
      toast({ variant: 'destructive', title: "Error deleting post", description: "There was an error deleting the blog post." });
    }
  }

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);


  return (
    <>
      <Card>
        <CardHeader>
           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <CardTitle>Blog Posts</CardTitle>
                    <CardDescription>
                        Manage your blog posts here. Filter them by language or search by title.
                    </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <Input 
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-auto"
                    />
                     <Select value={languageFilter} onValueChange={setLanguageFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Filter by language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Languages</SelectItem>
                            {i18n.locales.map(locale => (
                                <SelectItem key={locale} value={locale}>
                                    {locale.toUpperCase()}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button size="sm" className="gap-1 w-full sm:w-auto" onClick={() => setIsNewDialogOpen(true)}>
                        <PlusCircle className="h-4 w-4" />
                        New Post
                    </Button>
                </div>
           </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Language</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                    <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-5 w-8" /></TableCell>
                </TableRow>
              ))}
              {!loading && filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(post.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline">{post.language.toUpperCase()}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEditClick(post)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeletePost(post.id)} className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
               {!loading && filteredPosts.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        No blog posts found for the selected criteria.
                    </TableCell>
                </TableRow>
            )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <NewPostDialog 
        isOpen={isNewDialogOpen}
        onClose={() => setIsNewDialogOpen(false)}
        onSave={handleNewPost}
      />
      {editingPost && (
        <EditPostDialog
            isOpen={isEditDialogOpen}
            onClose={() => {
                setIsEditDialogOpen(false);
                setEditingPost(null);
            }}
            onSave={handleUpdatePost}
            post={editingPost}
        />
      )}
    </>
  )
}
