import { Star, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Reviews() {
  if (!siteConfig.sectionsVisibility.reviews) {
    return null;
  }

  const { reviews } = siteConfig;

  return (
    <section id="avis" className="reviews-section">
      <div className="container">
        <div className="reviews-header-wrap">
          <div>
            <span className="eyebrow">{reviews.eyebrow}</span>
            <h2 className="heading-lg" style={{ color: "var(--color-text-dark)" }}>
              {reviews.title}
            </h2>
            <p className="section-description">{reviews.description}</p>
          </div>

          {/* Badge Note Google */}
          <div className="google-badge-box">
            <div className="google-rating-score">{reviews.ratingScore}</div>
            <div>
              <div className="google-stars" aria-label={`Note de ${reviews.ratingScore} sur ${reviews.ratingMax}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" strokeWidth={0} />
                ))}
              </div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text-dark)", marginTop: "2px" }}>
                {reviews.googleBadgeLabel} ({reviews.totalReviews})
              </div>
            </div>
          </div>
        </div>

        {/* Grille des avis */}
        <div className="reviews-grid">
          {reviews.items.map((review, idx) => (
            <div key={idx} className="review-card">
              <div>
                <div className="google-stars" style={{ marginBottom: "8px" }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-comment">“{review.comment}”</p>
              </div>

              <div className="review-author">
                <div>
                  <div className="review-name">{review.author}</div>
                  <div className="review-vehicle">{review.vehicle}</div>
                </div>
                <span style={{ color: "var(--color-text-muted-dark)", fontSize: "0.75rem" }}>
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lien externe vers Google Maps */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a
            href={reviews.googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <span>{reviews.googleLinkLabel}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
