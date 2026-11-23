import {useEffect, useState} from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Play,
  X,
} from 'lucide-react';
import {
  HIGHLIGHT_COLLECTIONS,
  HighlightMediaItem,
} from '../data/clinicData';

interface ClinicHighlightsSectionProps {
  onAskAboutTreatment: (treatmentTitle: string) => void;
}

const INITIAL_VISIBLE = 8;

export default function ClinicHighlightsSection({
  onAskAboutTreatment,
}: ClinicHighlightsSectionProps) {
  const [activeCollectionId, setActiveCollectionId] = useState(
    HIGHLIGHT_COLLECTIONS[0].id
  );
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeCollection =
    HIGHLIGHT_COLLECTIONS.find((c) => c.id === activeCollectionId) ??
    HIGHLIGHT_COLLECTIONS[0];

  const displayedItems = activeCollection.items.slice(0, visibleCount);
  const hasMore = visibleCount < activeCollection.items.length;

  const activeItem: HighlightMediaItem | null =
    modalIndex !== null ? activeCollection.items[modalIndex] ?? null : null;

  useEffect(() => {
    if (modalIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalIndex(null);
      } else if (e.key === 'ArrowRight') {
        setModalIndex((prev) =>
          prev === null ? null : (prev + 1) % activeCollection.items.length
        );
      } else if (e.key === 'ArrowLeft') {
        setModalIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + activeCollection.items.length) %
              activeCollection.items.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalIndex, activeCollection.items.length]);

  const gridColsClass =
    displayedItems.length === 4 || displayedItems.length >= 8
      ? 'lg:grid-cols-4'
      : 'lg:grid-cols-3';

  return (
    <section
      id="klinikten"
      className="py-16 sm:py-20 bg-[#F8FBFD] border-b border-[#DCE7EE]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl"
              style={{textWrap: 'balance'}}
            >
              Klinikten operasyon, hasta ve soru-cevap paylaşımları
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              {activeCollection.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Klinik paylaşım kategorileri"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBF2F6] border border-[#DCE7EE] rounded-lg self-start shrink-0"
          >
            {HIGHLIGHT_COLLECTIONS.map((col) => {
              const isActive = col.id === activeCollection.id;
              return (
                <button
                  key={col.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCollectionId(col.id);
                    setVisibleCount(INITIAL_VISIBLE);
                    setModalIndex(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    isActive
                      ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {col.label} ({col.items.length})
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between border-b border-[#DCE7EE] pb-3">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#065A82]">
            {activeCollection.label}
          </h3>
          <span className="text-xs sm:text-sm text-slate-500 tabular-nums">
            {displayedItems.length} / {activeCollection.items.length} paylaşım
          </span>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${gridColsClass}`}>
          {displayedItems.map((item, idx) => (
            <article
              key={item.id}
              className="flex flex-col bg-white border border-[#DCE7EE] rounded-xl overflow-hidden transition-colors hover:border-[#20A498]/70"
            >
              <button
                type="button"
                onClick={() => setModalIndex(idx)}
                aria-label={`${item.title} içeriğini büyüt`}
                className="group relative aspect-[9/16] w-full bg-slate-950 overflow-hidden text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82]"
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.url}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white bg-[#065A82]/90 backdrop-blur-xs rounded-md">
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Video</span>
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-xs rounded-md opacity-90 group-hover:opacity-100 transition-opacity">
                      <Expand className="w-3.5 h-3.5" />
                      <span>İncele</span>
                    </span>
                  </>
                )}

                {!item.hideImageOverlay && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
                    <p className="text-[11px] font-medium text-[#8BE0D7]">
                      {item.doctorLabel}
                    </p>
                    <p className="mt-1 font-display text-sm sm:text-base font-bold leading-snug">
                      {item.title}
                    </p>
                  </div>
                )}
              </button>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  {item.hideImageOverlay && (
                    <h4 className="font-display text-sm font-bold text-slate-900 leading-snug mb-1.5">
                      {item.title}
                    </h4>
                  )}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onAskAboutTreatment(activeCollection.inquiryTreatment)}
                  className="mt-3 pt-3 border-t border-slate-100 text-left text-xs font-semibold text-[#065A82] hover:text-[#20A498] cursor-pointer"
                >
                  {activeCollection.ctaLabel}
                </button>
              </div>
            </article>
          ))}
        </div>

        {(hasMore || visibleCount > INITIAL_VISIBLE) && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-500 tabular-nums">
              Gösterilen: {displayedItems.length} / {activeCollection.items.length}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {hasMore ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((prev) =>
                        Math.min(prev + 8, activeCollection.items.length)
                      )
                    }
                    className="px-4 py-2 text-sm font-semibold text-[#065A82] bg-[#EBF2F6] hover:bg-[#DDE9F0] border border-[#DCE7EE] rounded-lg transition-colors cursor-pointer"
                  >
                    Daha Fazla Göster
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisibleCount(activeCollection.items.length)}
                    className="px-4 py-2 text-sm font-semibold text-[#065A82] hover:text-[#20A498] underline underline-offset-4 cursor-pointer"
                  >
                    Tümünü Göster ({activeCollection.items.length})
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setVisibleCount(INITIAL_VISIBLE)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                >
                  Listeyi Daralt
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {activeItem && modalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalIndex(null)}
              aria-label="Kapat"
              className="absolute top-3 right-3 z-10 w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/95 hover:bg-white text-slate-800 border border-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:col-span-6 bg-slate-950 flex items-center justify-center max-h-[75vh]">
              {activeItem.type === 'video' ? (
                <video
                  src={activeItem.url}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              ) : (
                <img
                  src={activeItem.url}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              )}
            </div>

            <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between bg-white">
              <div>
                <p className="text-xs font-semibold text-[#20A498]">
                  {activeCollection.label} · {activeItem.doctorLabel}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">
                  {activeItem.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setModalIndex(null);
                    onAskAboutTreatment(activeCollection.inquiryTreatment);
                  }}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#065A82] hover:bg-[#054869] rounded-lg transition-colors cursor-pointer"
                >
                  {activeCollection.ctaLabel}
                </button>

                {activeCollection.items.length > 1 && (
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <button
                      type="button"
                      onClick={() =>
                        setModalIndex(
                          (modalIndex - 1 + activeCollection.items.length) %
                            activeCollection.items.length
                        )
                      }
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Önceki</span>
                    </button>
                    <span className="tabular-nums">
                      {modalIndex + 1} / {activeCollection.items.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setModalIndex(
                          (modalIndex + 1) % activeCollection.items.length
                        )
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
