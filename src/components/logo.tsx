import Image from "next/image";

export function Logo({ eager = false }: { eager?: boolean }) {
  return (
    <Image
      src="/getfrp-logo.png"
      alt="getfrp"
      width={620}
      height={140}
      className="h-8 w-auto mix-blend-multiply"
      loading={eager ? "eager" : "lazy"}
    />
  );
}
