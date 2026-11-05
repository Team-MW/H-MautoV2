import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function WhyUs({ showImage = true }) {
  if (!siteConfig.sectionsVisibility.whyUs) {
    return null;
  }

  const { whyUs } = siteConfig;

  return (
    <section id="engagements" className={`why-section ${showImage ? "" : "why-section-compact"}`}>
      <div className="container">
        <div className={showImage ? "why-grid" : ""}>
          <div>
            <span className="eyebrow">{whyUs.eyebrow}</span>
            <h2 className="heading-lg" style={{ marginBottom: "18px" }}>
              {whyUs.title}
            </h2>
            <p className="why-lead">{whyUs.leadParagraph}</p>

            <div className="why-commitments">
              {whyUs.commitments.map((item) => (
                <div key={item.title} className="commitment-item">
                  <h3 className="commitment-title">{item.title}</h3>
                  <p className="commitment-desc">{item.description}</p>
                </div>
              ))}
            </div>

            <Link href={whyUs.ctaButton.href} className="btn btn-primary">
              <span>{whyUs.ctaButton.label}</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {showImage && (
            <div className="why-visual-wrapper">
              <div className="why-visual-accent" aria-hidden="true" />
              <div className="why-visual-frame">
                <Image
                  src={whyUs.image.src}
                  alt={whyUs.image.alt}
                  width={whyUs.image.width}
                  height={whyUs.image.height}
                  sizes="(max-width: 992px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
