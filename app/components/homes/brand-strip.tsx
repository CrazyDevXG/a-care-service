import Image from "next/image";
import { brands } from "../../lib/content";

export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="แบรนด์เครื่องปรับอากาศที่ดูแล">
      <div className="brand-track">
        {[0, 1].map((copy) => (
          <div className="brand-set" key={copy} aria-hidden={copy === 1 || undefined}>
            {brands.map((brand) => (
              <Image key={brand.name} src={brand.src} alt={copy === 0 ? brand.name : ""} width={180} height={80} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
