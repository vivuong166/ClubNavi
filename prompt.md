# PROMPT: Phát triển MVP (Phase 1) – Sản phẩm hỗ trợ sinh viên chọn câu lạc bộ (CLB)

Bạn là một senior frontend developer kiêm UI/UX designer. Hãy xây dựng bản **MVP (Phase 1)** dạng web app bằng **Vite + ReactJS**, dùng **Mock Data**, dựa trên toàn bộ thông tin trong prompt này. Hãy làm ngay, không cần hỏi lại. Nếu thiếu thông tin, hãy chọn phương án đơn giản nhất và ghi rõ giả định trong README.

---

## 1. Điều kiện của MVP (Phase 1) – BẮT BUỘC tuân thủ

1. **Đạt tối thiểu mục đích của Solution Interview:** sản phẩm đủ để người được phỏng vấn trải nghiệm giải pháp và cho phản hồi về việc nó có giúp giải quyết Thách thức ① và ② hay không. Vì vậy cả hai luồng chính (trắc nghiệm và danh mục/so sánh) đều phải dùng được từ đầu đến cuối.
2. **Người được phỏng vấn thao tác được:** giao diện trực quan, nhãn rõ ràng bằng tiếng Việt, nút bấm lớn, có đường quay lại ở mọi màn hình, không có ngõ cụt, không cần hướng dẫn.
3. **Ưu tiên tốc độ phát triển, ít thời gian và công sức:**
   - Không dùng backend, không kết nối DB. Toàn bộ dữ liệu là **dummy data** trong file `src/data/`.
   - Không đăng nhập, không phân quyền, không trang quản trị.
   - Không cài thư viện nặng. Chỉ dùng React, `react-router-dom` và CSS thuần (hoặc CSS Modules). Không dùng UI framework.
   - Giao diện do bạn tự thiết kế từ mô tả bằng văn bản dưới đây, tôi sẽ không cung cấp mockup.
4. Không thêm chức năng hay màn hình ngoài phạm vi dưới đây.

---

## 2. Context dự án

**Đối tượng người dùng:** sinh viên đại học cần chọn câu lạc bộ phù hợp với bản thân.

**Vấn đề (Problem):** Sinh viên gặp khó khăn trong việc xác định và lựa chọn CLB phù hợp vì thông tin chi tiết của các CLB (hoạt động, ban ngành, lịch sinh hoạt, điều kiện...) bị thiếu hụt và phân tán, khiến họ dễ bỏ lỡ cơ hội và mất định hướng trong quá trình tìm kiếm.

**Cảm xúc (Feeling):** Do thông tin thiếu hụt và phân tán, sinh viên cảm thấy lo lắng, phân vân, sốt ruột và hoang mang, dần mất phương hướng trong quá trình lựa chọn CLB.

**Thách thức (Challenge):**
- ① Sinh viên có thể tự tin và chủ động đưa ra quyết định lựa chọn CLB phù hợp nhất với sở thích, mục tiêu và điều kiện của bản thân mà không còn cảm giác lo âu hay mông lung.
- ② Sinh viên có thể dễ dàng nắm bắt, so sánh và đối chiếu toàn diện thông tin chi tiết của các CLB mà không bị lãng phí thời gian tìm kiếm.

**Giải pháp (Solution)** – hai giải pháp gộp thành một sản phẩm:
- ① Xây dựng bài trắc nghiệm khảo sát sở thích, mục tiêu và thời gian rảnh để phân tích mức độ khớp và lệch giữa cá nhân với từng CLB, qua đó cung cấp bản đồ định hướng giúp sinh viên tự tin đưa ra quyết định phù hợp.
- ② Gom toàn bộ thông tin các CLB vào một nơi theo mẫu chuẩn, kết hợp hệ thống thẻ phân loại, đánh giá thực tế và bảng so sánh cạnh nhau để sinh viên dễ dàng tra cứu, lọc theo tiêu chí và đối chiếu trực tiếp để lựa chọn nhanh chóng.

**Các chức năng tối thiểu (Minimum Features):**
- F1. Bài trắc nghiệm khảo sát (sở thích, mục tiêu, thời gian rảnh) và tính điểm mức phù hợp với từng CLB.
- F2. Hiển thị kết quả "khớp / lệch": danh sách CLB xếp theo điểm phù hợp, kèm giải thích những tiêu chí khớp và lệch.
- F3. Hồ sơ CLB cơ bản: hoạt động, ban ngành, lịch sinh hoạt, điều kiện tham gia.
- F4. Bảng so sánh cạnh nhau: chọn 2-3 CLB để đối chiếu trực tiếp theo các tiêu chí chuẩn.
- F5. Danh mục CLB theo mẫu chuẩn kèm tìm kiếm, lọc theo thẻ phân loại (lĩnh vực, lịch sinh hoạt, chi phí, mức độ cam kết).
- F6. Đánh giá thực tế của thành viên: số sao và nhận xét ngắn, hiển thị trong trang chi tiết và bảng so sánh. Người dùng được gửi đánh giá mới.

---

## 3. Công nghệ và cấu trúc dự án

- Khởi tạo bằng Vite (template `react`), dùng JavaScript (không bắt buộc TypeScript). Chạy được bằng `npm install` rồi `npm run dev`.
- Routing bằng `react-router-dom`.
- State dùng chung (danh sách CLB kèm đánh giá, danh sách CLB đang chọn để so sánh, câu trả lời trắc nghiệm, kết quả) quản lý bằng React Context + `useState` / `useReducer`. **Chỉ lưu trong bộ nhớ**, tải lại trang thì trở về dữ liệu mẫu ban đầu.
- Cấu trúc thư mục gợi ý:
  - `src/data/clubs.js`: dữ liệu CLB và đánh giá mẫu.
  - `src/data/quiz.js`: câu hỏi trắc nghiệm.
  - `src/utils/matching.js`: hàm tính điểm và sinh giải thích khớp / lệch.
  - `src/context/AppContext.jsx`
  - `src/components/`: `Header`, `ClubCard`, `StarRating`, `CompareBar`, `Toast`, `Tag`...
  - `src/pages/`: `Home`, `Quiz`, `Results`, `ClubList`, `ClubDetail`, `Compare`, `ReviewForm`.
  - `README.md`: cách chạy, danh sách giả định.
- Giao diện: tiếng Việt, phong cách sạch, hiện đại, nhất quán (một bảng màu chính, bo góc, khoảng cách rộng rãi). Ưu tiên desktop nhưng vẫn dùng được trên điện thoại. Mỗi màn hình có trạng thái rỗng và thông báo lỗi rõ ràng.

---

## 4. Mock Data

**Danh sách CLB (`clubs.js`):** tạo **12 CLB hư cấu** (không dùng tên CLB thật), mỗi CLB có:
- `id`, `name`, `shortDescription`
- `category` (lĩnh vực), chọn trong: Học thuật - Công nghệ, Nghệ thuật - Âm nhạc, Thể thao, Tình nguyện - Xã hội, Kinh doanh - Kỹ năng mềm, Ngoại ngữ - Văn hóa
- `activities` (mảng 3-5 hoạt động)
- `departments` (mảng 2-4 ban ngành)
- `schedule`: mô tả lịch sinh hoạt bằng văn bản, kèm `scheduleSlots` (mảng gồm các giá trị: `weekday_afternoon`, `weekday_evening`, `weekend_morning`, `weekend_afternoon`)
- `joinRequirements` (điều kiện tham gia, ví dụ: phỏng vấn, năm học, kỹ năng)
- `costLevel`: 0 = miễn phí, 1 = dưới 50k/tháng, 2 = dưới 100k/tháng, 3 = từ 100k trở lên; kèm `costLabel` hiển thị
- `commitmentLevel`: 1 = nhẹ (1-2 buổi/tháng), 2 = vừa (khoảng 1 buổi/tuần), 3 = cao (nhiều buổi/tuần)
- `goals` (mảng 2-3 giá trị trong: `skills`, `network`, `cv`, `fun`)
- `reviews`: 2-5 đánh giá mẫu, mỗi đánh giá có `id`, `rating` (1-5), `comment` (câu ngắn), `author` (ví dụ "Thành viên ẩn danh"), `createdAt`

Yêu cầu dữ liệu: phủ đủ 6 lĩnh vực, đa dạng lịch, chi phí, mức cam kết. Có ít nhất 2 CLB cùng lĩnh vực nhưng khác lịch hoặc chi phí để bảng so sánh có ý nghĩa.

**Câu hỏi trắc nghiệm (`quiz.js`):** 5 câu, hiển thị từng câu một:
1. Lĩnh vực bạn quan tâm (chọn nhiều, 6 lĩnh vực ở trên).
2. Mục tiêu khi tham gia CLB (chọn nhiều: phát triển kỹ năng / mở rộng quan hệ / tích lũy kinh nghiệm cho CV / thư giãn, giải trí).
3. Thời gian rảnh của bạn (chọn nhiều: chiều ngày thường / tối ngày thường / sáng cuối tuần / chiều cuối tuần).
4. Ngân sách tối đa mỗi tháng (chọn một, tương ứng costLevel 0-3).
5. Mức độ cam kết mong muốn (chọn một, tương ứng commitmentLevel 1-3).

---

## 5. Thuật toán tính điểm (`matching.js`)

Điểm mỗi CLB trên thang 100, gồm 5 tiêu chí:

| Tiêu chí | Điểm tối đa | Quy tắc |
|---|---|---|
| Lĩnh vực | 40 | Lĩnh vực của CLB nằm trong lựa chọn câu 1: 40 điểm, ngược lại 0 |
| Mục tiêu | 20 | 20 × (số mục tiêu của CLB trùng với lựa chọn câu 2 ÷ tổng số mục tiêu của CLB) |
| Thời gian rảnh | 20 | Tất cả slot của CLB nằm trong slot rảnh: 20; một phần: 10; không trùng: 0 |
| Chi phí | 10 | `costLevel` ≤ ngân sách: 10, ngược lại 0 |
| Mức cam kết | 10 | Bằng nhau: 10; lệch 1 mức: 5; lệch 2 mức: 0 |

Với mỗi CLB, hàm trả về: tổng điểm (hiển thị dạng %) và danh sách 5 tiêu chí, mỗi tiêu chí có trạng thái `khớp` / `một phần` / `lệch` kèm **câu giải thích bằng tiếng Việt** cụ thể (ví dụ: "Lịch sinh hoạt tối thứ 7 không trùng với thời gian rảnh của bạn"). Kết quả sắp xếp giảm dần theo điểm.

---

## 6. Chi tiết các màn hình và route

Header dùng chung: logo/tên sản phẩm (bấm vào để về S01) và nút "Danh mục CLB".

### S01 – Trang chủ (`/`)
- Mục đích: điểm bắt đầu, giúp người dùng chọn cách tìm CLB.
- Nội dung: tiêu đề và 1-2 câu giới thiệu; **hai thẻ lựa chọn lớn**: "Làm trắc nghiệm để tìm CLB hợp với bạn" (→ S02) và "Tự xem danh mục CLB" (→ S04).

### S02 – Trắc nghiệm khảo sát (`/quiz`)
- Mục đích: thu thập sở thích, mục tiêu, thời gian rảnh (F1).
- Hiển thị từng câu một, có thanh tiến độ ("Câu 2/5"), nút "Tiếp" và "Quay lại câu trước".
- Chặn "Tiếp" nếu chưa chọn đáp án và hiện thông báo ngắn ngay cạnh câu hỏi.
- Câu cuối có nút "Xem kết quả" → tính điểm → S03. Có nút "Thoát" → S01.

### S03 – Kết quả khớp / lệch (`/results`)
- Mục đích: bản đồ định hướng giúp sinh viên tự tin quyết định (F1, F2).
- Danh sách CLB xếp theo điểm giảm dần. Mỗi thẻ gồm tên, lĩnh vực, **% phù hợp** (thanh tiến độ), tóm tắt tiêu chí khớp / lệch bằng biểu tượng hoặc huy hiệu màu (xanh = khớp, vàng = một phần, đỏ = lệch).
- Bấm vào thẻ hoặc phần giải thích để mở rộng, xem câu giải thích đầy đủ cho từng tiêu chí.
- Hành động: "Xem chi tiết" → S05; "Làm lại trắc nghiệm" → S02; "Xem danh mục CLB" → S04; "Về trang chủ" → S01.
- Nếu chưa làm trắc nghiệm mà vào thẳng `/results`, chuyển hướng về S02.

### S04 – Danh mục CLB (`/clubs`)
- Mục đích: duyệt, tìm và lọc toàn bộ CLB theo mẫu chuẩn (F5).
- Ô tìm kiếm theo tên. Bộ lọc theo thẻ phân loại: lĩnh vực, lịch sinh hoạt, chi phí, mức độ cam kết (các thẻ có thể bật hoặc tắt, kết hợp được nhiều bộ lọc, hiển thị số kết quả và nút "Xóa bộ lọc").
- Mỗi thẻ CLB (`ClubCard`) hiển thị: tên, mô tả ngắn, các thẻ phân loại, số sao trung bình, nút **"Thêm vào so sánh"** (đổi thành "Bỏ khỏi so sánh" khi đã thêm).
- Bấm vào tên hoặc ảnh thẻ → S05. Nút "Làm trắc nghiệm" → S02.
- **Thanh so sánh cố định** (`CompareBar`) ở cuối màn hình khi đã thêm ít nhất 1 CLB: hiển thị tên các CLB đã chọn, nút bỏ từng CLB, nút "So sánh (n)" chỉ bật khi n ≥ 2 → S06.
- Trạng thái rỗng khi không có kết quả lọc.

### S05 – Chi tiết CLB (`/clubs/:id`)
- Mục đích: xem đầy đủ thông tin một CLB, màn hình dùng chung của hai luồng (F3, F6).
- Nội dung theo mẫu chuẩn: tên, lĩnh vực, mô tả; hoạt động; ban ngành; lịch sinh hoạt; điều kiện tham gia; chi phí; mức độ cam kết.
- Khu vực đánh giá: số sao trung bình, số lượt đánh giá, danh sách nhận xét (mới nhất ở trên).
- Nút: "Thêm vào so sánh" (cũng đổi trạng thái như S04, có `CompareBar`), "Viết đánh giá" → S07, "Quay lại" (về đúng màn hình đã đến: S03, S04 hoặc S06, dùng `navigate(-1)`), "Về trang chủ".
- Nếu `id` không tồn tại, hiện thông báo và nút về S04.

### S06 – Bảng so sánh (`/compare`)
- Mục đích: đối chiếu trực tiếp 2-3 CLB (F4, F6).
- Bảng cạnh nhau, mỗi cột là một CLB, các hàng gồm: lĩnh vực, mô tả ngắn, hoạt động, ban ngành, lịch sinh hoạt, điều kiện tham gia, chi phí, mức độ cam kết, **số sao trung bình và 1-2 nhận xét ngắn mới nhất**.
- Dưới mỗi cột: nút "Xem chi tiết" → S05 và nút "Bỏ khỏi so sánh".
- Nút "Thêm CLB khác" → S04. Nếu còn dưới 2 CLB thì hiện thông báo và nút về S04.
- Tối đa 3 CLB. Khi thêm CLB thứ 4, không thêm và hiện thông báo "Chỉ so sánh tối đa 3 CLB, hãy bỏ bớt 1 CLB".
- Có nút "Quay lại" và "Về trang chủ".

### S07 – Gửi đánh giá (`/clubs/:id/review`)
- Mục đích: cho thành viên gửi đánh giá thực tế về một CLB (F6).
- Hiển thị tên CLB đang đánh giá. Form gồm: chọn số sao 1-5 (bắt buộc) và nhận xét ngắn (bắt buộc, tối đa 200 ký tự, hiện bộ đếm ký tự). **Không** thêm đăng nhập hay xác minh người gửi. Người gửi hiển thị là "Thành viên ẩn danh".
- Kiểm tra dữ liệu: nếu thiếu sao hoặc nhận xét, hiện thông báo lỗi ngay cạnh trường đó và không gửi.
- Gửi thành công: thêm đánh giá vào state, hiện thông báo "Cảm ơn bạn đã đánh giá", quay lại S05. Số sao trung bình và danh sách nhận xét cập nhật ngay, cả ở S04 và S06.
- Nút "Hủy" → quay lại S05.

---

## 7. Bảng chuyển màn hình (phải đúng như bảng này)

| Từ | Hành động | Đến |
|---|---|---|
| Bắt đầu | Mở app | S01 |
| S01 | "Làm trắc nghiệm" | S02 |
| S01 | "Tự xem danh mục CLB" | S04 |
| S02 | Hoàn thành câu cuối, "Xem kết quả" | S03 |
| S02 | "Thoát" | S01 |
| S03 | Chọn một CLB | S05 |
| S03 | "Làm lại trắc nghiệm" | S02 |
| S03 | "Xem danh mục CLB" | S04 |
| S04 | Chọn một CLB | S05 |
| S04 | "So sánh (n)" với n từ 2 đến 3 | S06 |
| S04 | "Làm trắc nghiệm" | S02 |
| S05 | "Thêm vào so sánh" | cập nhật danh sách, `CompareBar` dẫn tới S06 |
| S05 | "Viết đánh giá" | S07 |
| S05 | "Quay lại" | màn hình trước đó (S03, S04 hoặc S06) |
| S06 | "Xem chi tiết" | S05 |
| S06 | "Thêm CLB khác" | S04 |
| S07 | Gửi thành công hoặc "Hủy" | S05 |
| S02 đến S06 | "Về trang chủ" | S01 |
| S05, S06 | "Quyết định chọn CLB" (nút tùy chọn, hiện thông báo "Bạn đã chọn CLB X") | Đích của hành trình, không cần màn hình riêng |

---

## 8. Kết quả cần giao

1. Mã nguồn đầy đủ, chạy được ngay bằng `npm install` và `npm run dev`, không lỗi console.
2. `README.md` ngắn gồm: cách chạy, cấu trúc thư mục, danh sách giả định đã áp dụng.
3. Trước khi kết thúc, tự kiểm tra và báo cáo ngắn theo checklist:
   - F1 đến F6 đều có màn hình đáp ứng.
   - Luồng 1: S01 → S02 → S03 → S05 chạy được.
   - Luồng 2: S01 → S04 → (lọc) → S06 → S05 chạy được, thêm đánh giá ở S07 hiển thị ở S05 và S06.
   - Mọi màn hình đều có đường quay lại hoặc về trang chủ.
   - Không có chức năng hay màn hình ngoài phạm vi.

**Thứ tự làm đề xuất:** tạo khung dự án và router, dữ liệu mẫu, Context, các màn hình theo thứ tự S01 đến S07, rồi kiểm tra theo checklist.
