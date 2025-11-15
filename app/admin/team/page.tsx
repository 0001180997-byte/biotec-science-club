import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { TeamMembersList } from "@/components/admin/team-members-list";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("order_index", { ascending: true });

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Equipe</h1>
          <p className="text-gray-600 mt-2">
            Gerencie os membros da equipe do BIOTEC
          </p>
        </div>
        <Link href="/admin/team/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Membro
          </Button>
        </Link>
      </div>

      <TeamMembersList members={members || []} />
    </div>
  );
}
