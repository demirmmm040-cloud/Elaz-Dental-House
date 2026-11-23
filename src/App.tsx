import {useState} from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ClinicHighlightsSection from './components/ClinicHighlightsSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import DoctorsSection from './components/DoctorsSection';
import ReviewsSection, {ReviewFilter} from './components/ReviewsSection';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleBookClick = () => {
    scrollToSection('iletisim');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('iletisim');
  };

  const handleBookWithDoctor = (doctorName: string, treatmentHint?: string) => {
    setSelectedDoctor(doctorName);
    if (treatmentHint) {
      setSelectedService(treatmentHint);
    }
    scrollToSection('iletisim');
  };

  const handleViewDoctorReviews = (doctorId: 'yunus' | 'kubilay' | 'ceyda') => {
    setReviewFilter(doctorId);
    scrollToSection('yorumlar');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFD] text-slate-900">
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1">
        <HeroSection onBookClick={handleBookClick} />

        <ServicesSection onSelectService={handleSelectService} />

        <ClinicHighlightsSection onAskAboutTreatment={handleSelectService} />

        <BeforeAfterGallery
          onBookWithDoctor={(doc, treatment) =>
            handleBookWithDoctor(doc, treatment)
          }
        />

        <DoctorsSection
          onSelectDoctor={(doc) => handleBookWithDoctor(doc)}
          onViewDoctorReviews={handleViewDoctorReviews}
        />

        <ReviewsSection
          activeFilter={reviewFilter}
          onFilterChange={setReviewFilter}
        />

        <AppointmentSection
          preselectedService={selectedService}
          preselectedDoctor={selectedDoctor}
        />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}
