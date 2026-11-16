import type { Category } from "@/types";
import { images } from "./images";

/**
 * Categorias confirmadas pela razão social da empresa
 * ("Comércio de Alumínio, Ferragens, Acessórios e Vidros").
 * Subcategorias: estrutura inicial a validar com o catálogo oficial.
 */
export const categories: Category[] = [
  {
    id: "vidros",
    name: "Vidros",
    slug: "vidros",
    page: "/vidros",
    short: "Vidros e espelhos para obras residenciais e comerciais.",
    description:
      "Linhas de vidro para esquadrias, boxes, portas, divisórias, fachadas e projetos de interiores, além de espelhos para decoração e banheiros.",
    image: images.glassFacade.src,
    imageAlt: images.glassFacade.alt,
    subcategories: [
      { id: "comuns", name: "Vidros comuns" },
      { id: "temperados", name: "Vidros temperados" },
      { id: "laminados", name: "Vidros laminados" },
      { id: "espelhos", name: "Espelhos" },
    ],
  },
  {
    id: "aluminio",
    name: "Alumínio",
    slug: "aluminio",
    page: "/aluminio",
    short: "Perfis, linhas e componentes para esquadrias.",
    description:
      "Perfis de alumínio, linhas para esquadrias e componentes complementares para serralheiros e fabricantes de esquadrias.",
    image: images.facadeWindows.src,
    imageAlt: images.facadeWindows.alt,
    subcategories: [
      { id: "perfis", name: "Perfis" },
      { id: "linhas", name: "Linhas e sistemas" },
      { id: "componentes", name: "Componentes e complementos" },
    ],
  },
  {
    id: "ferragens",
    name: "Ferragens",
    slug: "ferragens",
    page: "/ferragens-e-acessorios",
    short: "Ferragens para vidro e componentes de fixação.",
    description:
      "Ferragens para vidro temperado, componentes de fixação e itens para instalação de portas, janelas, boxes e divisórias.",
    image: images.glassDoors.src,
    imageAlt: images.glassDoors.alt,
    subcategories: [
      { id: "ferragens-vidro", name: "Ferragens para vidro" },
      { id: "fixacao", name: "Componentes de fixação" },
      { id: "instalacao", name: "Acessórios para instalação" },
    ],
  },
  {
    id: "acessorios",
    name: "Acessórios",
    slug: "acessorios",
    page: "/ferragens-e-acessorios#acessorios",
    short: "Complementos e itens de instalação.",
    description: "Produtos complementares e itens de instalação para o vidraceiro e o serralheiro.",
    image: images.tools.src,
    imageAlt: images.tools.alt,
    subcategories: [
      { id: "complementares", name: "Produtos complementares" },
      { id: "instalacao", name: "Itens de instalação" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const subcategoryName = (catId: string, subId: string) =>
  getCategory(catId)?.subcategories.find((s) => s.id === subId)?.name ?? subId;
