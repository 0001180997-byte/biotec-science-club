import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { GalleryImagesList } from "@/components/admin/gallery-images-list";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("order_index", { ascending: true });

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Galeria</h1>
          <p className="text-gray-600 mt-2">
            Gerencie as fotos da galeria
          </p>
        </div>
        <Link href="/admin/gallery/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Foto
          </Button>
        </Link>
      </div>

      <GalleryImagesList images={images || []} />
    </div>
  );
}
