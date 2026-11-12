import { scheduleLabels, commitmentLabels } from '../data/clubs'

const state = (score, max) => score === max ? 'match' : score > 0 ? 'partial' : 'mismatch'

export function calculateMatch(club, answers) {
  const selectedCategories = answers.categories || []
  const selectedGoals = answers.goals || []
  const selectedSlots = answers.slots || []
  const budget = Number(answers.budget)
  const commitment = Number(answers.commitment)
  const categoryScore = selectedCategories.includes(club.category) ? 40 : 0
  const sharedGoals = club.goals.filter(goal => selectedGoals.includes(goal))
  const goalScore = Math.round(20 * sharedGoals.length / club.goals.length)
  const overlaps = club.scheduleSlots.filter(slot => selectedSlots.includes(slot))
  const slotScore = overlaps.length === club.scheduleSlots.length ? 20 : overlaps.length ? 10 : 0
  const costScore = club.costLevel <= budget ? 10 : 0
  const commitmentGap = Math.abs(club.commitmentLevel - commitment)
  const commitmentScore = commitmentGap === 0 ? 10 : commitmentGap === 1 ? 5 : 0
  const allSlots = club.scheduleSlots.map(slot => scheduleLabels[slot]).join(', ')
  const detail = [
    { label:'Lĩnh vực', status:state(categoryScore,40), text:categoryScore ? `${club.category} nằm trong lĩnh vực bạn quan tâm.` : `${club.category} chưa nằm trong lựa chọn lĩnh vực của bạn.` },
    { label:'Mục tiêu', status:state(goalScore,20), text:sharedGoals.length ? `Bạn và CLB cùng hướng đến ${sharedGoals.length}/${club.goals.length} mục tiêu.` : 'Chưa có mục tiêu nào của CLB trùng với điều bạn chọn.' },
    { label:'Thời gian', status:state(slotScore,20), text:slotScore === 20 ? `Lịch ${allSlots} đều trùng thời gian rảnh của bạn.` : slotScore === 10 ? `Một phần lịch (${allSlots}) phù hợp với thời gian rảnh của bạn.` : `Lịch sinh hoạt ${allSlots} không trùng với thời gian rảnh của bạn.` },
    { label:'Chi phí', status:state(costScore,10), text:costScore ? `${club.costLabel} nằm trong ngân sách bạn đặt ra.` : `${club.costLabel} vượt mức ngân sách bạn đã chọn.` },
    { label:'Cam kết', status:state(commitmentScore,10), text:commitmentScore === 10 ? `Mức ${commitmentLabels[club.commitmentLevel]} đúng với mong muốn của bạn.` : commitmentScore === 5 ? 'Mức cam kết lệch một bậc so với mong muốn của bạn.' : 'Mức cam kết lệch khá xa so với mong muốn của bạn.' }
  ]
  return { club, score:categoryScore + goalScore + slotScore + costScore + commitmentScore, detail }
}

export function calculateAllMatches(clubs, answers) {
  return clubs.map(club => calculateMatch(club, answers)).sort((a,b) => b.score - a.score)
}
