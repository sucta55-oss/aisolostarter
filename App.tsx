
import React, { useState, useEffect } from 'react';
import { DAYS_DATA, BENEFITS_DATA, TESTIMONIALS_DATA, SPEAKERS_DATA, COACH_DATA } from './constants';
import DayCard from './components/DayCard';
import RegisterModal from './components/RegisterModal';
import SpeakerCard from './components/SpeakerCard';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Registration Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Top Banner */}
      <div className="bg-primary py-2 px-4 text-center sticky top-0 z-[60]">
        <p className="text-[10px] font-extrabold tracking-[0.15em] uppercase text-white animate-pulse">
          Chỉ còn 15 suất đăng ký miễn phí hôm nay
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 sticky top-8 z-50 bg-background-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-icons-round text-white text-xl">psychology</span>
          </div>
          <span className="font-black text-lg tracking-tighter">AI SOLOPRENEUR</span>
        </div>
        <button 
          onClick={handleRegisterClick}
          className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-primary/25 hover:bg-red-600 transition-all active:scale-95"
        >
          Đăng ký
        </button>
      </nav>

      <main className="max-w-md mx-auto px-6 pb-32">
        {/* Hero Section */}
        <section className="text-center pt-16 mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent-dark text-[10px] font-black text-primary mb-6 tracking-widest uppercase border border-white/5">
            Free 3-Day Training
          </span>
          <h1 className="text-[2.6rem] font-black tracking-tight mb-8 leading-[1.1] gradient-text">
            Làm chủ công nghệ.<br />
            Tự do kinh doanh<br />
            <span className="text-primary">cùng AI.</span>
          </h1>
          <p className="text-slate-400 text-base mb-10 leading-relaxed font-medium">
            Học cách tự động hóa quy trình, tạo nội dung và xây dựng hệ thống kinh doanh thông minh trong 3 ngày.
          </p>
          
          <div className="space-y-6">
            <button 
              onClick={handleRegisterClick}
              className="w-full bg-primary hover:bg-red-600 text-white font-black py-5 rounded-2xl text-lg shadow-2xl shadow-primary/40 transition-all active:scale-[0.98] relative overflow-hidden group"
            >
              <span className="relative z-10">Đăng Ký Ngay Miễn Phí</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    alt="Attendee" 
                    className="w-9 h-9 rounded-full border-2 border-background-dark shadow-xl" 
                    src={`https://picsum.photos/id/${i + 10}/100/100`}
                  />
                ))}
              </div>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                +1,240 người đã tham gia
              </p>
            </div>
          </div>
        </section>

        {/* Program Cards */}
        <section className="mb-24">
          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-b from-accent-dark to-background-dark p-8 border border-white/10 shadow-3xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                 <img 
                  alt="AI Workflow" 
                  className="w-full aspect-video object-cover" 
                  src="https://picsum.photos/id/180/600/400" 
                />
              </div>
              
              <h2 className="text-2xl font-black mb-3 tracking-tight">Chương trình 3 ngày</h2>
              <p className="text-slate-500 text-sm mb-10 font-medium">Lộ trình tinh gọn dành cho người bận rộn</p>
              
              <div className="space-y-5">
                {DAYS_DATA.map((day, idx) => (
                  <DayCard key={idx} plan={day} isActive={idx === 1} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-3 block">Expert Team</span>
            <h2 className="text-3xl font-black tracking-tighter mb-4 leading-tight">Đội ngũ chia sẻ & hướng dẫn</h2>
            <p className="text-slate-500 text-sm font-medium">Những chuyên gia hàng đầu trong lĩnh vực AI & Marketing</p>
          </div>
          
          <div className="space-y-8">
            {SPEAKERS_DATA.map((speaker, idx) => (
              <SpeakerCard key={idx} speaker={speaker} />
            ))}
            
            <div className="relative mt-16 pt-16 border-t border-white/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-dark px-6 py-2 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                Coach Hỗ Trợ Riêng
              </div>
              <p className="text-center text-slate-400 text-[13px] leading-relaxed mb-10 font-medium italic">
                Người coach/hỗ trợ riêng/hướng dẫn thực hành xuyên suốt cho đến khi có kết quả trong 3 ngày diễn ra chương trình:
              </p>
              <SpeakerCard speaker={COACH_DATA} />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24 px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 tracking-tighter">Bạn sẽ nhận được gì?</h2>
            <p className="text-slate-500 text-sm font-medium">Toàn quyền sử dụng kho tài nguyên độc quyền.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {BENEFITS_DATA.map((benefit, idx) => (
              <div key={idx} className="bg-surface-dark p-8 rounded-3xl border border-white/5 text-center group hover:border-primary/30 transition-all cursor-default">
                <div className="w-14 h-14 bg-accent-dark rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-icons-round text-primary text-3xl">{benefit.icon}</span>
                </div>
                <h4 className="font-black text-sm mb-1">{benefit.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24 bg-surface-dark -mx-6 px-6 py-20 border-y border-white/5">
          <h2 className="text-center text-[1.7rem] font-black mb-16 tracking-tight italic">
            "Must-have cho Solopreneur"
          </h2>
          <div className="space-y-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className={`glass-card p-8 rounded-[32px] ${idx === 1 ? 'opacity-50 blur-[1px]' : ''}`}>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-icons-round text-yellow-500 text-sm">star</span>
                  ))}
                </div>
                <p className="text-base italic text-slate-200 mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img alt={t.name} className="w-12 h-12 rounded-full border border-white/10 grayscale" src={t.avatar} />
                  <div>
                    <p className="font-black text-sm">{t.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Final */}
        <footer className="text-center pt-10">
          <div className="w-16 h-1 bg-white/5 rounded-full mx-auto mb-16"></div>
          
          <h2 className="text-3xl font-black mb-8 tracking-tighter leading-tight px-4">
            Sẵn sàng để trở thành<br />
            <span className="text-primary">AI Solopreneur?</span>
          </h2>
          
          <div className="bg-surface-dark rounded-[40px] p-10 mb-12 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full"></div>
            
            <div className="text-left space-y-6 mb-12 relative z-10">
              {[
                "Học hoàn toàn miễn phí",
                "Tài liệu thực chiến 100%",
                "Truy cập trọn đời"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-icons-round text-primary text-sm">check</span>
                  </div>
                  <span className="text-sm font-bold text-slate-300">{text}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleRegisterClick}
              className="w-full bg-primary hover:bg-red-600 text-white font-black py-5 rounded-2xl text-lg shadow-2xl shadow-primary/30 transition-all active:scale-95"
            >
              Tham Gia Ngay
            </button>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col gap-8 text-slate-500 pb-10">
            <div className="flex justify-center gap-10">
              {["facebook", "video_library", "language"].map(icon => (
                <span key={icon} className="material-icons-round hover:text-white transition-colors cursor-pointer">{icon}</span>
              ))}
            </div>
            <p className="text-[11px] font-medium opacity-60">© 2024 AI Solopreneur Training Program.</p>
            <div className="flex justify-center gap-6 text-[9px] uppercase tracking-[0.2em] font-black">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Persistent Floating CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[70] px-4 pointer-events-none">
        <button 
          onClick={handleRegisterClick}
          className="w-full bg-primary/90 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(239,68,68,0.5)] text-white font-black py-4 rounded-full flex items-center justify-center gap-3 pointer-events-auto active:scale-95 transition-all hover:bg-primary"
        >
          <span className="material-icons-round">flash_on</span>
          NHẬN VÉ MIỄN PHÍ
        </button>
      </div>
    </div>
  );
};

export default App;
