import { categories, scheduleLabels, goalLabels } from './clubs'

export const quizQuestions = [
  { id:'categories', title:'Bạn quan tâm đến lĩnh vực nào?', hint:'Có thể chọn nhiều lĩnh vực', type:'multiple', options:categories.map(x => ({ value:x, label:x })) },
  { id:'goals', title:'Mục tiêu của bạn khi tham gia CLB là gì?', hint:'Chọn những điều bạn ưu tiên', type:'multiple', options:Object.entries(goalLabels).map(([value,label]) => ({value,label})) },
  { id:'slots', title:'Bạn thường rảnh vào thời gian nào?', hint:'Chọn tất cả khung giờ phù hợp', type:'multiple', options:Object.entries(scheduleLabels).map(([value,label]) => ({value,label})) },
  { id:'budget', title:'Ngân sách tối đa mỗi tháng của bạn?', hint:'Chọn một mức phù hợp', type:'single', options:[{value:0,label:'Miễn phí'},{value:1,label:'Dưới 50k/tháng'},{value:2,label:'Dưới 100k/tháng'},{value:3,label:'Từ 100k trở lên'}] },
  { id:'commitment', title:'Bạn mong muốn mức độ cam kết thế nào?', hint:'Chọn một mức phù hợp với lịch học', type:'single', options:[{value:1,label:'Nhẹ · 1–2 buổi/tháng'},{value:2,label:'Vừa · khoảng 1 buổi/tuần'},{value:3,label:'Cao · nhiều buổi/tuần'}] }
]
