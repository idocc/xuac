"use client";

import { useState } from 'react';

interface FormData {
  category: string;
  subject: string;
  description: string;
  email: string;
  name: string;
  agreeToTerms: boolean;
}

const categories = [
  "资产与赎回",
  "账户与合规验证", 
  "安全与技术问题",
  "合作与媒体联系",
  "支付与结算支持",
  "产品与功能咨询"
];

export const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    category: '',
    subject: '',
    description: '',
    email: '',
    name: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.category) newErrors.category = '请选择问题类别';
    if (!formData.subject) newErrors.subject = '请输入主题';
    if (!formData.description) newErrors.description = '请描述您的问题';
    if (!formData.email) newErrors.email = '请输入电子邮件';
    if (!formData.name) newErrors.name = '请输入姓名';
    if (!formData.agreeToTerms) (newErrors as any).agreeToTerms = '请同意条款和条件';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <section className="w-full bg-white py-[200px] px-4">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-[66px]">
          <span className="font-['IBM_Plex_Mono',monospace] text-[18px] leading-[28px] text-[#8c8c8e] tracking-[-0.18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            主页
          </span>
          <svg className="w-4 h-4 text-[#8c8c8e] rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="font-['IBM_Plex_Mono',monospace] text-[18px] leading-[28px] text-[#8c8c8e] tracking-[-0.18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            安全与技术问题
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[75px]">
          <div className="flex flex-col gap-[35px]">
            {/* Category Selection */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-[16px] leading-[28px]">
                <span className="text-[#f35757] font-light">*</span>
                <span className="font-['Geist',sans-serif] text-black">请在下方选择您的问题</span>
              </label>
              <div className="relative">
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full h-[40px] bg-[#f7f7f7] border border-[#e9e9e9] rounded-[4px] px-4 text-[14px] text-[#8c8c8e] font-light appearance-none cursor-pointer"
                >
                  <option value="">Select here</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="text-black">
                      {category}
                    </option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8c8c8e] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.category && <span className="text-[#f35757] text-sm">{errors.category}</span>}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-[16px] leading-[28px]">
                <span className="text-[#f35757] font-light">*</span>
                <span className="font-['Geist',sans-serif] text-black">主题</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="w-full h-[40px] bg-[#f7f7f7] border border-[#e9e9e9] rounded-[4px] px-4 text-[14px] text-black"
                placeholder=""
              />
              {errors.subject && <span className="text-[#f35757] text-sm">{errors.subject}</span>}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-[16px] leading-[28px]">
                <span className="text-[#f35757] font-light">*</span>
                <span className="font-['Geist',sans-serif] text-black">请描述您的问题</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full h-[196px] bg-[#f7f7f7] border border-[#e9e9e9] rounded-[4px] p-4 text-[14px] text-black resize-none"
                placeholder="请告知您遇到的问题"
              />
              {errors.description && <span className="text-[#f35757] text-sm">{errors.description}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-[16px] leading-[28px]">
                <span className="text-[#f35757] font-light">*</span>
                <span className="font-['Geist',sans-serif] text-black">电子邮件</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full h-[40px] bg-[#f7f7f7] border border-[#e9e9e9] rounded-[4px] px-4 text-[14px] text-black"
                placeholder=""
              />
              {errors.email && <span className="text-[#f35757] text-sm">{errors.email}</span>}
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-[16px] leading-[28px]">
                <span className="text-[#f35757] font-light">*</span>
                <span className="font-['Geist',sans-serif] text-black">姓名</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full h-[40px] bg-[#f7f7f7] border border-[#e9e9e9] rounded-[4px] px-4 text-[14px] text-black"
                placeholder=""
              />
              {errors.name && <span className="text-[#f35757] text-sm">{errors.name}</span>}
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="flex flex-col gap-[30px] items-center">
            <div className="flex items-start gap-2 w-full">
              <div className="flex items-center p-[5px] mt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                  className="w-[14px] h-[14px] border border-[#8c8c8e] rounded-[2px] accent-[#efbe84]"
                />
              </div>
              <label htmlFor="terms" className="font-['Montserrat',sans-serif] text-[16px] leading-[30px] text-black tracking-[0.32px] max-w-[664px]">
                勾选此框即表示您同意已阅读并接受隐私政策以及条款和条件，并且您同意 ONEPORT 使用给定的信息与您联系以进行营销和其他促销通信。*
              </label>
            </div>
            {errors.agreeToTerms && <span className="text-[#f35757] text-sm">{errors.agreeToTerms}</span>}
            
            <button
              type="submit"
              className="bg-[#efbe84] border border-[#efbe84] rounded-[12px] px-4 py-[10px] w-[395px] flex items-center justify-center"
            >
              <span className="font-['Outfit',sans-serif] text-[16px] leading-[24px] text-[#151515]">
                提交
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
