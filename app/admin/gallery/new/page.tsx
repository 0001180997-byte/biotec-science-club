import { GalleryImageForm } from "@/components/admin/gallery-image-form";

export default function NewGalleryImagePage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Nova Foto</h1>
        <p className="text-gray-600 mt-2">
          Adicione uma nova foto à galeria
        </p>
      </div>
      
      <GalleryImageForm />
    </div>
  );
}
