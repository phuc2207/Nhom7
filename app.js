const FINAL_SUBMISSION_FORM_URL = "https://forms.gle/Kjc7ism59AYpLVsC7"; // Google Form nộp sản phẩm cuối.

const timeline = [
  {week:1,period:"Tiết 1–2",title:"Hiểu bài toán và dữ liệu",text:"Khởi động WebQuest; Chặng 1: Tìm hiểu bài toán; Chặng 2: Phân tích dữ liệu vào/ra."},
  {week:2,period:"Tiết 3–4",title:"Điều kiện và thuật toán",text:"Chặng 3: Xác định điều kiện giảm giá; Chặng 4: Thiết kế thuật toán."},
  {week:3,period:"Tiết 5–6",title:"Lập trình phần 1",text:"Chặng 5: xây dựng chương trình cơ bản bằng Python, xử lí một và nhiều mặt hàng."},
  {week:4,period:"Tiết 7–8",title:"Hoàn thiện, kiểm thử, gỡ lỗi",text:"Chặng 5 phần 2; Chặng 6; Chặng 7. Hoàn thiện sản phẩm và chuẩn bị báo cáo trước tuần cuối."},
  {week:5,period:"Tiết 9–10",title:"Báo cáo sản phẩm",text:"Chặng 8: trình bày, chạy thử, trả lời câu hỏi, đánh giá đồng đẳng và nghiệm thu. Không dành tiết này để viết lại chương trình."}
];

const submissionFormats = {
  "1": "Phiếu 1 .docx hoặc .pdf; ảnh hóa đơn đã chú thích .png/.jpg (nếu có).",
  "2": "Phiếu 2 .docx hoặc .pdf; ảnh thí nghiệm Python .png/.jpg.",
  "3": "Phiếu 3 .docx hoặc .pdf; ít nhất 1 câu hỏi trên Padlet (điền link hoặc ảnh .png/.jpg vào phiếu).",
  "4": "Phiếu 4 .docx hoặc .pdf; thuật toán dạng liệt kê .pdf hoặc sơ đồ khối .png/.pdf.",
  "5": "hoadon_final.py (bắt buộc); Phiếu 5 .docx/.pdf; ảnh chạy thử .png/.jpg (nếu có).",
  "6": "bang_kiem_thu.xlsx (ưu tiên) hoặc Google Sheets cấp quyền xem; ít nhất 6 ca kiểm thử.",
  "7": "phieu_go_loi.docx/.pdf; thu_thach_san_loi_da_sua.py; ảnh trước/sau .png/.jpg (nếu có).",
  "8": "Thư mục Google Drive chứa: hoadon_final.py, thuat_toan.pdf/.png, bang_kiem_thu.xlsx, phieu_go_loi.docx/.pdf, bao_cao.docx/.pdf, trinh_bay.pptx/.pdf. Dán các link vào Google Form."
};

const stages = [
  {id:1,title:"Tìm hiểu bài toán",period:"Tuần 1 · Tiết 1",lead:"Nhóm trưởng",goal:"Phát biểu được bài toán và xác định cửa hàng đang gặp khó khăn gì.",context:"Em vào vai thám tử hóa đơn: kiểm tra 3 hóa đơn viết tay, tìm chỗ sai rồi tự phát biểu bài toán. Chặng này chưa cần viết Python.",questions:["Hóa đơn nào bị tính sai? Sai ở dòng nào?","Vì sao nhân viên dễ sai ở chỗ đó?","Chương trình cần nhận vào dữ liệu gì?","Chương trình phải in ra những gì?"],activities:["Tự tính lại hóa đơn được giao.","Ghép kết quả trong nhóm và khoanh chỗ sai.","Hoàn thành Phiếu 1.","Phân vai và bắt đầu nhật ký nhóm."],product:"Phiếu 1 – phát biểu bài toán và ảnh 3 hóa đơn đã khoanh chỗ sai.",checklist:["Đã tính lại cả 3 hóa đơn.","Chỉ ra hóa đơn sai và dòng sai.","Phát biểu đủ dữ liệu vào, việc tính, kết quả ra và yêu cầu.","Chưa viết Python."],hints:["Kiểm tra từng dòng trước khi nhìn tổng.","Chú ý mặt hàng vừa chạm ngưỡng 10.","Đọc phát biểu cho nhóm khác nghe để kiểm tra độ rõ."],exit:"Vé C1: xác định hóa đơn bị tính sai và thành tiền đúng của dòng sai."},
  {id:2,title:"Phân tích dữ liệu vào/ra",period:"Tuần 1 · Tiết 2",lead:"Phân tích viên",goal:"Xác định dữ liệu vào/ra, kiểu dữ liệu, biến, hằng và danh sách.",context:"Trước khi viết mã, nhóm phải biết chương trình cần nhận gì, tự tính gì và cần lưu lại dữ liệu nào.",questions:["Thông tin nào nhân viên nhập?","Thông tin nào máy tính tự tính?","Có/không nên lưu bằng kiểu gì?","Giá trị nào nên là hằng?","Nhiều mặt hàng nên lưu thế nào?"],activities:["Tô màu dữ liệu trên hóa đơn C.","Điền Phiếu 2.","Đặt tên biến theo quy tắc Python.","Thí nghiệm với input(), int(), phép so sánh và kiểu dữ liệu."],product:"Phiếu 2 – bảng dữ liệu vào/ra, biến/hằng và ảnh kết quả thí nghiệm.",checklist:["Có dữ liệu vào, ra và trung gian.","Có kiểu dữ liệu và ví dụ.","Có ít nhất một dữ liệu logic.","Có danh sách và giải thích vì sao cần.","Có ít nhất 4 hằng."],hints:["Hỏi mỗi con số trên hóa đơn đến từ người gõ, máy tính hay quy định.","input() luôn cho dữ liệu xâu trước khi chuyển kiểu.","Thông tin có/không có thể biểu diễn bằng logic."],exit:"Vé C2: xác định kiểu trả về của input(), kiểu của thẻ thành viên và giá trị nên là hằng."},
  {id:3,title:"Xác định điều kiện",period:"Tuần 2 · Tiết 3",lead:"Phân tích viên",goal:"Viết quy định thành điều kiện chính xác và xác định đúng giá trị biên.",context:"Một dấu > hay >= có thể làm kết quả sai đúng tại ranh giới. Nhóm phải biến lời của cửa hàng thành điều kiện không chồng lấn, không bỏ sót.",questions:["Từ nào trong quy định chỉ ra ranh giới?","Quy định nào xét từng mặt hàng, quy định nào xét hóa đơn?","Tổng dùng để xét giảm được tính lúc nào?","Điểm nào còn mơ hồ cần hỏi chủ cửa hàng?"],activities:["Vẽ trục số cho số lượng và tổng tiền.","Hoàn thành Phiếu 3.","Thử thứ tự if–elif.","Đăng ít nhất một câu hỏi làm rõ lên Padlet và cập nhật Phiếu 3 sau khi nhận phản hồi."],product:"Phiếu 3 – bảng điều kiện, giá trị biên, câu hỏi làm rõ và câu trả lời nhận được.",checklist:["Các trường hợp phủ kín và không chồng nhau.","Dấu so sánh ở ranh giới đúng.","Có ít nhất 6 giá trị biên.","Đã đăng ít nhất một câu hỏi lên Padlet."],hints:["Đọc lại cụm từ “từ 200.000 đồng”.","Thử ngay dưới và đúng bằng mỗi ngưỡng.","Dùng hóa đơn C để suy luận cách kết hợp tỉ lệ."],exit:"Vé C3: tính một hóa đơn mới có cả ranh giới số lượng và thẻ thành viên."},
  {id:4,title:"Thiết kế thuật toán",period:"Tuần 2 · Tiết 4",lead:"Phân tích viên + Lập trình viên",goal:"Mô tả thuật toán có tuần tự, rẽ nhánh, lặp và cách lưu nhiều mặt hàng.",context:"Trước khi nấu bằng Python, nhóm phải có công thức. Chặng này biến quy trình thu ngân thành thuật toán có thể chạy tay.",questions:["Công việc nào lặp lại?","Rẽ nhánh nằm trong hay ngoài vòng lặp?","Tổng tiền khởi tạo ở đâu?","Phần nào nên tách thành chương trình con?"],activities:["Trò chơi người máy thu ngân.","Sắp xếp các bước thuật toán.","Vẽ sơ đồ khối bằng giấy, draw.io hoặc Google Drawings.","Chạy tay với hóa đơn C.","Đổi thuật toán cho nhóm khác kiểm tra."],product:"Phiếu 4 – thuật toán, bảng chạy tay hóa đơn C và chương trình con dự kiến.",checklist:["Có tuần tự, rẽ nhánh, lặp.","Khởi tạo tổng đúng chỗ.","Có bước lưu mặt hàng.","Có ít nhất 2 chương trình con dự kiến.","Chạy tay đúng hóa đơn C."],hints:["Kể bằng lời những việc thu ngân làm cho một mặt hàng.","Khởi tạo tổng trước vòng lặp.","Thử cố tình đặt tổng = 0 bên trong vòng lặp để thấy lỗi."],exit:"GV hoặc nhóm được chỉ định duyệt Phiếu 4 trước khi mở Chặng 5."},
  {id:5,title:"Viết chương trình",period:"Tuần 3–4 · Tiết 5–7",lead:"Lập trình viên",goal:"Chuyển thuật toán thành chương trình Python có rẽ nhánh, lặp, list, ít nhất 2 hàm và kiểm tra dữ liệu nhập.",context:"Đây là chặng dài nhất. Nhóm viết theo từng phần nhỏ, chạy thử sau mỗi phần và lưu các phiên bản thay vì viết một mạch rồi hy vọng mọi thứ tự ổn.",questions:["Dữ liệu nào phải chuyển kiểu?","Tổng tiền cập nhật ở đâu?","Thông tin nào cần lưu vào list?","Đoạn nào nên tách thành hàm?"],activities:["Khám phá chương trình mẫu xếp loại điểm, sau đó tự phát triển mã hóa đơn.","Viết nhập dữ liệu.","Xử lí một mặt hàng với 9, 10, 11.","Mở rộng sang nhiều mặt hàng.","Áp dụng giảm giá hóa đơn.","Tạo ít nhất 2 hàm.","Kiểm tra dữ liệu nhập và chú thích mã."],product:"Phiếu 5 (.docx/.pdf); hoadon_v1.py và hoadon_final.py; ảnh chạy thử (.png/.jpg). Mã mẫu đầy đủ chỉ để đối chiếu sau khi nhóm đã tự viết bản đầu.",checklist:["Chạy được với nhiều mặt hàng.","Có rẽ nhánh, vòng lặp, list.","Có ít nhất 2 hàm tự tạo.","Có dùng hàm chuẩn.","Có kiểm tra dữ liệu nhập.","Mỗi thành viên giải thích được ít nhất một hàm."],hints:["Mở lại Phiếu 3 và 4 trước khi sửa mã.","Tổng chỉ bằng mặt hàng cuối thường do đặt biến tổng sai chỗ.","Hàm trả về None thì kiểm tra return."],exit:"Vé Chặng 5: chạy chương trình với hóa đơn bí mật do GV đưa tại chỗ."},
  {id:6,title:"Tạo bộ dữ liệu kiểm thử",period:"Tuần 4 · Tiết 8 (phần 1)",lead:"Kiểm thử viên",goal:"Thiết kế ít nhất 6 ca kiểm thử có dữ liệu thường, biên, không hợp lệ; 5 ca chung và tối thiểu 1 ca tự thiết kế.",context:"5 ca thử chung dùng để giáo viên đối chiếu, nhưng bảng nhóm nộp tối thiểu 6 ca: thêm ít nhất 1 ca do chính nhóm thiết kế. 9 ca trong báo cáo minh họa chỉ là một bộ mẫu mở rộng, không bắt buộc.",questions:["Lỗi thường trốn ở đâu?","Mỗi ngưỡng nên thử giá trị nào?","Kết quả mong đợi tính trước hay sau khi chạy?"],activities:["Liệt kê nhóm tình huống.","Thiết kế dữ liệu cụ thể.","Hai thành viên tính kết quả mong đợi độc lập.","Chạy tối thiểu 6 ca kiểm thử và đối chiếu kết quả.","Trao đổi bộ test khó với nhóm khác."],product:"Bảng kiểm thử .xlsx (hoặc Google Sheets chia sẻ quyền xem): ít nhất 6 ca, gồm 5 ca thử chung và 1 ca nhóm tự thiết kế.",checklist:["Có ít nhất 6 ca: 5 ca chung + ≥1 ca tự đề xuất.","Bao phủ trường hợp thường, biên và dữ liệu không hợp lệ.","Có kiểm thử ranh giới, đặc biệt 9/10 sản phẩm và 200.000/500.000 đồng.","Có trường hợp thẻ và không thẻ.","Kết quả mong đợi được ghi trước khi chạy."],hints:["Một lỗi > thay cho >= cần một ca đúng tại biên.","Một số tiền chưa phải bộ test đầy đủ.","Thử tổng trước giảm đúng 200.000 nhưng có mặt hàng đủ 10 sản phẩm."],exit:"Vé C6: chọn bộ dữ liệu phát hiện lỗi tong > 200000 thay cho tong >= 200000."},
  {id:7,title:"Phát hiện và sửa lỗi",period:"Tuần 4 · Tiết 8 (phần 2)",lead:"Kiểm thử viên + Lập trình viên",goal:"Biết phát hiện, giải thích và sửa lỗi; mọi nhóm có cơ hội gỡ lỗi dù chương trình riêng đã chạy đúng.",context:"Để đánh giá công bằng, GV cung cấp một chương trình hóa đơn chứa 2 lỗi logic có chủ đích. Nhóm phải dùng dữ liệu kiểm thử phát hiện và sửa lỗi. Nếu chương trình riêng đã đúng, vẫn làm thử thách này; tuyệt đối không tạo lỗi giả trong mã cuối.",questions:["Vì sao một chương trình chạy được vẫn có thể sai?","Dữ liệu ranh giới nào giúp phát hiện lỗi?","Vì sao cần có kết quả trước và sau khi sửa?"],activities:["Tải file thử thách có lỗi từ mục Học liệu Chặng 7.","Chọn ca thử làm lộ lỗi, tính trước kết quả mong đợi.","Ghi kết quả thực tế và khoanh vùng bằng print() hoặc Python Tutor.","Sao chép mã sang file bản sửa rồi chỉnh và chạy lại.","Ghi đủ 2 lỗi vào phiếu thực hành hoặc nhật ký lỗi; nếu có lỗi thật ở mã nhóm, có thể dùng minh chứng đó thay thế."],product:"Phiếu gỡ lỗi (.docx/.pdf) với 2 lỗi có minh chứng trước/sau; file thu_thach_san_loi_da_sua.py; ảnh chạy thử (.png/.jpg) nếu có. Không cần tạo lỗi trong mã nhóm.",checklist:["Đã tải và chạy mã thử thách có lỗi.","Tìm và sửa 2 lỗi có chủ đích (hoặc minh chứng tương đương từ lỗi thực tế).","Ghi ca thử, nguyên nhân, cách sửa và kết quả sau sửa.","Chạy lại ca thử liên quan; không sửa mã đúng thành mã sai để lấy điểm.","Mã hóa đơn cuối của nhóm vẫn hoạt động ổn định."],hints:["Hãy dùng ca thử đúng bằng ngưỡng, không chỉ giá trị cao hơn.","Dùng print để quan sát giá trị so sánh trong if/elif.","Chỉ sửa nguyên nhân, rồi chạy lại ca thử đó để xác nhận."],exit:"Vé C7: phân loại các tình huống lỗi theo đúng loại."},
  {id:8,title:"Hoàn thiện và báo cáo sản phẩm",period:"Tuần 5 · Tiết 9–10",lead:"Thuyết trình viên",goal:"Báo cáo, giải thích, chạy thử và bảo vệ sản phẩm trước lớp theo rubric dự án.",context:"Sản phẩm phải hoàn thiện trước tuần 5. Hai tiết cuối chỉ dành cho báo cáo, chạy thử, hỏi đáp, đánh giá đồng đẳng và nghiệm thu.",questions:["Nhóm sẽ kể câu chuyện dự án theo trình tự nào?","Ai giải thích phần thuật toán, code, kiểm thử và lỗi?","Những minh chứng nào cho thấy chương trình chạy đúng?"],activities:["Hoàn tất slide và báo cáo trước khi vào tuần 5.","Trình bày bài toán, thuật toán, kết quả theo trình tự.","Chạy thử chương trình trước lớp.","Trả lời câu hỏi về chương trình.","Đánh giá nhóm bạn và phản tư."],product:"Nộp link thư mục Drive gồm: hoadon_final.py; thuat_toan.pdf/.png; bang_kiem_thu.xlsx (≥6 ca); phieu_go_loi.docx/.pdf; bao_cao.pdf/.docx; trinh_bay.pptx/.pdf.",checklist:["Đủ các mục báo cáo theo rubric.","Chương trình và thuật toán khớp nhau.","Đã chạy lại các ca thử chung.","Mọi link/tệp nộp mở được.","Đã phân công người trình bày và luyện thời gian theo rubric."],hints:["Sắp xếp nội dung theo bài toán → thuật toán → chương trình → kiểm thử → lỗi → kết quả.","Không chỉ đọc slide; phải giải thích được chương trình.","Chuẩn bị chạy thử ổn định trước khi lên báo cáo."],exit:"Nghiệm thu cuối: trình bày, chạy thử, trả lời câu hỏi và được chấm theo rubric dự án."}
];

const resources = [
{id:"common-drive",stage:0,type:"Google Drive",title:"Kho học liệu gốc của dự án",desc:"Thư mục Google Drive chứa học liệu của toàn bộ WebQuest.",url:"https://drive.google.com/drive/folders/1U27RrJ71ou_mF-UYfKSmD6dyGmyXOwCs"},
{id:"sgk",stage:0,type:"SGK",title:"SGK Tin học 10",desc:"Tài liệu dùng chung trong dự án.",url:"https://drive.google.com/file/d/1ntZp41kYKb0w3-fEB4OD4KWtRWg6thhI/view?usp=sharing"},
{id:"common-submit",stage:0,type:"Google Form",title:"Nộp sản phẩm cuối dự án",desc:"Biểu mẫu nộp hồ sơ sản phẩm cuối của nhóm.",url:"https://forms.gle/Kjc7ism59AYpLVsC7"},
{id:"s1-letter",stage:1,type:"Tài liệu",title:"Thư của chủ cửa hàng",desc:"Tình huống mở đầu dự án.",url:"https://drive.google.com/file/d/1gXvQkmtjY9btUW5ts79LfG9IYuETb_lK/view?usp=sharing"},
{id:"s1-rule",stage:1,type:"Tài liệu",title:"Thẻ quy tắc giảm giá",desc:"Ba quy định công khai của Mini Mart.",url:"https://drive.google.com/file/d/1Xp2nvxtzNn17ZeWvKLKuuXS4px6kdjh8/view?usp=sharing"},
{id:"s1-a",stage:1,type:"Hóa đơn",title:"Hóa đơn A",desc:"Hóa đơn mẫu dùng để kiểm tra cách tính.",url:"https://drive.google.com/file/d/1466x4jusvb-JQ7RDnKv5gTwsSMbRctuO/view?usp=sharing"},
{id:"s1-b",stage:1,type:"Hóa đơn",title:"Hóa đơn B",desc:"Hóa đơn có tình huống cần phát hiện.",url:"https://drive.google.com/file/d/1kRvRXShwy4ijPKkRI9YwTMuWicUn3RW2/view?usp=sharing"},
{id:"s1-c",stage:1,type:"Hóa đơn",title:"Hóa đơn C",desc:"Hóa đơn mẫu dùng lại ở các chặng sau.",url:"https://drive.google.com/file/d/11Vj1PdnYwPPNO2G8IoQYmBTtL2JtXK0V/view?usp=sharing"},
{id:"s1-p1",stage:1,type:"Phiếu học tập",title:"Phiếu 1 – Phát biểu bài toán",desc:"Khung phát biểu bài toán của nhóm.",url:"https://docs.google.com/document/d/1NAtQ7gQChEmKoTrmiyvkbzibyJjhsU3B/view"},
{id:"s1-form",stage:1,type:"Google Form",title:"Vé qua Chặng 1 – Thám tử hóa đơn",desc:"Biểu mẫu vé C1.",url:"https://docs.google.com/forms/d/1YSH0SQoGt20HG01pw6sJx8ubo4N2NngkU0t4GwCrN4o/viewform"},
{id:"s2-p2",stage:2,type:"Phiếu học tập",title:"Phiếu 2 – Dữ liệu vào/ra",desc:"Bảng dữ liệu, kiểu, biến và hằng.",url:"https://docs.google.com/document/d/1k9tZQvcg7ga57lOEet6G46Xl4-CjT9G3/view"},
{id:"s2-form",stage:2,type:"Google Form",title:"Trắc nghiệm lập trình C2",desc:"Vé qua Chặng 2.",url:"https://docs.google.com/forms/d/1zjiPf2qWshWLiS0DNyiQcbo3_qu7kQfyLKjeEqrm-VA/viewform"},
{id:"s2-linkdoc",stage:2,type:"Tổng hợp liên kết",title:"Link tài liệu Chặng 2",desc:"Tệp Drive tổng hợp các liên kết Python dùng ở Chặng 2.",url:"https://docs.google.com/document/d/1fiI8W5TUcfSEx3qDZmckVtqG08vQoOCb2pfWM6r0yec/view"},
{id:"s2-pydoc",stage:2,type:"Liên kết",title:"Python Tutorial – Introduction",desc:"Numbers, Text, Lists và cú pháp cơ bản.",url:"https://docs.python.org/3/tutorial/introduction.html"},
{id:"s2-vn",stage:2,type:"Liên kết",title:"Tài liệu Python tiếng Việt",desc:"Nguồn tra cứu bổ sung.",url:"https://taipm.github.io/python_book/"},
{id:"s3-rule",stage:3,type:"Tài liệu",title:"Thẻ quy tắc giảm giá",desc:"Đọc lại trước khi viết điều kiện.",url:"https://drive.google.com/file/d/1Xp2nvxtzNn17ZeWvKLKuuXS4px6kdjh8/view?usp=sharing"},
{id:"s3-invoice-c",stage:3,type:"Hóa đơn",title:"Hóa đơn C",desc:"Dùng để suy luận cách áp dụng các mức giảm.",url:"https://drive.google.com/file/d/11Vj1PdnYwPPNO2G8IoQYmBTtL2JtXK0V/view?usp=sharing"},
{id:"s3-axis",stage:3,type:"Tài liệu",title:"Trục số giá trị biên",desc:"Hỗ trợ xác định các ngưỡng quan trọng.",url:"https://drive.google.com/file/d/1_TcMaXVEXpLsVWsgQNYcwOKji2kQs6Q7/view?usp=sharing"},
{id:"s3-p3",stage:3,type:"Phiếu học tập",title:"Phiếu 3 – Điều kiện",desc:"Chuyển quy định thành điều kiện toán học và Python.",url:"https://docs.google.com/document/d/10-h75vWrQuOnZuuwhSuMM8iF-B1darRD/view"},
{id:"s3-form",stage:3,type:"Google Form",title:"Bài toán thanh toán – Vé C3",desc:"Biểu mẫu vé qua Chặng 3.",url:"https://docs.google.com/forms/d/1U-Ldp4XTOlp_tOGrVZur_zHV_EJtmSeyyYw7aXGoDVQ/viewform"},
{id:"s3-padlet",stage:3,type:"Padlet",title:"Hỏi chủ cửa hàng – Làm rõ quy tắc giảm giá",desc:"Mỗi nhóm đăng ít nhất một câu hỏi làm rõ quy tắc và đọc phản hồi của GV.",url:"https://padlet.com/Pohuc/ban-se-at-cau-hoi-nao-e-lam-ro-quy-tac-giam-gia-trong-he-tho-s0246abo6cgwdo8e64x9"},
{id:"s4-linkdoc",stage:4,type:"Tổng hợp công cụ",title:"Công cụ Chặng 4",desc:"Tệp Drive chứa liên kết draw.io và Google Drawings.",url:"https://docs.google.com/document/d/16yYkUtoriu3YcsTRtRo9GXWAm-R_oExxy4fbffswOio/view"},
{id:"s4-p4",stage:4,type:"Phiếu học tập",title:"Phiếu 4 – Thuật toán",desc:"Thuật toán, sơ đồ khối và chạy tay.",url:"https://docs.google.com/document/d/180iDoeuG-tJsvn-pmoqNB3tA9FQX8OIY/view"},
{id:"s4-symbol",stage:4,type:"Tài liệu",title:"Thẻ ký hiệu sơ đồ khối",desc:"Tra cứu nhanh ký hiệu thuật toán.",url:"https://drive.google.com/file/d/1dKkb-FPxW_oLT6sbzb4U-7wgRPtYv8yy/view?usp=sharing"},
{id:"s4-drawio",stage:4,type:"Công cụ",title:"draw.io / diagrams.net",desc:"Vẽ sơ đồ khối trực tuyến.",url:"https://app.diagrams.net/"},
{id:"s4-gdraw",stage:4,type:"Công cụ",title:"Google Drawings",desc:"Vẽ và chia sẻ sơ đồ.",url:"https://docs.google.com/drawings/"},
{id:"s5-p5",stage:5,type:"Phiếu học tập",title:"Phiếu 5 – Khám phá code",desc:"Dự đoán, chạy thử và giải thích chương trình mẫu.",url:"https://docs.google.com/document/d/1afI97GjCnu32VNvIVqQN6xVJPBRCjvP5/view"},
{id:"s5-linkdoc",stage:5,type:"Tổng hợp liên kết",title:"Link tài liệu Chặng 5",desc:"Tệp Drive chứa Python Tutorial và Python Tutor.",url:"https://docs.google.com/document/d/1qRDe0jZD4sPYH9JBUmO-BVE5eVCZPX7yfq3c7FiGIkM/view"},
{id:"s5-sample",stage:5,type:"Mã nguồn",title:"mau_xep_loai_diem.py",desc:"Chương trình mẫu ở bối cảnh khác.",url:"https://drive.google.com/file/d/1T9-Ke3P0jSTxvvKDl9WQIBl_O85Wa5PG/view?usp=sharing"},
{id:"s5-pydoc",stage:5,type:"Liên kết",title:"Python Tutorial",desc:"Tra cứu lặp, hàm, danh sách và lỗi.",url:"https://docs.python.org/3/tutorial/"},
{id:"s5-tutor",stage:5,type:"Công cụ",title:"Python Tutor",desc:"Quan sát từng bước thực thi.",url:"https://pythontutor.com/"},
{id:"s6-p6",stage:6,type:"Phiếu học tập",title:"Phiếu 6 – Bảng kiểm thử",desc:"Dữ liệu thử, mong đợi, thực tế và trạng thái.",url:"https://docs.google.com/spreadsheets/d/1FnBYHLRfZM9OnzkW0tOmVmpmtV_z3aqn/edit?usp=sharing"},
{id:"s7-form",stage:7,type:"Google Form",title:"Vé qua Chặng 7 – Phân loại lỗi",desc:"Biểu mẫu vé C7.",url:"https://docs.google.com/forms/d/1-F4160nENTLlnBXaQdWg5thUqDKhFFRkWtqefi_OE9g/viewform"},
{id:"s7-linkdoc",stage:7,type:"Tổng hợp liên kết",title:"Link tài liệu Chặng 7",desc:"Tệp Drive chứa tài liệu Errors and Exceptions và Python Tutor.",url:"https://docs.google.com/document/d/1mir5JWCyalcCCxbKKKr3W_r5nNukN-W6eppyaCVny1k/view"},
{id:"s7-log",stage:7,type:"Phiếu học tập",title:"Phiếu 7 – Nhật ký lỗi",desc:"Ghi biểu hiện, nguyên nhân, cách phát hiện và cách sửa.",url:"https://docs.google.com/document/d/152gwJG1ud5RXzM_ILpjhZ90UK5ZFvAhA/view"},
{id:"s7-code",stage:7,type:"Mã nguồn",title:"chuong_trinh_ban_ve_co_loi.py",desc:"Mã dùng cho thử thách săn lỗi.",url:"https://drive.google.com/file/d/1FIzpMksC9DuYH0MJutGsqUh_ouBRRtJE/view?usp=sharing"},
{id:"s7-errors",stage:7,type:"Tài liệu",title:"Thẻ 3 loại lỗi",desc:"Phân biệt cú pháp, ngoại lệ và logic/ngữ nghĩa.",url:"https://drive.google.com/file/d/1KOH4YEEfQ2FEKVayhLmMLTckzgHRS71H/view?usp=sharing"},
{id:"s7-pydoc",stage:7,type:"Liên kết",title:"Python – Errors and Exceptions",desc:"Tài liệu chính thức về lỗi và ngoại lệ.",url:"https://docs.python.org/3/tutorial/errors.html"},
{id:"s7-tutor",stage:7,type:"Công cụ",title:"Python Tutor",desc:"Theo dõi trạng thái biến khi chạy.",url:"https://pythontutor.com/"},
{id:"s8-rubric",stage:8,type:"Rubric",title:"Rubric dự án",desc:"Rubric chính thức dùng chấm toàn bộ dự án.",url:"assets/Rubric_du_an.docx"},
{id:"s8-check",stage:8,type:"Tài liệu",title:"Checklist hoàn thiện Chặng 8",desc:"Rà soát trước khi báo cáo.",url:"https://drive.google.com/file/d/1oP96I-wbV8-iy90wjYHsx8D7jd17f6om/view?usp=sharing"},
{id:"s8-slides",stage:8,type:"Mẫu trình bày",title:"Mẫu trình bày Chặng 8",desc:"Khung slide để nhóm chuẩn bị báo cáo.",url:"https://docs.google.com/presentation/d/1Y2Q4mcMXVTxfBxK-VANxap_3pn-F_EEB/view"},
{id:"s8-peer",stage:8,type:"Phiếu đánh giá",title:"Phiếu đánh giá đồng đẳng",desc:"Đánh giá phần trình bày của nhóm bạn.",url:"https://docs.google.com/document/d/1hXedT0tF9k-bXheXqNdclR-1N8z0NrrL/view"},
{id:"s8-reflect",stage:8,type:"Phiếu đánh giá",title:"Phiếu tự đánh giá và phản tư",desc:"Nhìn lại quá trình thực hiện dự án.",url:"https://docs.google.com/document/d/1pca9hEhpa2dEKfAL_nda4ub5kDUAA0pe/view"},
{id:"s8-submit",stage:8,type:"Google Form",title:"Nộp sản phẩm cuối dự án",desc:"Nộp chương trình, báo cáo, thuật toán, kiểm thử, nhật ký lỗi và bài trình bày.",url:"https://forms.gle/Kjc7ism59AYpLVsC7"},
{id:"s5-complete-code",stage:5,type:"Python · mã tham khảo",title:"Mã mẫu tính hóa đơn hoàn chỉnh (.py)",desc:"Tải tham khảo sau khi nhóm đã tự viết bản đầu; không sao chép nộp lại.",url:"assets/code/hoadon_final_mau.py"},
{id:"s7-bug-challenge",stage:7,type:"Python · thử thách",title:"Chương trình hóa đơn chứa lỗi (.py)",desc:"Bài thực hành công bằng cho cả nhóm có chương trình riêng đã đúng; tìm và sửa 2 lỗi logic.",url:"assets/code/thu_thach_san_loi_chang_7.py"},
{id:"s7-worksheet",stage:7,type:"Phiếu thực hành",title:"Phiếu ghi minh chứng sửa lỗi (.docx)",desc:"Mẫu ghi dữ liệu, mong đợi, trước/sau, nguyên nhân, cách sửa.",url:"assets/Phieu_go_loi_Chang_7.docx"},
];

const forms = [
{stage:1,title:"Vé C1 – Thám tử hóa đơn",desc:"Xác định hóa đơn bị tính sai và thành tiền đúng của dòng sai.",kind:"Google Forms",url:"https://docs.google.com/forms/d/1YSH0SQoGt20HG01pw6sJx8ubo4N2NngkU0t4GwCrN4o/viewform",status:"online"},
{stage:2,title:"Vé C2 – Dữ liệu lập trình",desc:"Kiểm tra kiểu dữ liệu, dữ liệu logic và hằng.",kind:"Google Forms",url:"https://docs.google.com/forms/d/1zjiPf2qWshWLiS0DNyiQcbo3_qu7kQfyLKjeEqrm-VA/viewform",status:"online"},
{stage:3,title:"Vé C3 – Bài toán thanh toán",desc:"Tính một tình huống mới có ranh giới số lượng và thẻ thành viên.",kind:"Google Forms",url:"https://docs.google.com/forms/d/1U-Ldp4XTOlp_tOGrVZur_zHV_EJtmSeyyYw7aXGoDVQ/viewform",status:"online"},
{stage:4,title:"Duyệt Phiếu 4",desc:"GV hoặc nhóm được chỉ định duyệt thuật toán trước khi mở Chặng 5.",kind:"Nghiệm thu trực tiếp",url:"",status:"teacher"},
{stage:5,title:"Vé Chặng 5",desc:"Chạy chương trình với hóa đơn bí mật do GV đưa tại chỗ.",kind:"Nghiệm thu trực tiếp",url:"",status:"teacher"},
{stage:6,title:"Vé C6 – Bắt lỗi ranh giới",desc:"Chọn dữ liệu phát hiện lỗi > thay cho >= tại mốc 200.000.",kind:"Biểu mẫu trên web",url:"",status:"local"},
{stage:7,title:"Vé C7 – Phân loại lỗi",desc:"Phân loại tình huống thành lỗi cú pháp, ngoại lệ và logic/ngữ nghĩa.",kind:"Google Forms",url:"https://docs.google.com/forms/d/1-F4160nENTLlnBXaQdWg5thUqDKhFFRkWtqefi_OE9g/viewform",status:"online"},
{stage:8,title:"Nghiệm thu cuối",desc:"Trình bày, chạy thử, hỏi đáp và chấm theo rubric dự án.",kind:"Báo cáo trực tiếp",url:"",status:"teacher"}
];

const rubrics = {
  "presentation": {
    "title": "Kỹ năng trình bày",
    "max": 3,
    "rows": [
      [
        "1.Trình bày mạch lạc",
        "Nói rõ; trình bày bài toán, thuật toán, kết quả theo trình tự; diễn đạt trôi chảy.",
        "Nói rõ; đôi lúc đọc nguyên văn hoặc cần nhắc trình tự.",
        "Đọc phần lớn nội dung hoặc cần gợi ý nhiều lần.",
        "Không trình bày hoặc nói quá nhỏ khiến người nghe không theo dõi được."
      ],
      [
        "2.Giải thích và trả lời",
        "Giải thích đúng 2 câu hỏi về chương trình.",
        "Giải thích đúng 1 câu.",
        "Giải thích đúng 1 câu sau khi được gợi ý.",
        "Chưa giải thích đúng câu nào dù được gợi ý."
      ],
      [
        "3. Thời gian trình bày",
        "Hoàn thành trong 7–8 phút.",
        "Hoàn thành trên 8 đến 9 phút.",
        "Hoàn thành trên 9 đến 10 phút.",
        "Dưới 7 phút hoặc trên 10 phút; trình bày thiếu phần quan trọng."
      ]
    ],
    "notes": [
      "Theo rubric hiện hành, trình bày trong 7–8 phút đạt mức Tốt. Luyện thời gian trước khi báo cáo."
    ]
  },
  "product": {
    "title": "Sản phẩm lập trình",
    "max": 4,
    "rows": [
      [
        "1. Chương trình hoạt động đúng",
        "Đạt đủ 5 ca thử chung về tính hóa đơn và xử lí đầu vào.",
        "Đạt 4/5 ca thử chung.",
        "Đạt 1–3/5 ca thử chung.",
        "Không đạt ca thử chung nào hoặc chương trình không chạy được."
      ],
      [
        "2. Thuật toán và mã",
        "Thuật toán khớp mã; dùng đúng hằng, biến, kiểu dữ liệu, toán tử, vào-ra, rẽ nhánh, lặp và list.",
        "Có 1 thành phần chưa đúng/thiếu trong các nội dung ở mức Tốt.",
        "Có 2–3 thành phần chưa đúng/thiếu; mã hoặc thuật toán còn chưa nhất quán.",
        "Có từ 4 thành phần chưa đúng/thiếu hoặc thuật toán không phù hợp với mã."
      ],
      [
        "3. Chương trình con",
        "Có ít nhất 2 hàm tự viết được gọi đúng, chức năng hợp lí; có dùng hàm chuẩn.",
        "Có 1 hàm tự viết được gọi đúng, có sử dụng hàm chuẩn.",
        "Có hàm tự viết nhưng gọi chưa đúng hoặc kết quả còn sai.",
        "Không có hàm tự viết được sử dụng."
      ],
      [
        "4. Kiểm thử",
        "Có ≥6 ca kiểm thử, gồm 5 ca chung và ≥1 ca nhóm tự thiết kế; có thường, biên, không hợp lệ; ghi kết quả mong đợi, thực tế và đối chiếu.",
        "Có ≥6 ca và đối chiếu kết quả, nhưng thiếu 1 nhóm dữ liệu hoặc 1 ca chưa đủ minh chứng.",
        "Có 1–5 ca hoặc bảng còn thiếu kết quả mong đợi/thực tế hay kết luận.",
        "Không có bảng kiểm thử hoặc bảng không ghi ca thử nào."
      ],
      [
        "5. Gỡ lỗi",
        "Tìm và sửa đúng cả 2 lỗi được cài sẵn trong chương trình thực hành; giải thích nguyên nhân, thử trước/sau, chạy lại để xác nhận. Có thể dùng lỗi của nhóm nếu minh chứng tương đương.",
        "Tìm và sửa đúng 1 lỗi; giải thích nguyên nhân, có kết quả trước/sau và kiểm tra lại.",
        "Phát hiện ít nhất 1 lỗi, nêu được hướng sửa nhưng chưa sửa đúng hoặc thiếu kết quả chạy lại.",
        "Có tham gia thử gỡ lỗi nhưng chưa xác định đúng nguyên nhân hoặc chưa có kết quả sửa."
      ]
    ],
    "notes": [
      "5 ca thử chung để GV đối chiếu được tính trong ít nhất 6 ca mà nhóm phải tự lập và ghi trong bảng kiểm thử.",
      "Gỡ lỗi: nếu chương trình nhóm đã đúng, làm nhiệm vụ săn 2 lỗi có chủ đích từ mã GV cung cấp; không bắt học sinh tạo lỗi giả."
    ]
  },
  "report": {
    "title": "Hồ sơ và hình thức báo cáo sản phẩm",
    "max": 3,
    "rows": [
      [
        "1. Nội dung hồ sơ báo cáo sản phẩm",
        "Có đầy đủ: bài toán/quy tắc, thuật toán, chương trình và demo, kiểm thử, minh chứng gỡ lỗi, bài học và phân công.",
        "Thiếu hoặc chưa rõ 1 nội dung cốt lõi.",
        "Thiếu hoặc chưa rõ 2 nội dung cốt lõi.",
        "Thiếu từ 3 nội dung cốt lõi; báo cáo khó theo dõi."
      ],
      [
        "2. Minh chứng và tính nhất quán",
        "Có thuật toán/sơ đồ khối, mã hoặc ảnh chạy, bảng kiểm thử và bằng chứng gỡ lỗi (có thể là mã lỗi GV giao); minh chứng thống nhất với sản phẩm.",
        "Thiếu/chưa rõ 1 minh chứng hoặc có 1 điểm chưa nhất quán nhỏ.",
        "Thiếu/chưa rõ 2 minh chứng hoặc tồn tại một số điểm chưa thống nhất.",
        "Minh chứng ít hoặc mâu thuẫn đáng kể với mã/kết quả."
      ],
      [
        "3. Hình thức trình bày",
        "Slide/hồ sơ rõ ràng, nội dung và hình/mã/bảng đọc được; ghi nguồn khi dùng tài nguyên ngoài học liệu GV cung cấp.",
        "Có tối đa 1 lỗi nhỏ về bố cục hoặc khả năng đọc, không ảnh hưởng nội dung.",
        "Có 2–3 lỗi làm giảm khả năng đọc/theo dõi.",
        "Bố cục khó theo dõi hoặc nhiều bảng/hình/mã bị cắt, khó đọc."
      ]
    ],
    "notes": [
      "Nộp bài bằng link Drive qua Google Form, mọi file có định dạng cụ thể theo từng chặng. Không nộp hoặc không thực hiện được chấm 0%, khác với mức Yếu (25%)."
    ]
  }
};

// Chặng hiện tại. Phải khai báo trước khi render menu và nội dung 8 chặng.
// Khôi phục lựa chọn của người học khi tải lại trang; mặc định mở Chặng 1.
let activeStage = 1;
try {
  const selectedStage = Number(localStorage.getItem("webquest-active-stage"));
  if (stages.some(stage => stage.id === selectedStage)) activeStage = selectedStage;
} catch (error) {
  activeStage = 1;
}

const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
function isDone(id){return localStorage.getItem(`webquest-stage-${id}`)==="done"}
function renderTimeline(){$("timelineGrid").innerHTML=timeline.map(x=>`<article class="timeline-card"><span class="timeline-week">TUẦN ${x.week}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p><span class="timeline-period">${esc(x.period)}</span></article>`).join("")}
function renderProgress(){$("progressBar").innerHTML=stages.map(s=>`<span class="progress-segment ${isDone(s.id)?"done":s.id===activeStage?"active":""}"></span>`).join("")}
function renderStageMenu(){$("stageMenu").innerHTML=stages.map(s=>`<button class="stage-button ${s.id===activeStage?"active":""} ${isDone(s.id)?"done":""}" data-stage="${s.id}"><span class="num">${String(s.id).padStart(2,"0")}</span><span><strong>${esc(s.title)}</strong><small>${esc(s.period)}</small></span></button>`).join("");document.querySelectorAll(".stage-button").forEach(b=>b.onclick=()=>{activeStage=Number(b.dataset.stage);localStorage.setItem("webquest-active-stage",activeStage);renderStageMenu();renderStagePanel();renderProgress();if(innerWidth<980)$("stagePanel").scrollIntoView({behavior:"smooth",block:"start"})})}
function accordion(title,body,open=false){return `<div class="accordion ${open?"open":""}"><button type="button"><span>${esc(title)}</span><span>${open?"–":"+"}</span></button><div class="accordion-content">${body}</div></div>`}
function stageResources(id){const rows=resources.filter(r=>r.stage===id||r.stage===0);return `<div class="resource-mini-list">${rows.map(r=>`<div class="resource-mini"><span>${esc(r.title)}</span><a href="${esc(r.url)}" target="_blank" rel="noopener">Mở ↗</a></div>`).join("")}</div>`}
function formAction(id){const f=forms.find(x=>x.stage===id);if(!f)return"";if(f.status==="online")return `<a class="btn btn-primary" href="${esc(f.url)}" target="_blank" rel="noopener">Mở ${esc(f.title)} ↗</a>`;if(f.status==="local")return `<button class="btn btn-primary" type="button" data-open-c6>Làm Vé C6</button>`;return `<span class="form-status">${esc(f.kind)}</span>`}
function renderStagePanel(){const s=stages.find(x=>x.id===activeStage);const hints=`<div class="hint-list">${s.hints.map((h,i)=>`<details><summary>Gợi ý ${i+1}</summary><p>${esc(h)}</p></details>`).join("")}</div>`;$("stagePanel").innerHTML=`<div class="stage-cover"><div class="stage-cover-top"><div><span class="stage-pill">CHẶNG ${s.id}</span><h3>${esc(s.title)}</h3><p>${esc(s.context)}</p><div class="stage-meta-row"><span class="meta-chip">${esc(s.period)}</span><span class="meta-chip">Vai chủ trì: ${esc(s.lead)}</span></div></div><span class="stage-period">${esc(s.period)}</span></div></div><div class="stage-core"><div class="soft-card"><h4>Mục tiêu</h4><p>${esc(s.goal)}</p></div><div class="soft-card product-card"><h4>Sản phẩm</h4><p>${esc(s.product)}</p></div></div><div class="stage-format"><strong>Định dạng file cần nộp</strong><p>${esc(submissionFormats[s.id]||"Xem hướng dẫn của GV")}</p></div><div class="accordion-list">${accordion("Câu hỏi định hướng",`<ul>${s.questions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`,true)}${accordion("Hoạt động của nhóm",`<ol>${s.activities.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`)}${accordion("Học liệu mở nhanh",stageResources(s.id))}${accordion("Checklist",`<ul>${s.checklist.map(x=>`<li>☐ ${esc(x)}</li>`).join("")}</ul>`)}${accordion("Trợ giúp theo bậc",hints)}${accordion("Vé qua chặng",`<p>${esc(s.exit)}</p><div style="margin-top:10px">${formAction(s.id)}</div>`)}</div><div class="stage-actions"><label class="done-toggle"><input id="stageDoneToggle" type="checkbox" ${isDone(s.id)?"checked":""}> Đánh dấu đã hoàn thành chặng này</label><a class="btn btn-soft" href="#tai-nguyen">Xem học liệu</a></div>`;document.querySelectorAll(".accordion button").forEach(btn=>btn.onclick=()=>{const item=btn.parentElement;item.classList.toggle("open");btn.querySelector("span:last-child").textContent=item.classList.contains("open")?"–":"+"});document.querySelectorAll("[data-open-c6]").forEach(b=>b.onclick=openC6);$("stageDoneToggle").onchange=e=>{localStorage.setItem(`webquest-stage-${s.id}`,e.target.checked?"done":"");renderStageMenu();renderProgress()}}
function renderForms(){$("formGrid").innerHTML=forms.map(f=>{let action=f.status==="online"?`<a class="btn btn-primary" href="${esc(f.url)}" target="_blank" rel="noopener">Mở biểu mẫu ↗</a>`:f.status==="local"?`<button class="btn btn-primary" type="button" data-open-c6>Làm Vé C6</button>`:`<span class="form-status">${esc(f.kind)}</span>`;return `<article class="form-card"><div class="form-card-top"><span class="form-stage">Chặng ${f.stage}</span><span class="form-kind">${esc(f.kind)}</span></div><h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p><div class="form-card-action">${action}</div></article>`}).join("");document.querySelectorAll("[data-open-c6]").forEach(b=>b.onclick=openC6)}
function renderResourceFilter(){$("resourceFilter").innerHTML='<option value="all">Tất cả tài nguyên</option><option value="0">Dùng chung</option>'+stages.map(s=>`<option value="${s.id}">Chặng ${s.id} – ${esc(s.title)}</option>`).join("")}
function renderResources(){const f=$("resourceFilter").value||"all";const rows=resources.filter(r=>f==="all"||r.stage===Number(f));$("resourceGrid").innerHTML=rows.map(r=>`<article class="resource-card"><div class="resource-meta"><span>${esc(r.type)}</span><span>${r.stage===0?"Dùng chung":"Chặng "+r.stage}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p><a href="${esc(r.url)}" target="_blank" rel="noopener">Mở tài nguyên ↗</a></article>`).join("")}
function renderRubric(kind="presentation"){
 document.querySelectorAll(".rubric-tab").forEach(b=>b.classList.toggle("active",b.dataset.rubric===kind));
 const r=rubrics[kind];
 $("rubricWrap").innerHTML=`<table><thead><tr><th>Tiêu chí</th><th>Tốt (100%)</th><th>Khá (75%)</th><th>Trung bình (50%)</th><th>Yếu (25%)</th></tr></thead><tbody>${r.rows.map(row=>`<tr>${row.map((c,i)=>`<td ${i===0?'style="font-weight:800"':''}>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
 $("rubricNotes").innerHTML=(r.notes||[]).map(n=>`<div class="rubric-note"><strong>Ghi chú</strong>${esc(n)}</div>`).join("");
}
function renderScoreControls(){
 const options=[[100,"Tốt · 100%"],[75,"Khá · 75%"],[50,"Trung bình · 50%"],[25,"Yếu · 25%"],[0,"Không nộp · 0%"]];
 $("criterionScores").innerHTML=Object.entries(rubrics).map(([key,r])=>`<fieldset class="score-part"><legend>${esc(r.title)} · ${r.max} điểm</legend>${r.rows.map((row,i)=>`<label><span>${esc(row[0])}</span><select class="control score-level" data-kind="${key}" data-index="${i}">${options.map(([v,t])=>`<option value="${v}">${t}</option>`).join("")}</select></label>`).join("")}</fieldset>`).join("");
 document.querySelectorAll(".score-level").forEach(sel=>sel.onchange=updateScore);
 updateScore();
}
function updateScore(){
 const parts=Object.entries(rubrics).map(([key,r])=>{
   const values=r.rows.map((row,i)=>Number(document.querySelector(`.score-level[data-kind="${key}"][data-index="${i}"]`)?.value??0));
   return {key,score:r.max*values.reduce((a,b)=>a+b,0)/(100*values.length)};
 });
 const total=parts.reduce((s,p)=>s+p.score,0);
 $("scoreRaw").textContent=parts.map(p=>p.score.toFixed(2)).join(" + ")+" / 10";
 $("scoreResult").textContent=total.toFixed(2);
}
function openC6(){$("c6Feedback").textContent="";document.querySelectorAll('input[name="c6"]').forEach(x=>x.checked=false);$("c6Dialog").showModal()}
function initC6(){$("c6CheckBtn").onclick=()=>{const v=document.querySelector('input[name="c6"]:checked')?.value;const fb=$("c6Feedback");if(!v){fb.textContent="Hãy chọn một đáp án.";fb.className="quiz-feedback error";return}if(v==="B"){fb.textContent="Đúng. 200.000 là giá trị làm hai điều kiện > và >= cho kết quả khác nhau.";fb.className="quiz-feedback ok";localStorage.setItem("webquest-c6","done")}else{fb.textContent="Chưa đúng. Hãy tìm giá trị đúng tại ranh giới 200.000 đồng.";fb.className="quiz-feedback error"}}}
function initSubmission(){const btn=$("finalSubmissionBtn"),st=$("submissionStatus");if(FINAL_SUBMISSION_FORM_URL){btn.href=FINAL_SUBMISSION_FORM_URL;btn.classList.remove("disabled");btn.removeAttribute("aria-disabled");btn.textContent="Mở Google Form nộp sản phẩm ↗";btn.target="_blank";btn.rel="noopener";st.textContent="Nộp một lần khi nhóm đã hoàn thiện toàn bộ hồ sơ sản phẩm."}}
function init(){renderTimeline();renderStageMenu();renderStagePanel();renderProgress();renderForms();renderResourceFilter();renderResources();renderRubric();renderScoreControls();initC6();initSubmission();$("resourceFilter").onchange=renderResources;document.querySelectorAll(".rubric-tab").forEach(b=>b.onclick=()=>renderRubric(b.dataset.rubric));}
document.addEventListener("DOMContentLoaded",init);
