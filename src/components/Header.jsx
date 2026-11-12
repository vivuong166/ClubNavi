import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="Về trang chủ CLB Chọn Đúng"><span className="brand-mark">✦</span><span>CLB <b>Chọn Đúng</b></span></Link>
    <NavLink to="/clubs" className="header-link">Danh mục CLB <span>→</span></NavLink>
  </div></header>
}
