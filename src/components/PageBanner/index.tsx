import Image from "next/image";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  image: string;
  breadcrumb: string;
}

export default function PageBanner({ title, image, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow px-4 text-center">
          {title}
        </h1>
        <p className="text-white/80 text-sm">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-accent">{breadcrumb}</span>
        </p>
      </div>
    </section>
  );
}
