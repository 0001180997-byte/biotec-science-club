"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from 'lucide-react';
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from 'next/navigation';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  image_url: string | null;
  order_index: number;
};

export function TeamMembersList({ members }: { members: TeamMember[] }) {
  const router = useRouter();

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja excluir ${name}?`)) return;

    const supabase = createClient();
    const { error } = await supabase.from("team_members").delete().eq("id", id);

    if (error) {
      alert("Erro ao excluir membro");
      console.error(error);
    } else {
      router.refresh();
    }
  };

  if (members.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-gray-500">
          Nenhum membro cadastrado ainda. Clique em "Adicionar Membro" para começar.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-6">
            {member.image_url && (
              <img
                src={member.image_url || "/placeholder.svg"}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
            )}
            <h3 className="font-semibold text-lg text-center">{member.name}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">{member.role}</p>
            {member.bio && (
              <p className="text-sm text-gray-500 text-center mb-4 line-clamp-2">
                {member.bio}
              </p>
            )}
            <div className="flex gap-2 mt-4">
              <Link href={`/admin/team/edit/${member.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Edit className="h-4 w-4" />
                  Editar
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(member.id, member.name)}
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
