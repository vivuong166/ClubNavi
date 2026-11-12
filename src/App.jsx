import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Toast from './components/Toast'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import ClubList from './pages/ClubList'
import ClubDetail from './pages/ClubDetail'
import Compare from './pages/Compare'
import ReviewForm from './pages/ReviewForm'

export default function App(){return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/quiz" element={<Quiz/>}/><Route path="/results" element={<Results/>}/><Route path="/clubs" element={<ClubList/>}/><Route path="/clubs/:id" element={<ClubDetail/>}/><Route path="/clubs/:id/review" element={<ReviewForm/>}/><Route path="/compare" element={<Compare/>}/><Route path="*" element={<Home/>}/></Routes><Toast/></>}
