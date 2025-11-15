import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Image, Users, FileText, Beaker, LogIn } from 'lucide-react';

export default function AdminHelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Central de Ajuda</h1>
        <p className="text-muted-foreground">
          Aprenda a usar o painel administrativo do BIOTEC
        </p>
      </div>

      <Card className="border-teal-200 bg-teal-50/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <LogIn className="h-5 w-5 text-teal-600" />
            <CardTitle>Como Acessar pela Primeira Vez</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. Criar Usuário no Supabase</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Abra o painel lateral do v0 → clique em "Connect"</li>
              <li>Encontre Supabase e acesse o painel</li>
              <li>Vá em Authentication → Users → Add user</li>
              <li>Digite seu email e senha, depois clique em Create user</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. Tornar-se Administrador</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>No Supabase, vá em Table Editor → admins</li>
              <li>Clique em Insert → Insert row</li>
              <li>Cole o user_id do usuário criado</li>
              <li>Clique em Save</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. Fazer Login</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Volte para /admin/login</li>
              <li>Digite seu email e senha</li>
              <li>Pronto! Você já pode editar o site</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-teal-600" />
              <CardTitle>Página Inicial</CardTitle>
            </div>
            <CardDescription>Edite o conteúdo da home</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Em /admin/home você pode editar:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Título e subtítulo do hero</li>
              <li>Seção "Sobre o Projeto"</li>
              <li>Conteúdo da página inicial</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-teal-600" />
              <CardTitle>Equipe</CardTitle>
            </div>
            <CardDescription>Gerencie os membros</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Em /admin/team você pode:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Adicionar novos membros</li>
              <li>Editar informações (nome, cargo, bio)</li>
              <li>Adicionar fotos e emails</li>
              <li>Remover membros</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-teal-600" />
              <CardTitle>Blog</CardTitle>
            </div>
            <CardDescription>Crie posts e notícias</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Em /admin/blog você pode:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Criar novos posts</li>
              <li>Editar título, conteúdo e autor</li>
              <li>Adicionar imagens de capa</li>
              <li>Salvar como rascunho ou publicar</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Beaker className="h-5 w-5 text-teal-600" />
              <CardTitle>Projetos</CardTitle>
            </div>
            <CardDescription>Adicione projetos de pesquisa</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Em /admin/projects você pode:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Adicionar novos projetos</li>
              <li>Definir status (Em Andamento, Concluído)</li>
              <li>Adicionar datas de início/término</li>
              <li>Incluir imagens ilustrativas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5 text-teal-600" />
              <CardTitle>Galeria</CardTitle>
            </div>
            <CardDescription>Gerencie fotos</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Em /admin/gallery você pode:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Adicionar novas fotos</li>
              <li>Organizar por categoria</li>
              <li>Adicionar títulos descritivos</li>
              <li>Remover imagens antigas</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader>
            <CardTitle>Dicas sobre Imagens</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>Placeholder temporário:</strong></p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              /placeholder.svg?height=400&width=600&query=laboratorio
            </code>
            <p className="mt-2"><strong>Use Vercel Blob para imagens permanentes</strong></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
