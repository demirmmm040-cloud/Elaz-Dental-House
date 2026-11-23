import {ArrowRight, Instagram} from 'lucide-react';
import {DOCTORS} from '../data/clinicData';

interface DoctorsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
  onViewDoctorReviews: (doctorId: 'yunus' | 'kubilay' | 'ceyda') => void;
}

export default function DoctorsSection({
  onSelectDoctor,
  onViewDoctorReviews,
}: DoctorsSectionProps) {
  return (
    <section id="hekimlerimiz" className="py-16 sm:py-20 bg-[#F8FBFD]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#20A498]">Hekim Kadromuz</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
            style={{textWrap: 'balance'}}
          >
            Alanında deneyimli, güven veren üç diş hekimi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hastalarımızın tedavi sürecinde kendilerini güvende hissetmeleri için her aşamayı
            açıklayan, sakin ve özenli hekim yaklaşımını benimsiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doctor) => {
            const initials = doctor.name
              .replace('Dt. ', '')
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('');

            return (
              <article
                key={doctor.id}
                className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#DCE7EE] rounded-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        aria-hidden="true"
                        className="w-12 h-12 rounded-lg bg-[#065A82]/10 text-[#065A82] font-display text-lg font-bold flex items-center justify-center shrink-0"
                      >
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {doctor.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {doctor.title} · {doctor.instagram}
                        </p>
                      </div>
                    </div>

                    <a
                      href={doctor.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${doctor.name} Instagram profili`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#DCE7EE] text-slate-600 hover:text-[#065A82] hover:border-[#065A82]/40 transition-colors shrink-0"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#20A498] leading-relaxed">
                    {doctor.focusAreas.join(' · ')}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="mt-5 p-4 bg-[#F4F8FA] border border-[#DCE7EE] rounded-lg">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      “{doctor.featuredQuote.text}”
                    </p>
                    <p className="mt-2.5 text-xs text-slate-500">
                      <span className="font-semibold text-slate-800">
                        {doctor.featuredQuote.author}
                      </span>{' '}
                      · {doctor.featuredQuote.date}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onViewDoctorReviews(doctor.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap"
                  >
                    Hasta Yorumlarını Gör
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doctor.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#065A82] hover:text-[#20A498] cursor-pointer whitespace-nowrap"
                  >
                    <span>İletişime Geç</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
