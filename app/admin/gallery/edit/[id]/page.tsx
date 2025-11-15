import { GalleryImageForm } from "@/components/admin/gallery-image-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from 'next/navigation';

export default async function EditGalleryImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: image } = await supabase
    .from("gallery_images")
    .select("*")
    .eq("id", id)
    .single();

  if (!image) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Foto</h1>
        <p className="text-gray-600 mt-2">
          Atualize as informações da foto
        </p>
      </div>
      
      <GalleryImageForm initialData={image} />
    </div>
  );
}
