import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { ProjectsList } from "@/components/admin/projects-list";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projetos</h1>
          <p className="text-gray-600 mt-2">
            Gerencie os projetos do BIOTEC
          </p>
        </div>
        <Link href="/admin/projects/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Projeto
          </Button>
        </Link>
      </div>

      <ProjectsList projects={projects || []} />
    </div>
  );
}
