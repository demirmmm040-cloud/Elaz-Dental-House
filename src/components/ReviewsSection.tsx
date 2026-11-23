import {useMemo, useState} from 'react';
import {Search, Star, X} from 'lucide-react';
import {CLINIC_INFO, PATIENT_REVIEWS} from '../data/clinicData';

export type ReviewFilter = 'all' | 'yunus' | 'kubilay' | 'ceyda' | 'klinik';

interface ReviewsSectionProps {
  activeFilter: ReviewFilter;
  onFilterChange: (filter: ReviewFilter) => void;
}

const INITIAL_COUNT = 9;

export default function ReviewsSection({
  activeFilter,
  onFilterChange,
}: ReviewsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const counts = useMemo(() => {
    return {
      all: PATIENT_REVIEWS.length,
      yunus: PATIENT_REVIEWS.filter((r) => r.doctorTag === 'yunus').length,
      kubilay: PATIENT_REVIEWS.filter((r) => r.doctorTag === 'kubilay').length,
      ceyda: PATIENT_REVIEWS.filter((r) => r.doctorTag === 'ceyda').length,
      klinik: PATIENT_REVIEWS.filter((r) => r.doctorTag === 'klinik').length,
    };
  }, []);

  const filteredReviews = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase('tr-TR');
    return PATIENT_REVIEWS.filter((review) => {
      const matchesFilter =
        activeFilter === 'all' || review.doctorTag === activeFilter;
      if (!matchesFilter) return false;
      if (!q) return true;
      return (
        review.author.toLocaleLowerCase('tr-TR').includes(q) ||
        review.text.toLocaleLowerCase('tr-TR').includes(q)
      );
    });
  }, [activeFilter, searchQuery]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  const handleTabClick = (nextFilter: ReviewFilter) => {
    onFilterChange(nextFilter);
    setVisibleCount(INITIAL_COUNT);
  };

  const filterTabs: {id: ReviewFilter; label: string; count: number}[] = [
    {id: 'all', label: 'Tümü', count: counts.all},
    {id: 'yunus', label: 'Dt. Yunus Emre Yüksel', count: counts.yunus},
    {id: 'kubilay', label: 'Dt. Kubilay Erçel', count: counts.kubilay},
    {id: 'ceyda', label: 'Dt. Ceyda Celayir', count: counts.ceyda},
    {id: 'klinik', label: 'Klinik Genel', count: counts.klinik},
  ];

  const getDoctorLabel = (tag: ReviewFilter) => {
    switch (tag) {
      case 'yunus':
        return 'Dt. Yunus Emre Yüksel';
      case 'kubilay':
        return 'Dt. Kubilay Erçel';
      case 'ceyda':
        return 'Dt. Ceyda Celayir';
      default:
        return 'Dental House Elazığ';
    }
  };

  return (
    <section
      id="yorumlar"
      className="py-16 sm:py-20 bg-white border-t border-b border-[#DCE7EE]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-semibold text-[#20A498]">
              Google Hasta Yorumları · {CLINIC_INFO.googleRating} / 5 ({CLINIC_INFO.googleReviewCount}{' '}
              Değerlendirme)
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl"
              style={{textWrap: 'balance'}}
            >
              Hastalarımızın gerçek deneyimleri
            </h2>
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(INITIAL_COUNT);
              }}
              placeholder="Yorumlarda ara (implant, dolgu, korku...)"
              aria-label="Hasta yorumlarında ara"
              className="w-full pl-10 pr-9 py-2 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Aramayı temizle"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Yorumları hekime göre filtrele"
          className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBF2F6] border border-[#DCE7EE] rounded-lg w-fit max-w-full mb-8"
        >
          {filterTabs.map((tab) => {
            const active = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-white text-[#065A82] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {filteredReviews.length === 0 ? (
          <div className="p-10 text-center bg-[#F8FBFD] border border-[#DCE7EE] rounded-xl">
            <p className="text-base font-medium text-slate-900">
              Aramanızla eşleşen hasta yorumu bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onFilterChange('all');
              }}
              className="mt-3 text-sm font-semibold text-[#065A82] hover:text-[#20A498] underline underline-offset-4 cursor-pointer"
            >
              Tüm yorumları göster
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedReviews.map((review) => (
                <article
                  key={review.id}
                  className="flex flex-col justify-between p-5 sm:p-6 bg-[#F8FBFD] border border-[#DCE7EE] rounded-xl"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {review.author}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-500">
                          Google Yorumu · {review.dateLabel}
                          {review.isNew ? ' · Yeni' : ''}
                        </p>
                      </div>

                      <div
                        aria-label={`${review.rating} üzerinden 5 puan`}
                        className="flex items-center gap-1 shrink-0 text-xs font-semibold text-slate-800 tabular-nums"
                      >
                        <Star
                          className={`w-3.5 h-3.5 ${
                            review.rating >= 4
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-300 text-slate-400'
                          }`}
                        />
                        <span>{review.rating}/5</span>
                      </div>
                    </div>

                    <p className="mt-3.5 text-sm text-slate-700 leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  <p className="mt-4 pt-3 border-t border-[#DCE7EE]/70 text-xs font-semibold text-[#065A82]">
                    {getDoctorLabel(review.doctorTag)}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4">
              <p className="text-xs sm:text-sm text-slate-500 tabular-nums">
                Gösterilen: {displayedReviews.length} / {filteredReviews.length} yorum
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {hasMore && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((prev) =>
                          Math.min(prev + 12, filteredReviews.length)
                        )
                      }
                      className="px-4 py-2 text-sm font-semibold text-[#065A82] bg-[#EBF2F6] hover:bg-[#DDE9F0] border border-[#DCE7EE] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Daha Fazla Yorum Göster
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisibleCount(filteredReviews.length)}
                      className="px-4 py-2 text-sm font-semibold text-[#065A82] hover:text-[#20A498] underline underline-offset-4 cursor-pointer whitespace-nowrap"
                    >
                      Tümünü Göster ({filteredReviews.length})
                    </button>
                  </>
                )}

                {!hasMore && filteredReviews.length > INITIAL_COUNT && (
                  <button
                    type="button"
                    onClick={() => setVisibleCount(INITIAL_COUNT)}
                    className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap"
                  >
                    Listeyi Daralt
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
