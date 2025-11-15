import { TeamMemberForm } from "@/components/admin/team-member-form";

export default function NewTeamMemberPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Novo Membro da Equipe</h1>
        <p className="text-gray-600 mt-2">
          Adicione um novo membro à equipe do BIOTEC
        </p>
      </div>
      
      <TeamMemberForm />
    </div>
  );
}
