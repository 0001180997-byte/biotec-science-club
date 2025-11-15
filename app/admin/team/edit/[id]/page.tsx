import { TeamMemberForm } from "@/components/admin/team-member-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from 'next/navigation';

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: member } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Membro da Equipe</h1>
        <p className="text-gray-600 mt-2">
          Atualize as informações do membro
        </p>
      </div>
      
      <TeamMemberForm initialData={member} />
    </div>
  );
}
