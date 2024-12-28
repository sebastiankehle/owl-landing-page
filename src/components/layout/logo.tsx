import Link from "next/link";

interface LogoProps {
  text: string;
}

export function Logo({ text }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="font-semibold">{text}</span>
    </Link>
  );
}
