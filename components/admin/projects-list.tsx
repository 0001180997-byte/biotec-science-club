"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from 'lucide-react';
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from 'next/navigation';

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string | null;
  status: string;
  start_date: string | null;
};

export function ProjectsList({ projects }: { projects: Project[] }) {
  const router = useRouter();

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Tem certeza que deseja excluir "${title}"?`)) return;

    const supabase = createClient();
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      alert("Erro ao excluir projeto");
      console.error(error);
    } else {
      router.refresh();
    }
  };

  if (projects.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-gray-500">
          Nenhum projeto cadastrado ainda. Clique em "Adicionar Projeto" para começar.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardContent className="p-6">
            {project.image_url && (
              <img
                src={project.image_url || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 rounded-lg object-cover mb-4"
              />
            )}
            <div className="flex items-start justify-between mb-2">
              <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                {project.status === 'active' ? 'Ativo' : 'Concluído'}
              </Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2">
              <Link href={`/admin/projects/edit/${project.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Edit className="h-4 w-4" />
                  Editar
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(project.id, project.title)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
