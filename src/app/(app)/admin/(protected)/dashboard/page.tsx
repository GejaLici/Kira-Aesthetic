'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileText, CheckCircle2 } from "lucide-react";
import { useFirestore } from "@/firebase";
import { seedBlogPosts } from "@/lib/db";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function DashboardPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const [isSeeding, setIsSeeding] = useState(false);

    const handleSeed = async () => {
        if (!firestore) return;
        setIsSeeding(true);
        try {
            await seedBlogPosts(firestore);
            toast({
                title: "Success!",
                description: "Sample blog posts with requested keywords have been added to the database.",
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Could not seed data. Check permissions.",
            });
        } finally {
            setIsSeeding(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Manage your clinic's digital presence and data.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <Database className="h-5 w-5 text-primary" />
                            <CardTitle>Data Management</CardTitle>
                        </div>
                        <CardDescription>
                            Initialize your blog with professionally written sample content using your specific keywords.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-sm text-muted-foreground">
                            <p className="mb-2 font-semibold">Included Topics:</p>
                            <ul className="list-inside list-disc space-y-1">
                                <li>The Art of the Profile: Greek vs Roman Nose</li>
                                <li>Safety First: Understanding Surgical Drainage</li>
                            </ul>
                        </div>
                        <Button 
                            onClick={handleSeed} 
                            disabled={isSeeding}
                            className="w-full sm:w-auto gap-2"
                        >
                            {isSeeding ? "Seeding..." : "Seed Sample Blog Posts"}
                            {!isSeeding && <CheckCircle2 className="h-4 w-4" />}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <CardTitle>Recent Activity</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">No recent system logs to display.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
