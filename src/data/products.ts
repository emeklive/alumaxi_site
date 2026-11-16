import type { Product } from "@/types";
import { images } from "./images";

/**
 * CATÁLOGO INICIAL
 * ----------------
 * Linhas de produto compatíveis com o ramo de atividade registrado da Alumaxi
 * (comércio de alumínio, ferragens, acessórios e vidros). Todas estão com
 * `validated: false` até que a empresa confirme o mix real, as marcas,
 * espessuras, cores e demais especificações técnicas.
 *
 * Regra: `specs` só recebe dados CONFIRMADOS. Enquanto vazio, o site mostra
 * "Especificações técnicas sob consulta".
 *
 * Itens podem ser editados, ocultados ou excluídos pelo painel /admin.
 */
const p = (x: Omit<Product, "validated" | "active" | "specs"> & Partial<Pick<Product, "specs">>): Product => ({
  specs: [],
  validated: false,
  active: true,
  ...x,
});

export const seedProducts: Product[] = [
  // ---------------- VIDROS ----------------
  p({
    id: "vidro-comum",
    slug: "vidro-comum",
    name: "Vidro comum (float)",
    category: "vidros",
    subcategory: "comuns",
    summary: "Vidro plano para janelas, quadros, tampos e aplicações sem exigência de segurança.",
    description:
      "O vidro comum é a base de grande parte das aplicações em esquadrias e interiores. Pode ser cortado sob medida e é indicado para usos em que a norma não exige vidro de segurança. Consulte espessuras, cores e disponibilidade com a equipe comercial.",
    applications: ["Janelas", "Tampos e prateleiras", "Quadros e molduras", "Vitrines internas"],
    image: images.livingWindow.src,
    imageAlt: images.livingWindow.alt,
    featured: true,
  }),
  p({
    id: "vidro-temperado",
    slug: "vidro-temperado",
    name: "Vidro temperado",
    category: "vidros",
    subcategory: "temperados",
    summary: "Vidro de segurança para portas, boxes, janelas de correr e divisórias.",
    description:
      "Obtido por tratamento térmico, o vidro temperado tem resistência mecânica superior ao vidro comum e, em caso de quebra, fragmenta-se em pequenos pedaços. Por não poder ser cortado ou furado após a têmpera, é produzido a partir das medidas finais do projeto.",
    applications: ["Boxes para banheiro", "Portas e janelas de correr", "Divisórias", "Fechamentos de sacada"],
    image: images.bathroomShower.src,
    imageAlt: images.bathroomShower.alt,
    featured: true,
  }),
  p({
    id: "vidro-laminado",
    slug: "vidro-laminado",
    name: "Vidro laminado",
    category: "vidros",
    subcategory: "laminados",
    summary: "Vidro de segurança com película intermediária para guarda-corpos, coberturas e fachadas.",
    description:
      "Composto por duas ou mais lâminas de vidro unidas por película intermediária. Em caso de quebra, os fragmentos permanecem aderidos à película, o que o torna indicado para aplicações com risco de queda de vidro.",
    applications: ["Guarda-corpos", "Coberturas e claraboias", "Fachadas", "Vitrines"],
    image: images.glassDoors.src,
    imageAlt: images.glassDoors.alt,
    featured: true,
  }),
  p({
    id: "espelhos",
    slug: "espelhos",
    name: "Espelhos",
    category: "vidros",
    subcategory: "espelhos",
    summary: "Espelhos para banheiros, salas, academias e projetos de decoração.",
    description:
      "Espelhos para aplicações residenciais e comerciais, cortados sob medida para o projeto. Consulte espessuras, acabamentos de borda e opções disponíveis.",
    applications: ["Banheiros", "Salas e halls", "Academias e lojas", "Painéis decorativos"],
    image: images.archMirror.src,
    imageAlt: images.archMirror.alt,
    featured: true,
  }),
  p({
    id: "vidro-box",
    slug: "vidros-para-box",
    name: "Vidros para box",
    category: "vidros",
    subcategory: "temperados",
    summary: "Vidro temperado sob medida para boxes de banheiro.",
    description:
      "Vidros temperados produzidos a partir das medidas do vão para boxes de abrir, de correr ou fixos. Informe as medidas e o modelo do box na solicitação de orçamento.",
    applications: ["Box de correr", "Box de abrir", "Painéis fixos"],
    image: images.bathroomDark.src,
    imageAlt: images.bathroomDark.alt,
  }),

  // ---------------- ALUMÍNIO ----------------
  p({
    id: "perfis-aluminio",
    slug: "perfis-de-aluminio",
    name: "Perfis de alumínio",
    category: "aluminio",
    subcategory: "perfis",
    summary: "Perfis para fabricação de esquadrias, fechamentos e estruturas leves.",
    description:
      "Perfis de alumínio para serralheiros e fabricantes de esquadrias. Linhas, acabamentos e disponibilidade devem ser consultados com a equipe comercial.",
    applications: ["Janelas", "Portas", "Fechamentos", "Estruturas leves"],
    image: images.facadeWindows.src,
    imageAlt: images.facadeWindows.alt,
    featured: true,
  }),
  p({
    id: "linhas-esquadrias",
    slug: "linhas-para-esquadrias",
    name: "Linhas para esquadrias",
    category: "aluminio",
    subcategory: "linhas",
    summary: "Sistemas de perfis para janelas e portas de correr, de abrir e maxim-ar.",
    description:
      "Conjuntos de perfis organizados por linha/sistema para a fabricação de esquadrias. As linhas efetivamente comercializadas serão listadas conforme o catálogo oficial.",
    applications: ["Janelas de correr", "Portas de abrir", "Maxim-ar", "Fachadas residenciais"],
    image: images.houseFacade.src,
    imageAlt: images.houseFacade.alt,
  }),
  p({
    id: "componentes-aluminio",
    slug: "componentes-para-aluminio",
    name: "Componentes para alumínio",
    category: "aluminio",
    subcategory: "componentes",
    summary: "Complementos para montagem e acabamento de esquadrias de alumínio.",
    description:
      "Componentes de montagem e acabamento usados na fabricação de esquadrias de alumínio. Consulte a compatibilidade com a linha utilizada no seu projeto.",
    applications: ["Montagem de esquadrias", "Acabamento", "Manutenção"],
    image: images.facadeBalconies.src,
    imageAlt: images.facadeBalconies.alt,
  }),

  // ---------------- FERRAGENS ----------------
  p({
    id: "ferragens-temperado",
    slug: "ferragens-para-vidro-temperado",
    name: "Ferragens para vidro temperado",
    category: "ferragens",
    subcategory: "ferragens-vidro",
    summary: "Ferragens para portas, janelas e divisórias em vidro temperado.",
    description:
      "Ferragens para montagem de portas pivotantes, de correr e janelas em vidro temperado. Consulte modelos, acabamentos e compatibilidade com a espessura do vidro.",
    applications: ["Portas de vidro", "Janelas de vidro", "Divisórias"],
    image: images.corridorGlass.src,
    imageAlt: images.corridorGlass.alt,
    featured: true,
  }),
  p({
    id: "kits-box",
    slug: "kits-para-box",
    name: "Kits e ferragens para box",
    category: "ferragens",
    subcategory: "ferragens-vidro",
    summary: "Ferragens para montagem de boxes de banheiro.",
    description:
      "Ferragens e componentes para montagem de boxes de correr e de abrir. Informe o modelo do box e a espessura do vidro para indicação correta.",
    applications: ["Box de correr", "Box de abrir"],
    image: images.bathroomTub.src,
    imageAlt: images.bathroomTub.alt,
  }),
  p({
    id: "fechaduras-puxadores",
    slug: "fechaduras-e-puxadores",
    name: "Fechaduras e puxadores",
    category: "ferragens",
    subcategory: "ferragens-vidro",
    summary: "Fechaduras e puxadores para portas de vidro e esquadrias.",
    description:
      "Fechaduras e puxadores para portas de vidro e esquadrias de alumínio. Modelos e acabamentos sob consulta.",
    applications: ["Portas de vidro", "Portas de alumínio", "Vitrines"],
    image: images.lock.src,
    imageAlt: images.lock.alt,
  }),
  p({
    id: "fixacao",
    slug: "componentes-de-fixacao",
    name: "Componentes de fixação",
    category: "ferragens",
    subcategory: "fixacao",
    summary: "Itens de fixação para vidro, espelho e esquadrias.",
    description:
      "Componentes para fixação de vidros, espelhos e esquadrias. Consulte o item adequado para cada tipo de superfície e aplicação.",
    applications: ["Fixação de espelhos", "Painéis de vidro", "Esquadrias"],
    image: images.drill.src,
    imageAlt: images.drill.alt,
  }),

  // ---------------- ACESSÓRIOS ----------------
  p({
    id: "vedacao",
    slug: "vedacao-e-acabamento",
    name: "Vedação e acabamento",
    category: "acessorios",
    subcategory: "complementares",
    summary: "Itens de vedação e acabamento para esquadrias, vidros e boxes.",
    description:
      "Produtos complementares de vedação e acabamento utilizados na instalação de vidros e esquadrias. Consulte a linha disponível.",
    applications: ["Esquadrias", "Boxes", "Vidros fixos"],
    image: images.bathroomBright.src,
    imageAlt: images.bathroomBright.alt,
  }),
  p({
    id: "itens-instalacao",
    slug: "itens-de-instalacao",
    name: "Itens de instalação",
    category: "acessorios",
    subcategory: "instalacao",
    summary: "Acessórios de apoio para a rotina de instalação do vidraceiro.",
    description:
      "Acessórios utilizados no dia a dia da instalação de vidros e esquadrias. A lista de itens disponíveis será publicada conforme o catálogo oficial.",
    applications: ["Instalação de vidros", "Montagem de esquadrias", "Manutenção"],
    image: images.tools.src,
    imageAlt: images.tools.alt,
  }),
];
