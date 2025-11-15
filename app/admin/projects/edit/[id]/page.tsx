import { ProjectForm } from "@/components/admin/project-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from 'next/navigation';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Projeto</h1>
        <p className="text-gray-600 mt-2">
          Atualize as informações do projeto
        </p>
      </div>
      
      <ProjectForm initialData={project} />
    </div>
  );
}
