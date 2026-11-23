export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'estetik' | 'protez' | 'tedavi';
  summary: string;
  details: string;
  featured?: boolean;
}

export interface ClinicalCase {
  id: string;
  title: string;
  treatment: string;
  doctorId: 'yunus' | 'kubilay';
  doctorName: string;
  imageUrl: string;
  summary: string;
}

export interface DoctorProfile {
  id: 'yunus' | 'kubilay' | 'ceyda';
  name: string;
  title: string;
  instagram: string;
  instagramUrl: string;
  focusAreas: string[];
  bio: string;
  featuredQuote: {
    author: string;
    text: string;
    date: string;
  };
}

export interface PatientReview {
  id: number;
  author: string;
  rating: number;
  dateLabel: string;
  isNew?: boolean;
  doctorTag: 'yunus' | 'kubilay' | 'ceyda' | 'klinik';
  text: string;
}

export interface HighlightMediaItem {
  id: string;
  type: 'video' | 'image';
  url: string;
  title: string;
  caption: string;
  doctorLabel: string;
  hideImageOverlay?: boolean;
}

export interface HighlightCollection {
  id: string;
  label: string;
  subtitle: string;
  inquiryTreatment: string;
  ctaLabel: string;
  items: HighlightMediaItem[];
}

export const CLINIC_INFO = {
  shortName: 'Dental House',
  fullName: 'Özel Dental House Ağız ve Diş Sağlığı Polikliniği',
  city: 'Elazığ',
  district: 'Elazığ Merkez',
  address:
    'Üniversite Mah., Zübeyde Hanım Cd. Altmışlar Sitesi Altı No:143 D:1-B, 23000 Elazığ Merkez / Elazığ',
  phoneLandlineDisplay: '0 (424) 233 00 22',
  phoneLandlineHref: 'tel:+904242330022',
  phoneMobileDisplay: '0 (506) 169 87 81',
  phoneMobileHref: 'tel:+905061698781',
  whatsappHref: 'https://wa.me/905061698781',
  instagramHandle: '@dentalhouseelazig',
  instagramUrl: 'https://www.instagram.com/dentalhouseelazig/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=%C3%96zel+Dental+House+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi+Elaz%C4%B1%C4%9F',
  googleRating: '4,9',
  googleReviewCount: 602,
  openingHour: '09:00',
  workingHoursText: 'Pazartesi – Cumartesi · 09:00 – 19:00',
  interiorPhoto: '/assets/aistudio/unnamed__14__42dd9d7b.webp',
  logoPhoto: '/assets/aistudio/image_25593fe2.png',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'gulus-tasarimi',
    number: '01',
    title: 'Gülüş Tasarımı',
    category: 'estetik',
    featured: true,
    summary:
      'Yüz oranlarınıza, dudak yapınıza ve diş eti estetiğinize uyumlu kişiye özel dijital ve klinik gülüş planlaması.',
    details:
      'Ön diş formu, renk bütünlüğü ve simetri dengesini bir arada değerlendirerek doğal görünümlü kalıcı sonuçlar oluşturuyoruz.',
  },
  {
    id: 'zirkonyum-porselen',
    number: '02',
    title: 'Zirkonyum Diş & Porselen Kaplama',
    category: 'protez',
    featured: true,
    summary:
      'Işık geçirgenliği yüksek, diş eti ile biyolojik uyumu mükemmel ve uzun ömürlü zirkonyum ve porselen restorasyonlar.',
    details:
      'Renklenmiş, aşınmış veya yapısal bütünlüğünü kaybetmiş dişlerde metal desteksiz estetik ve dayanıklı kaplama çözümleri sunuyoruz.',
  },
  {
    id: 'lamina-porselen',
    number: '03',
    title: 'Lamina & Lamina Porselen',
    category: 'estetik',
    summary:
      'Diş dokusunu maksimum düzeyde koruyan, ince yaprak porselen uygulamaları ile estetik ön bölge restorasyonları.',
    details:
      'Aralıklı dişler (diastema), kalıcı renklenmeler ve küçük form bozukluklarında minimal aşındırma ile doğal parlaklık kazandırılır.',
  },
  {
    id: 'implant',
    number: '04',
    title: 'İmplant Tedavisi',
    category: 'protez',
    featured: true,
    summary:
      'Tek diş eksikliğinden tam çene rehabilitasyonuna kadar güvenli, planlı ve konforlu dental implant uygulamaları.',
    details:
      'Komşu sağlıklı dişlere dokunmadan çiğneme fonksiyonunu ve estetik bütünlüğü yeniden kazandıran kalıcı kök tedavileri.',
  },
  {
    id: 'estetik-dolgu',
    number: '05',
    title: 'Estetik Dolgu',
    category: 'estetik',
    summary:
      'Doğal diş rengi ve dokusuyla birebir bütünleşen, ön ve arka dişlerde fark edilmeyen kompozit restorasyonlar.',
    details:
      'Kırık ön diş onarımları, çürük tedavileri ve eski dolguların estetik yenilenmesinde yüksek renk uyumu sağlanır.',
  },
  {
    id: 'dis-beyazlatma-temizligi',
    number: '06',
    title: 'Diş Beyazlatma & Diş Temizliği',
    category: 'tedavi',
    summary:
      'Diş taşı temizliği, yüzey lekelerinin giderilmesi ve klinik ortamda kontrollü diş beyazlatma uygulamaları.',
    details:
      'Diş eti sağlığını koruyan detaylı detertraj, polisaj ve hassasiyet kontrollü ton açma işlemleri tek seansta planlanır.',
  },
  {
    id: 'ortodonti',
    number: '07',
    title: 'Ortodonti & Şeffaf Plak',
    category: 'tedavi',
    summary:
      'Çapraşıklık ve kapanış bozukluklarının tel tedavisi veya şeffaf plak sistemleriyle konforlu düzeltilmesi.',
    details:
      'Çocuk, genç ve yetişkin hastalara yönelik kişiselleştirilmiş ortodontik takip ve şeffaf plak planlaması uygulanır.',
  },
  {
    id: 'endodonti-cerrahi',
    number: '08',
    title: 'Kanal Tedavisi & Cerrahi Çekim',
    category: 'tedavi',
    summary:
      'Ağrısız anestezi protokolleri ile diş kurtarmaya odaklı kanal tedavileri ve gömülü 20 yaş diş çekimleri.',
    details:
      'Diş hekimi fobisi olan hastalar için sabırlı, açıklayıcı ve aşamalı bilgilendirme eşliğinde konforlu tedavi süreci yürütülür.',
  },
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-yunus-1',
    title: 'Ön Bölge Estetik Gülüş Tasarımı',
    treatment: 'Zirkonyum & Tam Ağız Estetik Restorasyon',
    doctorId: 'yunus',
    doctorName: 'Dt. Yunus Emre Yüksel',
    imageUrl: '/assets/aistudio/unnamed__17__29f2951b.webp',
    summary:
      'İleri düzey aşınma, renklenme ve diş eksikliğinin giderildiği; hem çiğneme fonksiyonunun hem de doğal gülüş hattının yeniden oluşturulduğu vaka.',
  },
  {
    id: 'case-kubilay-1',
    title: 'Diastema Kapatma & Ön Diş Form Düzenlemesi',
    treatment: 'Gülüş Tasarımı & Estetik Kaplama',
    doctorId: 'kubilay',
    doctorName: 'Dt. Kubilay Erçel',
    imageUrl: '/assets/aistudio/unnamed__15__a1811502.webp',
    summary:
      'Ön dişlerdeki aralıkların, eksen eğriliklerinin ve ton farklılıklarının doğal diş formu korunarak dengeli ve simetrik hale getirilmesi.',
  },
  {
    id: 'case-yunus-2',
    title: 'Kırık ve Renklenmiş Ön Diş Rehabilitasyonu',
    treatment: 'Zirkonyum / Porselen Kaplama',
    doctorId: 'yunus',
    doctorName: 'Dt. Yunus Emre Yüksel',
    imageUrl: '/assets/aistudio/unnamed__16__3ef169ed.webp',
    summary:
      'Eski dolgular, canlılığını yitirmiş ön keserler ve mine kırıklarının yüksek ışık geçirgenliğine sahip estetik restorasyonlarla yenilenmesi.',
  },
  {
    id: 'case-yunus-3',
    title: 'Üst Çene Simetri ve Gülüş Hattı Yenileme',
    treatment: 'Gülüş Tasarımı & Zirkonyum Restorasyon',
    doctorId: 'yunus',
    doctorName: 'Dt. Yunus Emre Yüksel',
    imageUrl: '/assets/aistudio/unnamed__18__d9be7d82.webp',
    summary:
      'Uyumsuz eski kuronların ve eksik lateral alanların yüz orta hattıyla uyumlu, doğal diş eti geçişine sahip yeni restorasyonlarla değiştirilmesi.',
  },
  {
    id: 'case-yunus-4',
    title: 'Mine Erozyonu ve Ton Bütünlüğü Restorasyonu',
    treatment: 'Lamina / Zirkonyum Gülüş Tasarımı',
    doctorId: 'yunus',
    doctorName: 'Dt. Yunus Emre Yüksel',
    imageUrl: '/assets/aistudio/unnamed__19__5c9d6c90.webp',
    summary:
      'Ön dişlerdeki madde kaybı, lekelenme ve diş boyu eşitsizliğinin estetik oranlarla yeniden yapılandırılması.',
  },
];

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'yunus',
    name: 'Dt. Yunus Emre Yüksel',
    title: 'Diş Hekimi',
    instagram: '@dtyunusemreyuksel',
    instagramUrl: 'https://www.instagram.com/dtyunusemreyuksel/',
    focusAreas: [
      'Gülüş Tasarımı',
      'İmplant & Zirkonyum',
      'Estetik Dolgu & Kanal Tedavisi',
    ],
    bio: 'Estetik ön bölge restorasyonları, implant üstü protezler ve ağrısız tedavi yaklaşımlarıyla özellikle diş hekimi kaygısı yaşayan hastalar tarafından sıklıkla tercih edilmektedir.',
    featuredQuote: {
      author: 'Nur Yılmaz',
      date: '3 ay önce · Google Yorumu',
      text: 'Yunus Emre Yüksel’den implant yaptırdım çok memnun kaldım. Annem de yıllar önce dişlerini yaptırmıştı, memnun kaldığı için Fransa’dan tekrar Yunus Emre Yüksel’e gidecek.',
    },
  },
  {
    id: 'kubilay',
    name: 'Dt. Kubilay Erçel',
    title: 'Diş Hekimi',
    instagram: '@dtkubilayercel',
    instagramUrl: 'https://www.instagram.com/dtkubilayercel/',
    focusAreas: [
      'Estetik Kaplama & Dolgu',
      'Şeffaf Plak & Ortodonti',
      'Detaylı Tanı & Kanal Tedavisi',
    ],
    bio: 'Tedavi sürecinin her adımını hastaya sakin ve anlaşılır biçimde aktaran titiz klinik yaklaşımıyla uzun yıllardır Elazığ’da ailelerin güvendiği hekimlerdendir.',
    featuredQuote: {
      author: 'Fatmanur Polat',
      date: '3 ay önce · Google Yorumu',
      text: 'Kubilay hocam işinin ehli. Tedavi ederken sürekli sakince konuşup işlemleri anlatarak hastayı rahatlatıyor; özellikle dişçi korkusu olanlar için çok güven verici.',
    },
  },
  {
    id: 'ceyda',
    name: 'Dt. Ceyda Celayir',
    title: 'Diş Hekimi',
    instagram: '@dtceydacelayir',
    instagramUrl: 'https://www.instagram.com/dtceydacelayir/',
    focusAreas: [
      'Çocuk & Aile Diş Hekimliği',
      'Diş Çekimi & Cerrahi',
      'Genel Diş Sağlığı & Koruyucu Tedavi',
    ],
    bio: 'Şeffaf iletişimi, çocuk hastalarla kurduğu sıcak bağ ve hastane fobisi olan hastalarda sağladığı konforlu çekim ve tedavi süreçleriyle öne çıkmaktadır.',
    featuredQuote: {
      author: 'Samet Yılmaz',
      date: '4 hafta önce · Google Yorumu',
      text: '2 adet diş çekimim yapıldı. Hastane fobisi olan biri olarak Ceyda hoca sayesinde gayet rahat ve güzel bir süreç geçirdim.',
    },
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 1,
    author: 'Faik KARŞILIYAN',
    rating: 5,
    dateLabel: '5 gün önce',
    isNew: true,
    doctorTag: 'yunus',
    text: 'Dental House Ağız ve Diş Sağlığı Kliniği’nde aldığım tedaviden son derece memnun kaldım. Başta bilgi, ilgi ve mesleki yaklaşımıyla güven veren Doktor Yunus Emre Yüksel olmak üzere tüm ekibe teşekkür ederim.',
  },
  {
    id: 2,
    author: 'Yusuf Ozalp',
    rating: 5,
    dateLabel: '5 gün önce',
    isNew: true,
    doctorTag: 'yunus',
    text: "İlgi ve alakalarından dolayı sayın Yunus Hocama teşekkür ederim. Elazığ'da bu ekipten iyisini bulamazsınız.",
  },
  {
    id: 3,
    author: 'Zeynep yasemin Akgül',
    rating: 5,
    dateLabel: '3 hafta önce',
    isNew: true,
    doctorTag: 'klinik',
    text: 'Çok temiz, ayrıntılı bir şekilde yapıldı dişlerim. İlk defa bir dişçiden memnun kaldım. Çok ilgililerdi, her şey için teşekkürler, şiddetle tavsiye ediyorum.',
  },
  {
    id: 4,
    author: 'samet yılmaz',
    rating: 5,
    dateLabel: '4 hafta önce',
    doctorTag: 'ceyda',
    text: '2 adet diş çekimim yapıldı. Hastane fobisi olan biri olarak Ceyda hoca sayesinde gayet rahat ve güzel bir süreç geçirdim. Klinik olarak da gösterdikleri ilgi ve alakadan dolayı teşekkür ederim.',
  },
  {
    id: 5,
    author: 'Nur',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Merhabalar, ben eşim ve annem başta olmak üzere tanıdığım bütün arkadaşlarıma önerdiğim ve her gidenin de muhakkak memnun olduğu bir diş kliniğine bu gecikmiş yorumu yazmak istedim.',
  },
  {
    id: 6,
    author: 'Kaoeytwv',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Benim ön dişim kırıktı, estetik dolgu işlemi için gittim. Tabii ön diş olduğu ve görüntümü etkileyeceği için çekinerek gitmiştim ancak dişlerimin görüntüsünden çok memnun kaldım.',
  },
  {
    id: 7,
    author: 'Furkan Gor',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre Yüksel hocamız branşında tektir. Aldığım tedavilerde herhangi bir problem yaşamadım. Güler yüzlü, temiz ve hijyenik çalışma alanlarıyla Elazığ’ımızda örnek bir klinik.',
  },
  {
    id: 8,
    author: 'İkra Nur Demircan',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Gerçekten çok güzel bir değişim olmuş. İlk hâliyle son hâli arasındaki fark oldukça belirgin. Dişlerin formunun daha uyumlu görünmesi ve gülüşün bütünlüğü çok başarılı.',
  },
  {
    id: 9,
    author: 'Fatma Murat',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hoca oldukça ilgili ve tecrübeli, diş hekimi korkusu olanlar için kesinlikle önerebileceğim bir hekim. Birçok işlem yaptırdım ve hepsinden memnun kaldım.',
  },
  {
    id: 10,
    author: 'Sude',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'kubilay',
    text: 'Yaklaşık 6 yıldır aynı kliniğin hastasıyım ve gerçekten hiçbir zaman pişmanlık duymadım. Kubilay hocamın tatlı gülümsemesi ve hastalarına karşı olan fazlasıyla özeni çok değerli.',
  },
  {
    id: 11,
    author: 'Derya Yıldırım',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hocanın elinin hafifliği, tedavinizle uğraşırken gösterdiği nezaketi ve ilgisi, yaptığı tedavilerin kusursuz olması; her şey kesinlikle mükemmel.',
  },
  {
    id: 12,
    author: 'Tuba Baydemir',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Diş hekimliğinin pik noktası bu olsa gerek. Olağanüstü yetenekli bir hekimlik, güler yüzlü, saygılı ve çalışkan bir ekip. Yunus Emre hocamın ilgisi, samimiyeti ve işine olan özeni çok güven verdiği için ailece tercihimiz oldu.',
  },
  {
    id: 13,
    author: 'Yasemin Kaçan',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Dental House ile yolum kesiştiği için çok şanslıyım. Randevu planlamasından klinikteki hijyene, tedavi sırasındaki hassasiyetten sonrasındaki takibe kadar her şey mükemmeldi. Kendisine ve güler yüzlü ekibine emekleri için yürekten teşekkür ederim.',
  },
  {
    id: 14,
    author: 'Recai',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Benim ve ailemin tedavi olduğu Yunus hocadan hep memnun kaldık. İlgisi ve yetkinliğinden dolayı gönül rahatlığıyla tedavimizi olduk. Emeklerinden dolayı teşekkür ederim.',
  },
  {
    id: 15,
    author: 'Rabiye Şener',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Hem güler yüzlü karşılamanız hem de yapılan tedavinin mükemmel olması, ağrısız olması ve istediğim tedavinin yapılmış olması beni ziyadesiyle memnun etti.',
  },
  {
    id: 16,
    author: 'Özge Özel',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Hocamın ilgisi, güler yüzü ve hastalarına yaklaşımı gerçekten çok kıymetli. İşini severek ve özenle yapan bir doktor. Çok memnun kaldım.',
  },
  {
    id: 17,
    author: 'Çağatay K.',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'ceyda',
    text: 'Yunus hocamın, Ceyda hocamın ve tüm ekibin tedavi süresi boyunca göstermiş oldukları profesyonellik, ilgi, samimiyet ve güler yüzleri gerçekten takdire şayan, tüm ekibe tekrardan teşekkür ediyorum.',
  },
  {
    id: 18,
    author: 'Cemile Tarhan',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Kliniğinizde ilgili ve güler yüzlü karşılandım. Hizmetinizden son derece memnun kaldım. Her şey için teşekkür ederim, gönül rahatlığıyla tavsiye ediyorum.',
  },
  {
    id: 19,
    author: 'ÖZKan Türker',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Kanal tedavimden ve kaplamalarımdan çok memnun kaldım. Yunus Emre hocanın eli de çok hafif. Mutlaka muayeneye gidilecek bir yer.',
  },
  {
    id: 20,
    author: 'Esra Dincer',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hocamın sayesinde çekilme riski olan tüm dişlerim kurtuldu. Elinize sağlık, iyi ki varsınız.',
  },
  {
    id: 21,
    author: 'AYSUN ARIKAN',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'yunus',
    text: 'Doktorumuz Yunus Emre beyin yaptığı tedaviden çok memnun kaldık. Hocamızın ekibine de ilgileri ve güler yüzleri için çok teşekkür ederiz.',
  },
  {
    id: 22,
    author: 'Nuri Çelik',
    rating: 5,
    dateLabel: '1 ay önce',
    doctorTag: 'klinik',
    text: 'Gerçekten çok memnun kaldım. Hem ilgileri hem de yaptıkları iş çok başarılıydı. Kendinizi rahat ve güvende hissedebileceğiniz bir klinik. Tüm ekibe teşekkür ederim.',
  },
  {
    id: 23,
    author: 'enes yıldız',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Sayın Dr. Kubilay Erçel’e çok teşekkür etmek istiyorum. Eşimin dişindeki sorunlardan kaynaklı ağrısından dolayı kendisine rastladık. Anında teşhis ve yerinde müdahalesi için minnettarız.',
  },
  {
    id: 24,
    author: 'Bahar İlhan',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'yunus',
    text: 'Diş hekimi korkusu olan biri olarak Özel Dental House ailesine ve özellikle Dt. Yunus Emre Yüksel’e çok teşekkür ederim. Tedavi sürecimin her aşamasında ne yapılacağını açıklayarak rahatlattı.',
  },
  {
    id: 25,
    author: 'Akın AYDIN',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'yunus',
    text: 'İnternetten yorumlara bakıp gittim ve gerçekten çok memnun kaldım. Yunus hoca ve çalışanlar çok güzel insanlar. İlgi ve alaka çok güzel, ortam ve aletler de son derece hijyenik.',
  },
  {
    id: 26,
    author: 'HÜLYA GELİR',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Tedavi sürecim boyunca kendimi güvende ve rahat hissettiğim bir süreç oldu. Kubilay Bey’in ilgisi ve yaptığı işle ilgili özeni gerçekten çok güzeldi.',
  },
  {
    id: 27,
    author: 'Merve Tarhan',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay Bey tam anlamıyla işinin ehli. Sürecin başından sonuna kadar her detayı ince ince anlattı. İlgi, alaka ve klinik temizliği mükemmeldi. Bundan sonra diş sağlığında gözü kapalı gideceğim tek yer.',
  },
  {
    id: 28,
    author: 'Mesut EROL',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'ceyda',
    text: 'Daha önce büyük kızım için gitmiştim, çok memnun kaldığım için şimdi de küçük kızım için gittim. İşlem bittikten sonra Ceyda hocamıza ailece çok teşekkür ettik.',
  },
  {
    id: 29,
    author: 'Gamze Kırılmazkaya',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Dt. Kubilay Erçel ve ekibine tedavi sürecim boyunca gösterdikleri ilgi, güler yüz ve özen için çok teşekkür ederim. Memnun kaldığım bir tedavi süreci geçirdim. Emekleriniz için teşekkür eder, başarılarınızın devamını dilerim.',
  },
  {
    id: 30,
    author: 'Ayşe Betül',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'yunus',
    text: 'Çok memnun kaldım. Yunus Emre Bey’in ilgisi, özeni ve profesyonelliği kafamda soru işareti bırakmadı. İşlem bittiğinde önyargılardan kurtulmuş ve mutlu bir şekilde ayrıldım. Emeği geçen herkese teşekkür ediyorum.',
  },
  {
    id: 31,
    author: 'Özlem Akyazı',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'klinik',
    text: 'Tüm süreç boyunca kendimi güvende ve rahat hissettim. İşlerini büyük bir özen ve titizlikle yapan, hastalarının memnuniyetini gerçekten önemseyen harika bir ekip. Emeği geçen herkese çok teşekkür ederim. Gönül rahatlığıyla tavsiye ediyorum.',
  },
  {
    id: 32,
    author: 'Meryem Yakşi',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'yunus',
    text: 'Diş taşı temizliği için gitmiştim, ayrıca detaylı muayene bilgisi de aldım. Yunus Emre Bey tedavimi yapmıştı. Teşekkürler, gönül rahatlığıyla tercih edebilirsiniz.',
  },
  {
    id: 33,
    author: 'Mehmet Kaya',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'klinik',
    text: 'Öncelikle güler yüzleri için Dental House ailesine teşekkür ederiz. İşlerini en üst düzeyde ve teknolojik olarak yapıyorlar ve en önemlisi tecrübeleri. Biz çok memnunuz, teşekkürler Dental House.',
  },
  {
    id: 34,
    author: 'Sebahat Tunç',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Merhabalar, Dental House ailesiyle 13 yıl önce tanıştık. Kubilay hocam işinde çok başarılı, çok kaliteli bir insandır. Ailece çok memnunuz; kendilerine ve ekibine çok teşekkür ediyorum, iyi ki Dental House.',
  },
  {
    id: 35,
    author: 'Ahmet bilal Çalışkan',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay hoca ve Yunus hoca işin ehli insanlar. Yaklaşık 7 yıl oldu hocalarımı tanıyalı. Sağ olsunlar, içim rahat her işlemde.',
  },
  {
    id: 36,
    author: 'şeyda yokuş',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'klinik',
    text: 'Yıllardır düzenli giderim. Klinik ortamı, hijyen, doktorların ilgisi ve kullanılan malzeme kalitesi kesinlikle tartışılmaz. Çok dişçi gezmiş biri olarak kesinlikle Dental House’dan şaşmayın.',
  },
  {
    id: 37,
    author: 'Aslı Bağlan',
    rating: 5,
    dateLabel: '2 ay önce',
    doctorTag: 'klinik',
    text: 'Yapılan kanal tedavisinden çok memnun kaldım. İlgi ve alakaları çok güzeldi, herkese gönül rahatlığıyla tavsiye ederim.',
  },
  {
    id: 38,
    author: 'mehmet galiç',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Diş hekimi korkusu olan biri olarak tedavi sürecine başlamak benim için hiç kolay değildi. Ancak Yunus Emre Yüksel Hocam’ın sıcak, samimi ve güven veren yaklaşımıyla tüm kaygımı yendim.',
  },
  {
    id: 39,
    author: 'şuheda orman',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Diş tedavim sürecinde doktorum Kubilay Erçel’den çok memnun kaldım. İşini büyük bir titizlik ve özenle yapan, hastasına güven veren ve her aşamada detaylı bilgilendirme sunan bir hekim.',
  },
  {
    id: 40,
    author: 'ÇAĞRI KAYMAK',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Çok memnun kaldığım bir klinik oldu. Yunus hocamın ilgisi, açıklayıcı yaklaşımı ve tedavi sürecindeki özeni gerçekten güven vericiydi. Klinik oldukça temiz ve düzenli, çalışanlar da güler yüzlü ve ilgiliydi. Gönül rahatlığıyla tavsiye ederim.',
  },
  {
    id: 41,
    author: 'Reha Dilek',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay Hocam’a tedavi sürecindeki ilgisi, titizliği ve profesyonel yaklaşımı için teşekkür ederim. Her aşamada gerekli bilgilendirmeyi yaparak süreci oldukça konforlu hale getirdi.',
  },
  {
    id: 42,
    author: 'Yusuf Ünal',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Kliniğinizden aldığım hizmetten çok memnun kaldım. Başta Kubilay Hoca ve Yunus Hoca olmak üzere, güler yüzlü ve ilgili tüm ekibinize teşekkür eder, başarılarınızın devamını dilerim.',
  },
  {
    id: 43,
    author: 'Hüseyin Sekin',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Alanında uzman, yılların tecrübesine sahip diş hekimi Kubilay Erçel; karşılaştığım çeşitli ağız ve diş sağlığı sorunlarımı ağrısız ve etkili bir şekilde tedavi etti.',
  },
  {
    id: 44,
    author: 'Hatice Uzala',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hocam gerçekten çok ilgili bir hekim. Yaptığı her işlemi bize de anlatması ayrı bir güven veriyor. Şüphe duymadan tercih edebileceğiniz bir klinik.',
  },
  {
    id: 45,
    author: 'Ayşenur Erdim',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Plak tedavisi öncesi Kubilay hocamla tanıştım. Dişçiden çok korkan bir insanım ve tedavi sürecinde midem çok bulanır. Bu süreçte bana çok destek oldu, işlem sırasında rahatsızlanınca bekledi. Çok memnun kaldım.',
  },
  {
    id: 46,
    author: 'Burak Dağ',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Diş fobimi yenen adamdır Yunus hoca. 20’lik dişimi ameliyat ile aldı, hiçbir sorun yaşamadım. Keşke tüm işlemlerim için her zaman vakit bulup burayı tercih edebilsem.',
  },
  {
    id: 47,
    author: 'Fatmanur POLAT',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay hocam işinin ehli. Tedavi ederken sürekli sakince konuşup işlemler anlatarak hastayı rahatlatıyor; özellikle dişçi korkusu olanlar için ciddi derecede işe yarayan bir yöntem olduğunu düşünüyorum. Güvenle kendinizi teslim edebilirsiniz.',
  },
  {
    id: 48,
    author: 'Naciye Nur Yıldırım',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay bey oldukça ilgili ve gerçekten işini özenli yaparken hastalarının da isteklerini göz önünde bulunduran bir doktor. Aynı zamanda çalışanların güler yüzü ve ortamın hijyeni de oldukça iyi, bu özenlerinden dolayı teşekkür ederiz.',
  },
  {
    id: 49,
    author: 'Nur Yilmaz',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: "Yunus Emre Yüksel'den implant yaptırdım, çok memnun kaldım. Annem de yıllar önceden dişlerini yaptırmıştı, memnun kaldığı için tekrardan Yunus Emre Yüksel'e gidecek (Fransa'dan gittik).",
  },
  {
    id: 50,
    author: 'Yunus KAYA',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'İlgili alakalı bir kurum. Kubilay hoca için ayrı bir parantez açmak isterim; çok başarılı, eli hafif ve hastasını rahat hissettiren bir doktor. Mutlaka çevreme öneride bulunacağım.',
  },
  {
    id: 51,
    author: 'Btl Cn',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'klinik',
    text: 'Hocamıza dolgu için gittim, gitmeden önce çok ağrım vardı. Hocamız çok uğraştı sinirlerin hepsini almak için; yaptığı işin arkasında çok büyük bir emek var. Hocamızın ellerine sağlık, dişimde dolgu olduğunu anlamıyorum bile.',
  },
  {
    id: 52,
    author: 'Sibel Öztürk',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Ben diş tedavisine başlarken çok korkarak ve çekinerek başladım. Benim tedavim uzun ve zorlu bir süreçti çünkü birçok işlemi kapsıyordu ama Yunus hocamla her aşamayı güvenle tamamladık.',
  },
  {
    id: 53,
    author: 'Hande Dogdu',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'klinik',
    text: 'Çokça ilgili, güler yüzlü ve açıklayıcı bir yaklaşım gördüm. Klinik temiz ve düzenliydi, kendimi rahat hissettim. Süreç boyunca gösterilen ilgi ve özen için teşekkür ederim, gayet memnun kaldım.',
  },
  {
    id: 54,
    author: 'Mimar Tuğyıldız',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hocam alanında bir uzmandan öte. Öncelikle kendisine ve diğer tüm anlayışlı çalışanlara tüm emekleri ve iyi niyetleri için teşekkür ederim.',
  },
  {
    id: 55,
    author: 'Bergen Kara',
    rating: 5,
    dateLabel: '3 ay önce',
    doctorTag: 'kubilay',
    text: 'Diş kliniğine dolgu yapmak için gittim. Doktorum Kubilay bey ve çalışanlarından çok memnun kaldım. Çok titiz çalışıyorlar, hepsi güler yüzlü ve çok ilgililer. Çok teşekkür ediyorum.',
  },
  {
    id: 56,
    author: 'Gülşin Sun',
    rating: 5,
    dateLabel: '4 ay önce',
    doctorTag: 'ceyda',
    text: 'Çalışanların güler yüzlülüğü olsun, Ceyda Hanım’ın şeffaflığı olsun, her şeyi en küçük ayrıntısına kadar açıklayarak yaklaşımı olsun çok iyi bir deneyimdi benim için.',
  },
  {
    id: 57,
    author: 'Kübra Aydın',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Hocamıza memnuniyetimizi buradan da belirtmek isterim. Bugüne kadar gittiğimiz en ilgili ve güler yüzlü diş hekimlerinden biri. Tedavi sürecinin her aşamasında çok yardımcı oldu.',
  },
  {
    id: 58,
    author: 'Senanur Keskin',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'kubilay',
    text: 'Tedavi sürecim boyunca gösterdikleri ilgi, güler yüz ve profesyonellik için Kubilay hoca ve ekibine teşekkür ederim. İlk andan itibaren kendimi çok rahat ve güvende hissettim.',
  },
  {
    id: 59,
    author: 'Peri Coku',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'yunus',
    text: 'Yunus Emre hocamda 4 dolgu 1 zirkon yaptırdım, gerçekten çok memnunum. Hiçbir şekilde renk farkı ya da dolgu düşmesi gibi bir durum olmadı. Gözünüz kapalı gidebilirsiniz, ben çevremdeki herkese kendisini öneriyorum.',
  },
  {
    id: 60,
    author: 'gulsumun bodruk',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'klinik',
    text: 'Korkuma ve bulantıma rağmen sabırla çok büyük bir hassasiyetle süreci tamamladı. Çok teşekkür ediyorum, ellerine sağlık.',
  },
  {
    id: 61,
    author: 'Necla Polat',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'kubilay',
    text: 'Kubilay hocamız güler yüz ve samimi bir ortamla sizi karşılıyor. Aklınızda hiçbir soru işareti kalmadan tedaviyi uyguluyor. Memnun bir şekilde klinikten ayrılıyorsunuz. İşinin ehli.',
  },
  {
    id: 62,
    author: 'Suna ÖNCEL',
    rating: 5,
    dateLabel: '5 ay önce',
    doctorTag: 'kubilay',
    text: 'Ekibinize ve size çok teşekkür ederim. 2 yıldır çok kötü bir şekilde ağrıyan dişin tedavisi sonunda Kubilay hocam tarafından başarıyla bitti.',
  },
  {
    id: 63,
    author: 'Eren E.',
    rating: 1,
    dateLabel: '5 ay önce',
    doctorTag: 'klinik',
    text: 'Girişte bazı hekimler ücretli muayene bazı hekimler de ücretsiz muayene yapıyor denildi. Ben de ücretsiz muayene yapan bir hekimi seçtim. Önce gittim bir baktı...',
  },
];

export const HIGHLIGHT_COLLECTIONS: HighlightCollection[] = [
  {
    id: 'implant',
    label: 'İmplant',
    subtitle:
      'Steril cerrahi hazırlık, implant operasyon anları ve hastalarımızın paylaştığı gerçek geri bildirimler.',
    inquiryTreatment: 'İmplant Tedavisi',
    ctaLabel: 'İmplant Hakkında Bilgi Al',
    items: [
      {
        id: 'implant-video-1',
        type: 'video',
        url: '/assets/aistudio/AQPXccSpl2i47IKcJWH62sQHjmLcRjfx1zWRM2O8BfIgEo-W-pWg3T8IoZGyc_0hTzQogIkX0lAVDljz07c4VX5gmvD7fprSk2YcaKY__1__b4bf5bc4.mp4',
        title: 'Steril İmplant Cerrahisi Hazırlığı',
        caption:
          'Operasyon öncesi steril eldiven ve cerrahi set hazırlığıyla güvenli implant protokolü.',
        doctorLabel: 'Dental House Cerrahi Ekibi',
      },
      {
        id: 'implant-photo-1',
        type: 'image',
        url: '/assets/aistudio/570695590_18348574093160303_1443638716352169373_n__1__96daee1f.jpg',
        title: 'Güne 8 İmplant İle Başladık',
        caption:
          'Dt. Yunus Emre Yüksel ve Dt. Kubilay Erçel eşliğinde tam çene implant planlama ve uygulaması.',
        doctorLabel: 'Dt. Yunus Emre Yüksel · Dt. Kubilay Erçel',
      },
      {
        id: 'implant-photo-2',
        type: 'image',
        url: '/assets/aistudio/561833089_18159167356382882_3420646422810691303_n__1__ea6c037d.jpg',
        title: 'Cerrahi İmplant Uygulaması',
        caption:
          'Hassas cerrahi kitler ve planlı kemik seviyesi ölçümüyle gerçekleştirilen implant işlemi.',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'implant-photo-3',
        type: 'image',
        url: '/assets/aistudio/580556787_18179478223358512_3162272562255626707_n_6698dce1.jpg',
        title: 'Hasta Paylaşımı · #İmplant',
        caption:
          'İmplant tedavisi sonrası hastamızın kliniğimizi etiketleyerek paylaştığı memnuniyet karesi.',
        doctorLabel: '@dentalhouseelazig',
      },
    ],
  },
  {
    id: 'hastalarimiz',
    label: 'Hastalarımız',
    subtitle:
      'Çocuk hastalarımızla kurduğumuz sıcak iletişim, korkusuz muayene anları ve ailelerimizin paylaşımları.',
    inquiryTreatment: 'Genel Muayene & Danışma',
    ctaLabel: 'Muayene Hakkında Bilgi Al',
    items: [
      {
        id: 'patient-video-1',
        type: 'video',
        url: '/assets/aistudio/AQMZu0W6308Ne3xQJOQgqNHVvMc_IytHTzV4PO-5Ql9T6aqsAHFYYHW0skE9kb9oH6nh8wcRAbdoWzrvQaMe4NeQkfj28yO-8Fv_cz4_4346d964.mp4',
        title: 'Koltukta Bile Yüzü Gülen Hastalarımız',
        caption:
          'Çocuk hastalarımızın diş hekimi koltuğuna neşeyle oturduğu, kaygıdan uzak klinik ortamı.',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'patient-photo-1',
        type: 'image',
        url: '/assets/aistudio/557611276_18092771140686529_1082568571064280252_n_08c68553.jpg',
        title: 'Ahmet Şakir Kliniğimizi ve Doktorunu Çok Sevdi',
        caption:
          'Minik misafirimizin tedavi sonrası Dt. Yunus Emre Yüksel ile neşeli klinik hatırası.',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'patient-photo-2',
        type: 'image',
        url: '/assets/aistudio/556051556_18096657670679928_7592795033746476581_n_4bb8b1b5.jpg',
        title: 'Cesur Prenses Sertifikası ile Ağrısız Süt Dişi Çekimi',
        caption:
          '“Kızımın süt dişini ağrısız, acısız bir şekilde çekmiştir. Elinize sağlık, tavsiye edilir.” (@bkr.kara027)',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'patient-photo-3',
        type: 'image',
        url: '/assets/aistudio/570996038_18427167385109485_5940626763942011651_n_5329e63c.jpg',
        title: 'Rutin Kontrol & Hasta Memnuniyeti',
        caption:
          '“Tertemiz, çok şık bir mekan olmuş. Diş hekimimizi ziyarete geldik, gönül rahatlığı ile gelin.” (@nsozmilkmbrk)',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'patient-photo-4',
        type: 'image',
        url: '/assets/aistudio/567128712_18293382472259266_4410942501063129643_n_060d1eb4.jpg',
        title: 'Sevgiyle Yapılan Çocuk Diş Tedavisi',
        caption:
          '“İşini severek, aşkla yapanların yanındayız.” Minik hastalarımızla sabırlı ve şefkatli muayene süreci.',
        doctorLabel: 'Dt. Yunus Emre Yüksel',
      },
      {
        id: 'patient-photo-5',
        type: 'image',
        url: '/assets/aistudio/561214327_18161215759347019_7703559273442482434_n_989b25e4.jpg',
        title: 'Kliniğimizde Mutlu Anlar',
        caption:
          'Ailelerin ve çocukların kendilerini evlerinde hissettikleri ferah bekleme alanımızdan kare.',
        doctorLabel: '@dentalhouseelazig',
      },
    ],
  },
  {
    id: 'soru-cevap',
    label: 'Soru-Cevap',
    subtitle:
      'Diş sağlığı, tedaviler ve iyileşme süreçleri hakkında hastalarımızdan gelen sorular ve hekim yanıtlarımız.',
    inquiryTreatment: 'Genel Muayene & Danışma',
    ctaLabel: 'Kliniğe Soru Sor',
    items: [
      {
        id: 'qa-1',
        type: 'image',
        url: '/assets/aistudio/583185074_18377739382145760_2001737716250021586_n_71ce38cc.jpg',
        title: 'Dolgu ne kadar olur?',
        caption: 'Hastalarımızı muayene etmeden fiyat bilgisi veremiyoruz.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-2',
        type: 'image',
        url: '/assets/aistudio/554754535_18075363344320875_4074604580830510535_n_4456fb86.jpg',
        title: 'Dişin sararmasına sebep olan etmenler nelerdir?',
        caption: 'Düzenli bakım, çay-kahve-sigara ve asitli içeceklerin diş rengine etkisi.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-3',
        type: 'image',
        url: '/assets/aistudio/556890447_18095259694708563_2678289447127949069_n_2cd6f500.jpg',
        title: "20'lik diş çekimi sonrası diş eti şişmesi normal mi?",
        caption: 'Çekim sonrası iyileşme süreci ve karşı diş teması kaynaklı şişlikler.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-4',
        type: 'image',
        url: '/assets/aistudio/550362803_18077913779485822_7372120840142682673_n_ddd211f4.jpg',
        title: 'Diş hekimi korkumu yenmek için bir öneriniz var mı?',
        caption: '6 ayda bir düzenli kontrol ve tedavi öncesi hekim bilgilendirmesinin önemi.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-5',
        type: 'image',
        url: '/assets/aistudio/568791503_18142668484376379_6242059671450345427_n_ed85fa39.jpg',
        title: 'Diş ipi kullanmalı mıyız?',
        caption: 'Günde en az 1 kez fırçalama sonrası diş arası temizliği önerimiz.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-6',
        type: 'image',
        url: '/assets/aistudio/553369478_18054522926208635_3995754137853287995_n_4b45d2cd.jpg',
        title: 'Kanal tedavisi ne kadar sürer?',
        caption: 'Enfeksiyon durumuna göre tek seans veya çoklu seans planlaması.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-7',
        type: 'image',
        url: '/assets/aistudio/560978855_18077313554030326_1207451909159783579_n_bbda57cb.jpg',
        title: 'Geceleri dişlerimi sıkıyorum, ne yapabiliriz?',
        caption: 'Diş sıkma nedenlerinin tespiti ve gece plağı aparey tedavisi.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-8',
        type: 'image',
        url: '/assets/aistudio/564520124_18187624966328083_378033550564909059_n_72a9357e.jpg',
        title: 'Diş ucunun kırıklığı kaç seansta toparlanır?',
        caption: 'Kırığın boyutuna göre tek seansta veya birkaç seansta estetik onarım.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-9',
        type: 'image',
        url: '/assets/aistudio/554919146_18078319355100759_7977410545137572703_n_60def693.jpg',
        title: 'Dolguda kararma olmasının sebebi nedir?',
        caption: 'Kompozit dolguda sıvı emilimi, beslenme alışkanlıkları ve cila kalitesi.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-10',
        type: 'image',
        url: '/assets/aistudio/571927234_18328032733242568_435170579053021928_n_e44f7799.jpg',
        title: 'Hasta Mesajı · Tereddüt etmeden tercih ediyoruz',
        caption: 'Hastalarımızdan gelen teşekkür ve memnuniyet mesajı.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-11',
        type: 'image',
        url: '/assets/aistudio/561073807_18096358120732991_2826992616374035998_n_71f22be3.jpg',
        title: 'Damaktan diş eti grefti tekrarlanabilir mi?',
        caption: 'Farklı bir diş için doku yenilenmesi ve tekrar uygulanabilirlik.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-12',
        type: 'image',
        url: '/assets/aistudio/551709095_18072206327177504_8412293683928852339_n_90a2ef86.jpg',
        title: 'Diş kemiğinde erime röntgen ile anlaşılır mı?',
        caption: '2 boyutlu röntgen ve 3 boyutlu tomografi ile kemik kaybı değerlendirmesi.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-13',
        type: 'image',
        url: '/assets/aistudio/560544383_18094603162772662_1413528400836292472_n_b9af88e6.jpg',
        title: 'Hasta Mesajı · Sizlere çok teşekkür ederim',
        caption: 'Hastalarımızın memnuniyet ve teşekkür mesajı.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-14',
        type: 'image',
        url: '/assets/aistudio/565178168_18081183748826015_2806071046520907023_n_613ddec9.jpg',
        title: 'Kısa ön dişler nasıl uzatılabilir?',
        caption: 'Diş eti operasyonu, lamina porselen ve kompozit dolgu seçenekleri.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-15',
        type: 'image',
        url: '/assets/aistudio/554338543_18077055152095255_7420992753722506542_n_c4d4f92e.jpg',
        title: 'Hasta Mesajı · Hizmetleriniz için minnettarız',
        caption: 'Elazığ’daki hastalarımızdan gelen nazik teşekkür notu.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
      {
        id: 'qa-16',
        type: 'image',
        url: '/assets/aistudio/561909058_18080312069072138_6379150112144855372_n_7931f597.jpg',
        title: 'Başarısız ve taşmış kanal tedavisi düzeltilebilir mi?',
        caption: 'Kanal tedavisi tekrarı ve başarı oranını etkileyen klinik faktörler.',
        doctorLabel: 'Soru-Cevap',
        hideImageOverlay: true,
      },
    ],
  },
];

