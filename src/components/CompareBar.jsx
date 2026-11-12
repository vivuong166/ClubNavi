import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function CompareBar() {
  const { clubs, compareIds, toggleCompare } = useApp()
  if (!compareIds.length) return null
  const selected = clubs.filter(club => compareIds.includes(club.id))
  return <aside className="compare-bar"><div><span className="compare-label">Đang so sánh</span><div className="compare-pills">{selected.map(club => <span key={club.id} className="compare-pill">{club.name}<button onClick={() => toggleCompare(club.id)} aria-label={`Bỏ ${club.name}`}>×</button></span>)}</div></div>
    {compareIds.length >= 2 ? <Link className="btn btn-dark" to="/compare">So sánh ({compareIds.length}) →</Link> : <span className="compare-hint">Chọn thêm 1 CLB để so sánh</span>}
  </aside>
}
