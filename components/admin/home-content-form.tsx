"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

type HomeContent = {
  id?: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  about_text: string;
};

export function HomeContentForm({ initialData }: { initialData: HomeContent | null }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<HomeContent>(
    initialData || {
      hero_title: "",
      hero_subtitle: "",
      hero_description: "",
      about_text: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClient();

    try {
      if (initialData?.id) {
        // Update existing
        const { error } = await supabase
          .from("home_content")
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", initialData.id);

        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase.from("home_content").insert([formData]);
        if (error) throw error;
      }

      alert("Conteúdo atualizado com sucesso!");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao salvar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conteúdo da Página Inicial</CardTitle>
        <CardDescription>
          Edite os textos que aparecem na página inicial
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="hero_title">Título Principal</Label>
            <Input
              id="hero_title"
              value={formData.hero_title}
              onChange={(e) =>
                setFormData({ ...formData, hero_title: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero_subtitle">Subtítulo</Label>
            <Input
              id="hero_subtitle"
              value={formData.hero_subtitle}
              onChange={(e) =>
                setFormData({ ...formData, hero_subtitle: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero_description">Descrição</Label>
            <Textarea
              id="hero_description"
              value={formData.hero_description}
              onChange={(e) =>
                setFormData({ ...formData, hero_description: e.target.value })
              }
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about_text">Texto Sobre</Label>
            <Textarea
              id="about_text"
              value={formData.about_text}
              onChange={(e) =>
                setFormData({ ...formData, about_text: e.target.value })
              }
              rows={4}
              required
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
