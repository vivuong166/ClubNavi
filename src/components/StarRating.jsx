export const averageRating = (reviews = []) => reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

export default function StarRating({ rating, count, interactive = false, onChange }) {
  const value = Math.round(rating)
  return <div className={`star-rating ${interactive ? 'interactive' : ''}`} aria-label={`${rating} trên 5 sao`}>
    {[1,2,3,4,5].map(star => <button key={star} type="button" disabled={!interactive} onClick={() => onChange?.(star)} aria-label={`${star} sao`} className={star <= value ? 'star active' : 'star'}>★</button>)}
    {count !== undefined && <span className="rating-text">{rating.toFixed(1)} · {count} đánh giá</span>}
  </div>
}
