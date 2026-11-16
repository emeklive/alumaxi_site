import { CategoryLanding } from "@/components/sections/CategoryLanding";
import { categories } from "@/data/categories";
import { images } from "@/data/images";
import { getProductsByCategory } from "@/lib/catalog";
import { LaminatedGlassScroll } from "@/components/sections/LaminatedGlassScroll";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Vidros e espelhos em Fortaleza",
  description: "Vidros comuns, temperados, laminados e espelhos para obras residenciais e comerciais. Solicite orçamento na Alumaxi Fortaleza.",
  path: "/vidros",
  image: images.glassFacade.src,
});

export default async function VidrosPage() {
  const cat = categories.find((c) => c.id === "vidros")!;
  return (
    <CategoryLanding
      title="Vidros"
      text="Vidros e espelhos para esquadrias, boxes, portas, divisórias, fachadas e projetos de interiores."
      heroImage={images.heroAlt.src}
      heroAlt={images.heroAlt.alt}
      path="/vidros"
      intro={{
        title: "O vidro certo para cada aplicação",
        text: "Segurança, conforto e estética dependem da escolha correta do vidro. Informe a aplicação e as medidas no orçamento para receber a orientação da equipe comercial.",
        bullets: ["Vidros comuns para janelas, tampos e quadros", "Vidros de segurança: temperados e laminados", "Espelhos para banheiros, salas e comércios", "Orientação conforme a aplicação e as normas técnicas"],
        image: images.bathroomShower.src,
        imageAlt: images.bathroomShower.alt,
      }}
      feature={<LaminatedGlassScroll />}
      groups={[{ category: cat, products: await getProductsByCategory("vidros") }]}
    />
  );
}
