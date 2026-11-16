import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Exibe o logotipo oficial quando `siteConfig.logo` estiver configurado.
 * Enquanto o arquivo original não for fornecido, mostra o nome da empresa em texto
 * (marcador provisório — NÃO é uma recriação do logotipo).
 */
export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  if (siteConfig.logo) {
    return (
      <Image src={siteConfig.logo} alt="Alumaxi" width={180} height={48} priority className={cn("h-10 w-auto", className)} />
    );
  }
  return (
    <span
      className={cn(
        "text-2xl font-extrabold uppercase tracking-[0.08em] leading-none",
        variant === "dark" ? "text-brand-petrol" : "text-white",
        className,
      )}
      data-logo-placeholder="true"
    >
      Alumaxi
    </span>
  );
}
