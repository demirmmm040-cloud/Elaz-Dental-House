import {CLINIC_INFO} from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DCE7EE] py-10 pb-20 sm:pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={CLINIC_INFO.logoPhoto}
            alt="Özel Dental House Logo"
            referrerPolicy="no-referrer"
            className="w-11 h-11 rounded-full object-cover bg-white border border-[#DCE7EE] shrink-0"
          />
          <div>
            <p className="font-display text-base sm:text-lg font-bold text-[#065A82]">
              {CLINIC_INFO.fullName}
            </p>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
              {CLINIC_INFO.address} ·{' '}
              <a
                href={CLINIC_INFO.phoneLandlineHref}
                className="hover:text-[#065A82] tabular-nums"
              >
                {CLINIC_INFO.phoneLandlineDisplay}
              </a>
            </p>
          </div>
        </div>

        <nav
          aria-label="Alt Menü"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600"
        >
          <a href="#hizmetler" className="hover:text-[#065A82]">
            Hizmetler
          </a>
          <a href="#klinikten" className="hover:text-[#065A82]">
            Klinikten
          </a>
          <a href="#vaka-galerisi" className="hover:text-[#065A82]">
            Vaka Galerisi
          </a>
          <a href="#hekimlerimiz" className="hover:text-[#065A82]">
            Hekimlerimiz
          </a>
          <a href="#yorumlar" className="hover:text-[#065A82]">
            Yorumlar
          </a>
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#065A82]"
          >
            Instagram
          </a>
          <a
            href={CLINIC_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16A34A] font-medium"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
        <p>© 2026 {CLINIC_INFO.fullName}. Tüm hakları saklıdır.</p>
        <p>Elazığ Merkez · {CLINIC_INFO.workingHoursText}</p>
      </div>
    </footer>
  );
}
