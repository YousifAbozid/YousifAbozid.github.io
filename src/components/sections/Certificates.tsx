import { Award, ExternalLink, ImageIcon, X } from 'lucide-react';
import { useState } from 'react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { education } from '../../data/portfolio';
import { cn } from '../../lib/utils';

// Extract all certificates from education data
const getAllCertificates = () => {
  const certificates: Array<{
    title: string;
    description?: string;
    badgeColor?: string;
    imageUrl?: string;
    institution: string;
    year: string;
    degree: string;
  }> = [];

  education.forEach(edu => {
    if (edu.certificates) {
      edu.certificates.forEach(cert => {
        certificates.push({
          ...cert,
          institution: edu.institution,
          year: new Date(edu.endDate || edu.startDate).getFullYear().toString(),
          degree: edu.degree,
        });
      });
    }
  });

  return certificates;
};

export default function Certificates() {
  const titleRef = useScrollAnimation({ delay: 200 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useStaggeredAnimation('[data-certificate-item]', 150);

  const certificates = getAllCertificates();

  const getBadgeColor = (color?: string) => {
    switch (color) {
      case 'gold':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-500/25';
      case 'green':
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg shadow-green-500/25';
      case 'blue':
        return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/25';
      case 'purple':
        return 'bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-500/25';
      case 'primary':
      default:
        return 'bg-gradient-primary text-white shadow-lg shadow-primary/25';
    }
  };

  const getStats = () => {
    const totalCerts = certificates.length;
    const institutions = new Set(certificates.map(c => c.institution)).size;
    const goldCerts = certificates.filter(c => c.badgeColor === 'gold').length;
    const years = new Set(certificates.map(c => c.year)).size;

    return { totalCerts, institutions, goldCerts, years };
  };

  const stats = getStats();

  return (
    <section id="certificates" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Certificates & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-3xl mx-auto">
              A comprehensive collection of certificates, badges, and
              achievements earned throughout my educational journey.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {stats.totalCerts}
              </div>
              <div className="text-sm text-l-text-2 dark:text-d-text-2">
                Total Certificates
              </div>
            </div>
            <div className="text-center p-4 bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {stats.institutions}
              </div>
              <div className="text-sm text-l-text-2 dark:text-d-text-2">
                Institutions
              </div>
            </div>
            <div className="text-center p-4 bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {stats.goldCerts}
              </div>
              <div className="text-sm text-l-text-2 dark:text-d-text-2">
                Gold Achievements
              </div>
            </div>
            <div className="text-center p-4 bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {stats.years}
              </div>
              <div className="text-sm text-l-text-2 dark:text-d-text-2">
                Years Active
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={`${certificate.institution}-${certificate.title}-${index}`}
                data-certificate-item
                className="group bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d overflow-hidden hover:shadow-xl transition-all duration-300 hover:shadow-primary/10"
              >
                {/* Certificate Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-l-bg-3 to-l-bg-2 dark:from-d-bg-3 dark:to-d-bg-2 flex items-center justify-center border-b border-border-l dark:border-border-d">
                  {certificate.imageUrl ? (
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setSelectedImage(certificate.imageUrl!)}
                    />
                  ) : (
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-l-text-3 dark:text-d-text-3 mx-auto mb-2" />
                      <p className="text-sm text-l-text-3 dark:text-d-text-3">
                        Certificate Image
                      </p>
                      <p className="text-xs text-l-text-3 dark:text-d-text-3 mt-1">
                        Click to view when available
                      </p>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={cn(
                        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                        getBadgeColor(certificate.badgeColor)
                      )}
                    >
                      <Award className="w-3 h-3 mr-1" />
                      {certificate.badgeColor === 'gold'
                        ? 'Excellence'
                        : certificate.badgeColor === 'green'
                          ? 'Completion'
                          : certificate.badgeColor === 'blue'
                            ? 'Program'
                            : certificate.badgeColor === 'purple'
                              ? 'Specialty'
                              : 'Certified'}
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-2 line-clamp-2">
                    {certificate.title}
                  </h3>

                  <div className="flex items-center text-primary text-sm font-medium mb-2">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {certificate.institution}
                  </div>

                  <div className="text-l-text-3 dark:text-d-text-3 text-sm mb-3">
                    {certificate.degree} • {certificate.year}
                  </div>

                  {certificate.description && (
                    <p className="text-l-text-2 dark:text-d-text-2 text-sm leading-relaxed">
                      {certificate.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full max-w-5xl max-h-[95vh] flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 rounded-full p-2 shadow-lg hover:bg-l-bg-2 dark:hover:bg-d-bg-2 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                  style={{ minHeight: '200px', minWidth: '300px' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
