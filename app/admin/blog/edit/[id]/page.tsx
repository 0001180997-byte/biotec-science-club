import { BlogPostForm } from "@/components/admin/blog-post-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from 'next/navigation';

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Post</h1>
        <p className="text-gray-600 mt-2">
          Atualize o conteúdo do post
        </p>
      </div>
      
      <BlogPostForm initialData={post} />
    </div>
  );
}
