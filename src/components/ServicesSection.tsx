import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {SERVICES, ServiceItem} from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

type CategoryFilter = 'all' | 'estetik' | 'protez' | 'tedavi';

const FILTER_OPTIONS: {id: CategoryFilter; label: string}[] = [
  {id: 'all', label: 'Tüm Tedaviler'},
  {id: 'estetik', label: 'Estetik & Gülüş'},
  {id: 'protez', label: 'İmplant & Kaplama'},
  {id: 'tedavi', label: 'Koruyucu & Ortodonti'},
];

export default function ServicesSection({onSelectService}: ServicesSectionProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredServices: ServiceItem[] =
    filter === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === filter);

  return (
    <section id="hizmetler" className="py-16 sm:py-20 bg-[#F8FBFD]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-[#20A498]">Klinik Tedaviler</p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-xl"
              style={{textWrap: 'balance'}}
            >
              Estetik ve fonksiyonel diş hekimliğinde kapsamlı çözümler
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Tedavi kategorileri"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBF2F6] border border-[#DCE7EE] rounded-lg self-start"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] ${
                    active
                      ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const isWide = filter === 'all' && service.featured && service.number === '01';
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#DCE7EE] rounded-xl transition-colors duration-150 hover:border-[#20A498]/60 ${
                  isWide ? 'lg:col-span-2 bg-[#F4F9FB]' : ''
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-bold text-[#20A498] tabular-nums">
                      {service.number}.
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#065A82] hover:text-[#20A498] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] rounded-sm"
                    >
                      <span>Bilgi Al</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <p className="mt-5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {service.details}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
