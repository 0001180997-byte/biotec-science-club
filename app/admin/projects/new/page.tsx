import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Novo Projeto</h1>
        <p className="text-gray-600 mt-2">
          Adicione um novo projeto ao BIOTEC
        </p>
      </div>
      
      <ProjectForm />
    </div>
  );
}
