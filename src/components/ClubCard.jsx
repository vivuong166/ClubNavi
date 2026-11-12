import { Link } from 'react-router-dom'
import Tag from './Tag'
import StarRating, { averageRating } from './StarRating'
import { useApp } from '../context/AppContext'

export default function ClubCard({ club, match }) {
  const { compareIds, toggleCompare } = useApp()
  const selected = compareIds.includes(club.id)
  return <article className="club-card">
    <Link to={`/clubs/${club.id}`} className="club-card-top" aria-label={`Xem ${club.name}`}><span className="club-glyph">{club.name.slice(0,1)}</span><span className="arrow-circle">↗</span></Link>
    <div className="club-card-body"><div className="eyebrow">{club.category}</div><h3><Link to={`/clubs/${club.id}`}>{club.name}</Link></h3><p>{club.shortDescription}</p>
      <div className="card-meta"><StarRating rating={averageRating(club.reviews)} count={club.reviews.length} /></div>
      {match && <div className="match-line"><b>{match.score}% phù hợp</b><div className="mini-progress"><i style={{width:`${match.score}%`}} /></div></div>}
      <div className="card-actions"><button className={selected ? 'btn btn-soft selected' : 'btn btn-soft'} onClick={() => toggleCompare(club.id)}>{selected ? '✓ Bỏ khỏi so sánh' : '+ Thêm vào so sánh'}</button><Link className="text-link" to={`/clubs/${club.id}`}>Chi tiết</Link></div>
    </div>
  </article>
}
