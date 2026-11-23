import {useState} from 'react';
import {ArrowRight, MapPin, MessageCircle, Phone} from 'lucide-react';
import {CLINIC_INFO} from '../data/clinicData';

interface HeroSectionProps {
  onBookClick: () => void;
}

export default function HeroSection({onBookClick}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="bg-white border-b border-[#DCE7EE]">
      <div className="relative overflow-hidden bg-[#04283A]">
        {!imgError && (
          <img
            src={CLINIC_INFO.interiorPhoto}
            alt="Özel Dental House Ağız ve Diş Sağlığı Polikliniği"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#032232]/92 via-[#065A82]/84 to-[#084C6D]/72"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#8BE0D7] mb-5">
              <span>Elazığ Merkez</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span>Üniversite Mahallesi</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="tabular-nums text-white font-semibold">
                4,9 / 5 ({CLINIC_INFO.googleReviewCount} Google Yorumu)
              </span>
            </div>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.12]"
              style={{
                fontSize: 'clamp(2.125rem, 4.2vw, 3.625rem)',
                textWrap: 'balance',
              }}
            >
              Gülüşünüz ve dişleriniz uzman ellere emanet.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl">
              Özel Dental House Ağız ve Diş Sağlığı Polikliniği olarak Elazığ’da gülüş tasarımı,
              implant, zirkonyum ve lamina porselen uygulamalarını şeffaf bilgilendirme ve ağrısız
              tedavi konforuyla sunuyoruz.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#20A498] hover:bg-[#198B80] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#065A82]"
              >
                <span>Bilgi & Uygunluk Sor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${CLINIC_INFO.whatsappHref}?text=${encodeURIComponent(
                  'Merhaba Dental House Elazığ, bilgi ve uygunluk hakkında yazıyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Hattı</span>
              </a>

              <a
                href={CLINIC_INFO.phoneLandlineHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/12 hover:bg-white/20 border border-white/25 backdrop-blur-xs rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 text-[#8BE0D7]" />
                <span>{CLINIC_INFO.phoneLandlineDisplay}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8BE0D7] shrink-0 mt-0.5" />
                <span>
                  Zübeyde Hanım Cd. Altmışlar Sitesi Altı No:143 D:1-B, Elazığ Merkez
                </span>
              </div>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8BE0D7] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-7 sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#065A82] tabular-nums">
            4,9 / 5
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">Google Hasta Memnuniyeti</p>
        </div>
        <div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#065A82] tabular-nums">
            602
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">Doğrulanmış Google Yorumu</p>
        </div>
        <div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#065A82] tabular-nums">
            3 Hekim
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">Uzman Diş Hekimi Kadrosu</p>
        </div>
        <div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#065A82] tabular-nums">
            09:00
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">Hafta İçi & Cumartesi Açılış</p>
        </div>
      </div>
    </section>
  );
}
