
import { DayPlan, Benefit, Testimonial, Speaker } from './types';

export const DAYS_DATA: DayPlan[] = [
  {
    day: "Day 01",
    title: "AI Content & Video Automation",
    description: "Quy trình sản xuất 30 video/tháng chỉ trong 2 giờ với AI.",
    icon: "video_settings",
    details: [
      "Bí mật 3 bước xây dựng kênh bền vững",
      "Tự động hóa video đa kênh",
      "Chiến lược kiếm tiền từ View sang Income"
    ]
  },
  {
    day: "Day 02",
    title: "AI Agents & Vibe Coding",
    description: "Xây dựng nhân viên ảo tự động chăm sóc khách hàng và bán hàng.",
    icon: "smart_toy",
    details: [
      "Kiến trúc AI Agents 3 layers",
      "No-code build solutions với Click AI Workspace",
      "Vibe Coding: Nói ý tưởng, AI code hộ"
    ]
  },
  {
    day: "Day 03",
    title: "AI Coaching & Community",
    description: "Hệ thống hóa mô hình kinh doanh cá nhân và vận hành cộng đồng.",
    icon: "groups",
    details: [
      "AI Training System: Scale học viên vô hạn",
      "Xây dựng cộng đồng Genesis -> Growth -> Scale",
      "90-Day Roadmap Launch MVP"
    ]
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    name: "Nguyễn Phước Vĩnh Hưng",
    role: "Founder Duhava Technology JSC",
    image: "https://i.postimg.cc/3xQb5jD8/Hung.png",
    details: [
      "Kinh nghiệm Kinh Doanh Online từ 2016",
      "500.000++ followers trên Social về AI, Kinh Doanh & Marketing",
      "Quản Trị Viên Group AI (300.000++ thành viên)",
      "Triển khai Marketing cho nhiều doanh nghiệp đa ngành hàng",
      "Đào tạo Inhouse cho HTV, FPT, Droppii, Phương Trường An Group..."
    ]
  },
  {
    name: "Nguyễn Thành Trung",
    role: "CMO/Co-founder ClickAi",
    image: "https://i.postimg.cc/BngWm7wG/Anh-Trung.png",
    details: [
      "Khách mời chia sẻ về AI trên kênh truyền hình An ninh TV và VTV1",
      "Admin của Group Biết tuốt AI (hơn 20.000 thành viên)",
      "Sáng tạo nội dung Youtube TrungCaha ( hơn 40.000 người theo dõi)",
      "10 năm hoạt động đào tạo online với hơn 10.000 học viên",
      "Đào tạo hơn 60 khóa học AI: Giáo dục, May mặc, Thiết kế, Marketing,..."
    ]
  }
];

export const COACH_DATA: Speaker = {
  name: "Tạ Sức",
  role: "Chuyên gia AI của ClickAI",
  image: "https://i.postimg.cc/Hx3S4HgN/A-nh-ma-n-hi-nh-2026-01-31-lu-c-12-35-49.png",
  isCoach: true,
  details: [
    "Người coach/hỗ trợ riêng trực tiếp",
    "Hướng dẫn thực hành xuyên suốt chương trình",
    "Đồng hành cho đến khi học viên có kết quả"
  ]
};

export const BENEFITS_DATA: Benefit[] = [
  {
    title: "100+ Prompt",
    subtitle: "Thư viện câu lệnh AI",
    icon: "auto_awesome"
  },
  {
    title: "Free Tools",
    subtitle: "Công cụ tự động hóa",
    icon: "terminal"
  },
  {
    title: "Templates",
    subtitle: "Ebooks & Blueprints",
    icon: "menu_book"
  },
  {
    title: "Community",
    subtitle: "Nhóm hỗ trợ 24/7",
    icon: "forum"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Anh Tuấn",
    role: "Content Creator",
    content: "Khóa học này đã thay đổi hoàn toàn cách tôi làm nội dung. Trước đây mất 1 ngày cho 1 video, giờ tôi chỉ mất 30 phút.",
    avatar: "https://picsum.photos/id/64/100/100",
    rating: 5
  },
  {
    name: "Minh Trang",
    role: "Digital Marketer",
    content: "Công nghệ AI Agent thật sự là tương lai cho doanh nghiệp siêu nhỏ. Tôi đã tự tạo được chatbot hỗ trợ khách hàng chỉ sau 1 đêm.",
    avatar: "https://picsum.photos/id/65/100/100",
    rating: 5
  }
];
