import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { BlogPostsList } from "@/components/admin/blog-posts-list";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-2">
            Gerencie os posts do blog do BIOTEC
          </p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Post
          </Button>
        </Link>
      </div>

      <BlogPostsList posts={posts || []} />
    </div>
  );
}
