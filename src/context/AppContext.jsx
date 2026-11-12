import { createContext, useContext, useMemo, useState } from 'react'
import { initialClubs } from '../data/clubs'
import { calculateAllMatches } from '../utils/matching'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [clubs, setClubs] = useState(initialClubs)
  const [compareIds, setCompareIds] = useState([])
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [toast, setToast] = useState(null)
  const flash = (message) => { setToast(message); window.setTimeout(() => setToast(null), 2800) }
  const toggleCompare = (id) => {
    if (compareIds.includes(id)) return setCompareIds(ids => ids.filter(x => x !== id))
    if (compareIds.length >= 3) return flash('Chỉ so sánh tối đa 3 CLB, hãy bỏ bớt 1 CLB')
    setCompareIds(ids => [...ids, id])
  }
  const addReview = (clubId, review) => setClubs(items => items.map(club => club.id === clubId ? { ...club, reviews:[review, ...club.reviews] } : club))
  const finishQuiz = (finalAnswers) => {
    setAnswers(finalAnswers)
    setResults(calculateAllMatches(clubs, finalAnswers))
  }
  const value = useMemo(() => ({ clubs, compareIds, answers, results, toast, toggleCompare, addReview, finishQuiz, flash, setAnswers, setResults }), [clubs, compareIds, answers, results, toast])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export const useApp = () => useContext(AppContext)
