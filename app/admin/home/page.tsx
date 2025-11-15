import { HomeContentForm } from "@/components/admin/home-content-form";
import { createClient } from "@/lib/supabase/server";

export default async function AdminHomePage() {
  const supabase = await createClient();
  
  const { data: homeContent } = await supabase
    .from("home_content")
    .select("*")
    .single();

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Página Inicial</h1>
        <p className="text-gray-600 mt-2">
          Edite o conteúdo principal da página inicial do site
        </p>
      </div>
      
      <HomeContentForm initialData={homeContent} />
    </div>
  );
}
