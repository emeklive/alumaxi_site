import { CategoryLanding } from "@/components/sections/CategoryLanding";
import { categories } from "@/data/categories";
import { images } from "@/data/images";
import { getProductsByCategory } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ferragens e acessórios para vidro",
  description: "Ferragens para vidro temperado, kits para box, fechaduras, componentes de fixação e acessórios de instalação. Alumaxi Fortaleza.",
  path: "/ferragens-e-acessorios",
  image: images.glassDoors.src,
});

export default async function FerragensPage() {
  const fer = categories.find((c) => c.id === "ferragens")!;
  const ace = categories.find((c) => c.id === "acessorios")!;
  return (
    <CategoryLanding
      title="Ferragens e acessórios"
      text="Componentes para montar, fixar e finalizar portas, janelas, boxes e divisórias com segurança."
      heroImage={images.corridorGlass.src}
      heroAlt={images.corridorGlass.alt}
      path="/ferragens-e-acessorios"
      intro={{
        title: "Os detalhes que garantem o resultado",
        text: "Ferragens e acessórios adequados são essenciais para o funcionamento e a durabilidade da instalação. Informe o modelo e a espessura do vidro para a indicação correta.",
        bullets: ["Ferragens para vidro temperado", "Kits e ferragens para box", "Fechaduras e puxadores", "Fixação, vedação e itens de instalação"],
        image: images.tools.src,
        imageAlt: images.tools.alt,
      }}
      groups={[
        { category: fer, products: await getProductsByCategory("ferragens") },
        { category: ace, products: await getProductsByCategory("acessorios") },
      ]}
    />
  );
}
