import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, ImageOff, X} from 'lucide-react';
import {CLINICAL_CASES, ClinicalCase} from '../data/clinicData';

interface BeforeAfterGalleryProps {
  onBookWithDoctor: (doctorName: string, treatmentHint: string) => void;
}

type DoctorFilter = 'all' | 'yunus' | 'kubilay';

export default function BeforeAfterGallery({
  onBookWithDoctor,
}: BeforeAfterGalleryProps) {
  const [doctorFilter, setDoctorFilter] = useState<DoctorFilter>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredCases =
    doctorFilter === 'all'
      ? CLINICAL_CASES
      : CLINICAL_CASES.filter((item) => item.doctorId === doctorFilter);

  const selectedCase: ClinicalCase | null =
    selectedIndex !== null ? filteredCases[selectedIndex] ?? null : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredCases.length
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredCases.length) % filteredCases.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredCases.length]);

  const handleFilterChange = (nextFilter: DoctorFilter) => {
    setDoctorFilter(nextFilter);
    setSelectedIndex(null);
  };

  return (
    <section
      id="vaka-galerisi"
      className="py-16 sm:py-20 bg-white border-t border-b border-[#DCE7EE]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-[#20A498]">
              Klinik Sonuçlar · Öncesi & Sonrası
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl"
              style={{textWrap: 'balance'}}
            >
              Gerçek hastalarımızdan gülüş tasarımı ve restorasyon örnekleri
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Kliniğimizde tamamlanan ön bölge estetik kaplama, zirkonyum, diastema kapatma ve
              tam ağız rehabilitasyon vakalarından orijinal klinik fotoğraflar.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Hekime göre vakaları filtrele"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBF2F6] border border-[#DCE7EE] rounded-lg self-start shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={doctorFilter === 'all'}
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                doctorFilter === 'all'
                  ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümü
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={doctorFilter === 'yunus'}
              onClick={() => handleFilterChange('yunus')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                doctorFilter === 'yunus'
                  ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dt. Yunus Emre Yüksel
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={doctorFilter === 'kubilay'}
              onClick={() => handleFilterChange('kubilay')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                doctorFilter === 'kubilay'
                  ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dt. Kubilay Erçel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item, idx) => (
            <article
              key={item.id}
              className={`flex flex-col bg-[#F8FBFD] border border-[#DCE7EE] rounded-xl overflow-hidden transition-colors hover:border-[#20A498]/60 ${
                idx === 0 && doctorFilter === 'all' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`${item.title} fotoğrafını büyüt`}
                className="group relative aspect-square w-full overflow-hidden bg-slate-100 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82]"
              >
                {!failedImages[item.id] ? (
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.doctorName}`}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({...prev, [item.id]: true}))
                    }
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500">
                    <ImageOff className="w-8 h-8 mb-2" />
                    <span className="text-sm">{item.title}</span>
                  </div>
                )}

                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-white bg-[#065A82]/85 backdrop-blur-xs rounded-md opacity-95 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-3.5 h-3.5" />
                  <span>İncele</span>
                </span>
              </button>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#065A82]">{item.doctorName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.treatment}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DCE7EE]/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                  >
                    Büyük Görünüm
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookWithDoctor(item.doctorName, 'Gülüş Tasarımı')}
                    className="text-xs font-semibold text-[#065A82] hover:text-[#20A498] cursor-pointer"
                  >
                    Hekimden Bilgi Al
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCase && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCase.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Kapat"
              className="absolute top-3 right-3 z-10 w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-slate-800 border border-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:col-span-7 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedCase.imageUrl}
                alt={`${selectedCase.title} - ${selectedCase.doctorName}`}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-white">
              <div>
                <p className="text-xs font-semibold text-[#20A498]">
                  {selectedCase.doctorName} · {selectedCase.treatment}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">
                  {selectedCase.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedCase.summary}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    const doc = selectedCase.doctorName;
                    setSelectedIndex(null);
                    onBookWithDoctor(doc, 'Gülüş Tasarımı');
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#065A82] hover:bg-[#054869] rounded-lg transition-colors cursor-pointer"
                >
                  {selectedCase.doctorName} İle İletişime Geç
                </button>

                {filteredCases.length > 1 && (
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex(
                          (selectedIndex - 1 + filteredCases.length) %
                            filteredCases.length
                        )
                      }
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Önceki</span>
                    </button>
                    <span className="tabular-nums">
                      {selectedIndex + 1} / {filteredCases.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((selectedIndex + 1) % filteredCases.length)
                      }
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <span>Sonraki</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
