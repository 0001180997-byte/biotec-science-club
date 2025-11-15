import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Users, FolderOpen, Image, FileText } from 'lucide-react';

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Get counts
  const [teamCount, projectsCount, galleryCount, blogCount] = await Promise.all([
    supabase.from("team_members").select("*", { count: "exact", head: true }),
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("gallery_images").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    {
      title: "Membros da Equipe",
      value: teamCount.count || 0,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Projetos",
      value: projectsCount.count || 0,
      icon: FolderOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Fotos na Galeria",
      value: galleryCount.count || 0,
      icon: Image,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Posts no Blog",
      value: blogCount.count || 0,
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Bem-vindo ao painel administrativo do Clube de Ciências BIOTEC
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Guia Rápido</CardTitle>
          <CardDescription>
            Como usar o painel administrativo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">📝 Editar Conteúdo</h3>
            <p className="text-sm text-gray-600">
              Use o menu de navegação acima para acessar diferentes seções do site e editar o conteúdo.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">🖼️ Adicionar Imagens</h3>
            <p className="text-sm text-gray-600">
              Para adicionar imagens, use URLs de imagens hospedadas online ou carregue no Supabase Storage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✏️ Criar Posts</h3>
            <p className="text-sm text-gray-600">
              Na seção Blog, você pode criar novos posts, editá-los e publicá-los quando estiver pronto.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
