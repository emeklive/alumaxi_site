import { CategoryLanding } from "@/components/sections/CategoryLanding";
import { categories } from "@/data/categories";
import { images } from "@/data/images";
import { getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Alumínio para esquadrias em Fortaleza",
  description: "Perfis de alumínio, linhas para esquadrias e componentes para serralheiros e fabricantes. Alumaxi Fortaleza.",
  path: "/aluminio",
  image: images.facadeWindows.src,
});

export default async function AluminioPage() {
  const cat = categories.find((c) => c.id === "aluminio")!;
  return (
    <CategoryLanding
      title="Alumínio"
      text="Perfis, linhas e componentes para a fabricação de esquadrias, fechamentos e estruturas leves."
      heroImage={images.facadeBalconies.src}
      heroAlt={images.facadeBalconies.alt}
      path="/aluminio"
      intro={{
        title: "Linhas e sistemas para esquadrias",
        text: "Atendemos serralheiros e empresas de esquadrias com perfis e componentes de alumínio. As linhas, acabamentos e cores disponíveis são confirmados no atendimento.",
        bullets: ["Perfis para janelas, portas e fechamentos", "Organização por linhas e sistemas", "Componentes de montagem e acabamento", "Consulta de compatibilidade com o seu projeto"],
        image: images.houseFacade.src,
        imageAlt: images.houseFacade.alt,
      }}
      groups={[{ category: cat, products: await getProductsByCategory("aluminio") }]}
    />
  );
}
