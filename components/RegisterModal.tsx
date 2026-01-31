
import React, { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone: string) => {
    return /^\d{10,11}$/.test(phone);
  };

  const getTimestamp = () => {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    return `${d}/${m}/${y} ${h}:${min}:${s}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Vui lòng nhập họ và tên' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Email không hợp lệ' });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setStatus({ type: 'error', message: 'Số điện thoại phải có 10-11 chữ số' });
      return;
    }

    setIsSubmitting(true);

    try {
      /**
       * THAY THẾ URL DƯỚI ĐÂY BẰNG URL TRIỂN KHAI APPS SCRIPT CỦA BẠN
       */
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKtlqJHBhKDrveMvVTZoXGY6Tqz0Yr02oSqVl-VMOf4hnQwQoanZlyxP1UH4wQf0tF/exec'; 
      
      const payload = {
        timestamp: getTimestamp(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        spreadsheetId: '14oUgAdI1h9zBfVx_kwsdK40OoOIgd2MHXcqUEpMiI7o',
        sheetName: '3Days-ClickAI-Data'
      };

      // Sử dụng fetch với mode no-cors nếu gặp vấn đề CORS với Apps Script, 
      // hoặc đảm bảo Apps Script trả về đúng JSON MimeType
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script thường yêu cầu no-cors khi gọi trực tiếp từ trình duyệt
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Vì dùng no-cors nên response trả về opaque, ta giả định thành công nếu không catch error
      setStatus({ 
        type: 'success', 
        message: 'Cảm ơn bạn đã đăng ký! Thông tin của bạn đã được ghi nhận thành công. ✅' 
      });

      setTimeout(() => {
        window.location.href = "https://zalo.me/g/oiqgqj261";
      }, 2500);

    } catch (err) {
      console.error('Submit error:', err);
      setStatus({ 
        type: 'error', 
        message: 'Xin lỗi, đã có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại hoặc liên hệ hỗ trợ.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="glass-card w-full max-w-md p-8 rounded-[32px] relative z-10 border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
          disabled={isSubmitting}
        >
          <span className="material-icons-round">close</span>
        </button>

        <h2 className="text-2xl font-black mb-2 tracking-tight">Đăng ký tham gia</h2>
        <p className="text-slate-400 text-sm mb-6 font-medium">Nhập thông tin để nhận tài liệu và link Zoom qua Zalo.</p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 mb-8 flex gap-3">
          <span className="material-icons-round text-blue-400 text-sm mt-0.5">info</span>
          <p className="text-[11px] text-blue-100/80 leading-relaxed">
            <span className="font-bold text-blue-400 uppercase">Lưu ý:</span> Sau khi đăng ký thành công, bạn sẽ được điều hướng qua <span className="text-blue-400 font-bold underline">Group Zalo Kín</span> để nhận thông tin & hỗ trợ riêng tốt nhất.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              placeholder="Nguyễn Văn A"
              disabled={isSubmitting || status.type === 'success'}
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-accent-dark border border-white/5 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              disabled={isSubmitting || status.type === 'success'}
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-accent-dark border border-white/5 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              placeholder="0987654321"
              disabled={isSubmitting || status.type === 'success'}
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-accent-dark border border-white/5 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          {status.message && (
            <div className={`flex items-start gap-3 p-4 rounded-xl text-xs font-bold animate-in slide-in-from-top-2 duration-300 ${
              status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-primary/10 text-primary border border-primary/20'
            }`}>
              <span className="material-icons-round text-sm mt-0.5">
                {status.type === 'success' ? 'check_circle' : 'error'}
              </span>
              <span className="leading-relaxed">{status.message}</span>
            </div>
          )}

          <button 
            type="submit"
            disabled={isSubmitting || status.type === 'success'}
            className="w-full bg-primary hover:bg-red-600 disabled:bg-slate-800 disabled:text-slate-500 text-white font-black py-5 rounded-2xl text-base shadow-xl shadow-primary/30 transition-all active:scale-95 mt-4 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Đang xử lý...
              </>
            ) : status.type === 'success' ? (
              'Đã Đăng Ký Thành Công'
            ) : (
              'Hoàn Tất Đăng Ký'
            )}
          </button>
        </form>

        <p className="text-center text-[10px] text-slate-600 mt-6 font-medium leading-relaxed">
          Thông tin của bạn được bảo mật tuyệt đối. <br/>
          Bằng việc đăng ký, bạn đồng ý với chính sách bảo mật của ClickAI.
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
