import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {CLINIC_INFO} from '../data/clinicData';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  {label: 'Hizmetler', href: '#hizmetler'},
  {label: 'Klinikten', href: '#klinikten'},
  {label: 'Vaka Galerisi', href: '#vaka-galerisi'},
  {label: 'Hekimlerimiz', href: '#hekimlerimiz'},
  {label: 'Yorumlar', href: '#yorumlar'},
];

export default function Navbar({onBookClick}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handlePrimaryAction = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DCE7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] rounded-sm"
        >
          <img
            src={CLINIC_INFO.logoPhoto}
            alt="Özel Dental House Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover bg-white border border-[#DCE7EE] shrink-0"
          />
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#065A82]">
            Dental House
          </span>
        </a>

        <nav
          aria-label="Ana Menü"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#065A82] transition-colors whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#20A498] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#065A82] hover:bg-[#054869] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] focus-visible:ring-offset-2"
          >
            İletişim & Bilgi
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-[#F4F8FA] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#DCE7EE] bg-white px-4 py-4">
          <nav aria-label="Mobil Menü" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-[#065A82] hover:bg-[#F4F8FA] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handlePrimaryAction}
              className="mt-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#065A82] hover:bg-[#054869] rounded-lg transition-colors cursor-pointer"
            >
              İletişim & Bilgi
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
