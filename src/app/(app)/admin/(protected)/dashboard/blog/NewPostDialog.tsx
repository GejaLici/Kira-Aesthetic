
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { BlogPost } from "@/lib/data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { i18n } from "@/i18n-config"
import { useEffect } from "react"

type FormData = Omit<BlogPost, 'id' | 'createdAt'>;

interface NewPostDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: FormData) => void
}

const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

export function NewPostDialog({ isOpen, onClose, onSave }: NewPostDialogProps) {
  const { register, handleSubmit, reset, control, watch, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      language: i18n.defaultLocale.toString(),
      date: new Date().toISOString().split('T')[0],
      slug: '',
      keywords: '',
    }
  });

  const titleValue = watch("title");

  useEffect(() => {
    if (titleValue) {
      setValue("slug", generateSlug(titleValue), { shouldValidate: true });
    }
  }, [titleValue, setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onSave(data);
    onClose();
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <div className="col-span-3">
                <Input id="title" {...register("title", { required: "Title is required" })} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="slug" className="text-right">Slug</Label>
              <div className="col-span-3">
                <Input id="slug" {...register("slug", { required: "Slug is required" })} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="keywords" className="text-right">Keywords</Label>
              <div className="col-span-3">
                <Input id="keywords" placeholder="e.g. Roman nose, Greek nose" {...register("keywords")} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">Author</Label>
               <div className="col-span-3">
                <Input id="author" {...register("author", { required: "Author is required" })} />
               </div>
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">Date</Label>
              <div className="col-span-3">
                <Input id="date" type="date" {...register("date", { required: "Date is required" })} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="language" className="text-right">Language</Label>
                <div className="col-span-3">
                    <Controller
                        control={control}
                        name="language"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {i18n.locales.map(locale => (
                                        <SelectItem key={locale} value={locale}>
                                            {locale.toUpperCase()}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">Image Filename</Label>
              <div className="col-span-3">
                <Input id="image" placeholder="e.g., my-post.jpg" {...register("image", { required: "Image is required" })} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="excerpt" className="text-right">Excerpt</Label>
              <div className="col-span-3">
                <Textarea id="excerpt" {...register("excerpt", { required: "Excerpt is required" })} />
              </div>
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="content" className="text-right">Content (MDX)</Label>
              <div className="col-span-3">
                <Textarea id="content" rows={8} {...register("content", { required: "Content is required" })} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Post"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
