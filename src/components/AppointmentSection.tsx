import {FormEvent, useEffect, useState} from 'react';
import {
  CheckCircle2,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {CLINIC_INFO, DOCTORS, SERVICES} from '../data/clinicData';

interface AppointmentSectionProps {
  preselectedService: string;
  preselectedDoctor: string;
}

export default function AppointmentSection({
  preselectedService,
  preselectedDoctor,
}: AppointmentSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0].title);
  const [doctor, setDoctor] = useState('Fark Etmez / Uygun Hekim');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedDoctor) {
      setDoctor(preselectedDoctor);
      setSubmitted(false);
    }
  }, [preselectedDoctor]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedName = fullName.trim();
    const digitsOnly = phone.replace(/\D/g, '');

    if (cleanedName.length < 3) {
      setErrorMsg('Lütfen adınızı ve soyadınızı eksiksiz giriniz.');
      return;
    }

    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      setErrorMsg(
        'Lütfen geçerli bir telefon numarası giriniz (ör. 05XX XXX XX XX).'
      );
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Özel Dental House Elazığ,\nBilgi ve uygunluk sormak istiyorum.\nAd Soyad: ${fullName.trim()}\nTelefon: ${phone.trim()}\nİlgilenilen İşlem: ${service}\nHekim Tercihi: ${doctor}${
      notes.trim() ? `\nNot: ${notes.trim()}` : ''
    }`
  );

  return (
    <section id="randevu" className="py-16 sm:py-20 bg-[#F8FBFD]">
      <div
        id="iletisim"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
      >
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-sm font-semibold text-[#20A498]">
              İletişim & Konum
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{textWrap: 'balance'}}
            >
              Bilgi alın ve uygun gün için bize ulaşın
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tedavi seçenekleri hakkında bilgi almak veya uygun muayene gün ve saatini
              öğrenmek için telefon hatlarımızdan, WhatsApp’tan ya da yandaki iletişim
              formundan bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="bg-white border border-[#DCE7EE] rounded-xl divide-y divide-[#DCE7EE]">
            <div className="p-5 flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#065A82] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">Klinik Adresi</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-semibold text-[#065A82] hover:text-[#20A498] underline underline-offset-4"
                >
                  Google Haritalar’da Yol Tarifi Al
                </a>
              </div>
            </div>

            <div className="p-5 flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-[#065A82] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  İletişim Hatları
                </h3>
                <div className="mt-1.5 flex flex-col gap-1.5 text-sm tabular-nums">
                  <a
                    href={CLINIC_INFO.phoneLandlineHref}
                    className="font-medium text-slate-800 hover:text-[#065A82]"
                  >
                    Sabit Hat: {CLINIC_INFO.phoneLandlineDisplay}
                  </a>
                  <a
                    href={CLINIC_INFO.phoneMobileHref}
                    className="font-medium text-slate-800 hover:text-[#065A82]"
                  >
                    Mobil / WhatsApp: {CLINIC_INFO.phoneMobileDisplay}
                  </a>
                </div>
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp’tan Uygunluk Sor</span>
                </a>
              </div>
            </div>

            <div className="p-5 flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#065A82] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Açılış Saati
                </h3>
                <p className="mt-1 text-sm text-slate-600 tabular-nums">
                  Açılış zamanı: {CLINIC_INFO.openingHour}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Güncel uygunluk durumu için arayabilir veya WhatsApp üzerinden yazabilirsiniz.
                </p>
              </div>
            </div>

            <div className="p-5 flex items-start gap-3.5">
              <Instagram className="w-5 h-5 text-[#065A82] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">Instagram</h3>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-slate-700 hover:text-[#065A82]"
                >
                  {CLINIC_INFO.instagramHandle} · 3.910 takipçi
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#DCE7EE] rounded-xl p-6 sm:p-8">
          {submitted ? (
            <div className="py-4">
              <div className="flex items-center gap-3 text-[#20A498]">
                <CheckCircle2 className="w-7 h-7 shrink-0" />
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Bilgi talebiniz hazırlandı
                </h3>
              </div>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Talebinizi aşağıdaki WhatsApp bağlantısı üzerinden doğrudan kliniğimize
                iletebilir, uygun gün ve saat bilgisini ekibimizden öğrenebilirsiniz.
              </p>

              <dl className="mt-6 p-5 bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-500">Hasta Adı</dt>
                  <dd className="font-semibold text-slate-900 mt-0.5">{fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">İletişim Numarası</dt>
                  <dd className="font-semibold text-slate-900 mt-0.5 tabular-nums">
                    {phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">İlgilenilen İşlem</dt>
                  <dd className="font-semibold text-slate-900 mt-0.5">{service}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Hekim Tercihi</dt>
                  <dd className="font-semibold text-slate-900 mt-0.5">{doctor}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`${CLINIC_INFO.whatsappHref}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ile Kliniğe Gönder</span>
                </a>

                <a
                  href={CLINIC_INFO.phoneLandlineHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#065A82] bg-[#EBF2F6] hover:bg-[#DDE9F0] border border-[#DCE7EE] rounded-lg transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#065A82]" />
                  <span>{CLINIC_INFO.phoneLandlineDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                >
                  Bilgileri Düzenle
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Bilgi & Geri Arama Talebi
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Sabit saat seçimi olmadan ilgilendiğiniz tedaviyi iletin; kliniğimiz
                  uygunluk durumuna göre sizinle iletişime geçsin.
                </p>
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 text-sm font-medium text-rose-800 bg-rose-50 border border-rose-200 rounded-lg"
                >
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="randevu-ad"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Adınız Soyadınız
                  </label>
                  <input
                    id="randevu-ad"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Örn. Ahmet Yılmaz"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="randevu-tel"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Telefon Numaranız
                  </label>
                  <input
                    id="randevu-tel"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 placeholder:text-slate-400 tabular-nums focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="randevu-islem"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    İlgilendiğiniz İşlem
                  </label>
                  <select
                    id="randevu-islem"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
                  >
                    {SERVICES.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="Genel Muayene & Danışma">
                      Genel Muayene & Danışma
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="randevu-hekim"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Hekim Tercihi (İsteğe Bağlı)
                  </label>
                  <select
                    id="randevu-hekim"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
                  >
                    <option value="Fark Etmez / Uygun Hekim">
                      Fark Etmez / Uygun Hekim
                    </option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="randevu-not"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Mesajınız veya Sorunuz (İsteğe Bağlı)
                </label>
                <textarea
                  id="randevu-not"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Örn. İmplant veya gülüş tasarımı hakkında uygunluk ve bilgi almak istiyorum..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FBFD] border border-[#DCE7EE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#065A82] focus:ring-2 focus:ring-[#065A82]/15"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Müsaitlik bilgisi kliniğimiz tarafından teyit edilir.
                </p>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#065A82] hover:bg-[#054869] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065A82] focus-visible:ring-offset-2"
                >
                  WhatsApp Mesajı Oluştur
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
