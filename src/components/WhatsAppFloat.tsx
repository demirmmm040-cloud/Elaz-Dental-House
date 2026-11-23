import {MessageCircle} from 'lucide-react';
import {CLINIC_INFO} from '../data/clinicData';

export default function WhatsAppFloat() {
  const defaultMsg = encodeURIComponent(
    'Merhaba Özel Dental House Elazığ, randevu ve tedavi hakkında bilgi almak istiyorum.'
  );

  return (
    <a
      href={`${CLINIC_INFO.whatsappHref}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden Dental House Elazığ ile iletişime geçin"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 h-11 px-4 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold shadow-lg transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
