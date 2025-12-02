import { ContactFormSection } from '@/components/contact/ContactFormSection';
import { ContactSecuritySection } from '@/components/contact/ContactSecuritySection';

export default function ContactFormPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactFormSection />
      <ContactSecuritySection />
    </main>
  );
}
