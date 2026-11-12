import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizQuestions } from '../data/quiz'
import { useApp } from '../context/AppContext'

export default function Quiz() {
  const nav = useNavigate(); const { finishQuiz, answers } = useApp()
  const [step, setStep] = useState(0); const [form, setForm] = useState(answers); const [error, setError] = useState('')
  const question = quizQuestions[step]; const selected = form[question.id] ?? (question.type === 'multiple' ? [] : '')
  const choose = (value) => { setError(''); setForm(current => ({...current, [question.id]: question.type === 'single' ? value : current[question.id]?.includes(value) ? current[question.id].filter(x => x !== value) : [...(current[question.id] || []), value] })) }
  const advance = () => { if (!selected || !selected.length) return setError('Hãy chọn ít nhất một đáp án để tiếp tục.'); if (step === quizQuestions.length - 1) { finishQuiz(form); nav('/results') } else setStep(x => x + 1) }
  return <main className="quiz-page page-narrow"><button className="back-link" onClick={() => step ? setStep(x => x - 1) : nav('/')}>← {step ? 'Quay lại câu trước' : 'Về trang chủ'}</button><div className="quiz-card"><div className="quiz-top"><span>Câu {step + 1}/5</span><span>{Math.round(((step + 1)/5)*100)}%</span></div><div className="progress"><i style={{width:`${((step + 1)/5)*100}%`}} /></div><p className="eyebrow accent">KHẢO SÁT NHANH</p><h1>{question.title}</h1><p className="muted">{question.hint}</p><div className="option-list">{question.options.map(option => { const on = question.type === 'multiple' ? selected.includes(option.value) : selected === option.value; return <button key={option.value} type="button" className={`option ${on ? 'chosen' : ''}`} onClick={() => choose(option.value)}><span className={question.type === 'multiple' ? 'check-box' : 'radio'}>{on && '✓'}</span>{option.label}</button> })}</div>{error && <p className="form-error">{error}</p>}<div className="quiz-actions"><button className="btn btn-ghost" onClick={() => nav('/')}>Thoát</button><button className="btn btn-dark" onClick={advance}>{step === 4 ? 'Xem kết quả →' : 'Tiếp →'}</button></div></div></main>
}
