"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from 'lucide-react';
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from 'next/navigation';

type GalleryImage = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
  order_index: number;
};

export function GalleryImagesList({ images }: { images: GalleryImage[] }) {
  const router = useRouter();

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Tem certeza que deseja excluir "${title}"?`)) return;

    const supabase = createClient();
    const { error } = await supabase.from("gallery_images").delete().eq("id", id);

    if (error) {
      alert("Erro ao excluir imagem");
      console.error(error);
    } else {
      router.refresh();
    }
  };

  if (images.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-gray-500">
          Nenhuma foto cadastrada ainda. Clique em "Adicionar Foto" para começar.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src={image.image_url || "/placeholder.svg"}
              alt={image.title}
              className="w-full aspect-square object-cover"
            />
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-sm line-clamp-1">{image.title}</h3>
              <div className="flex gap-2">
                <Link href={`/admin/gallery/edit/${image.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="h-3 w-3" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(image.id, image.title)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
