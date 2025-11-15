"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

type TeamMember = {
  id?: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  order_index: number;
};

export function TeamMemberForm({ initialData }: { initialData?: TeamMember }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<TeamMember>(
    initialData || {
      name: "",
      role: "",
      bio: "",
      image_url: "",
      order_index: 0,
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClient();

    try {
      if (initialData?.id) {
        const { error } = await supabase
          .from("team_members")
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", initialData.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("team_members").insert([formData]);
        if (error) throw error;
      }

      router.push("/admin/team");
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
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Cargo/Função *</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              placeholder="Breve descrição sobre o membro"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">URL da Foto</Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://exemplo.com/foto.jpg"
            />
            <p className="text-xs text-gray-500">
              Cole o URL de uma imagem hospedada online
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="order_index">Ordem de Exibição</Label>
            <Input
              id="order_index"
              type="number"
              value={formData.order_index}
              onChange={(e) =>
                setFormData({ ...formData, order_index: parseInt(e.target.value) })
              }
            />
            <p className="text-xs text-gray-500">
              Número menor aparece primeiro
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
