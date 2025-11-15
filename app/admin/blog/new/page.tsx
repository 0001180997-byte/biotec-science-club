import { BlogPostForm } from "@/components/admin/blog-post-form";

export default function NewBlogPostPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Novo Post do Blog</h1>
        <p className="text-gray-600 mt-2">
          Crie um novo post para o blog do BIOTEC
        </p>
      </div>
      
      <BlogPostForm />
    </div>
  );
}
