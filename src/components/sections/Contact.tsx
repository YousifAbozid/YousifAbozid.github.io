import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/portfolio';
import { createEmailLink } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titleRef = useScrollAnimation({ delay: 200 });
  const formRef = useScrollAnimation({ delay: 400 });
  const infoRef = useScrollAnimation({ delay: 600 });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Handle error
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: createEmailLink('inquiry'),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: personalInfo.social.twitter,
      color: 'hover:text-blue-400',
    },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d p-12">
              <CheckCircle className="w-16 h-16 text-accent-success mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
                Thank you for reaching out. I&apos;ll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                  });
                }}
                className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Let&apos;s Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef} data-animate="slide-right">
              <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d p-8">
                <h3 className="text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'bg-l-bg-2 dark:bg-d-bg-2',
                        'text-l-text-1 dark:text-d-text-1',
                        'placeholder-l-text-3 dark:placeholder-d-text-3',
                        errors.name
                          ? 'border-accent-danger focus:border-accent-danger'
                          : 'border-border-l dark:border-border-d focus:border-primary'
                      )}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-accent-danger">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'bg-l-bg-2 dark:bg-d-bg-2',
                        'text-l-text-1 dark:text-d-text-1',
                        'placeholder-l-text-3 dark:placeholder-d-text-3',
                        errors.email
                          ? 'border-accent-danger focus:border-accent-danger'
                          : 'border-border-l dark:border-border-d focus:border-primary'
                      )}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-accent-danger">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border transition-colors',
                        'bg-l-bg-2 dark:bg-d-bg-2',
                        'text-l-text-1 dark:text-d-text-1',
                        'placeholder-l-text-3 dark:placeholder-d-text-3',
                        errors.subject
                          ? 'border-accent-danger focus:border-accent-danger'
                          : 'border-border-l dark:border-border-d focus:border-primary'
                      )}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-accent-danger">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border transition-colors resize-none',
                        'bg-l-bg-2 dark:bg-d-bg-2',
                        'text-l-text-1 dark:text-d-text-1',
                        'placeholder-l-text-3 dark:placeholder-d-text-3',
                        errors.message
                          ? 'border-accent-danger focus:border-accent-danger'
                          : 'border-border-l dark:border-border-d focus:border-primary'
                      )}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-accent-danger">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium transition-opacity flex items-center justify-center space-x-2 cursor-pointer',
                      isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:opacity-90'
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} data-animate="slide-left" className="space-y-8">
              {/* Contact Details */}
              <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d p-8">
                <h3 className="text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map(item => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-l-text-3 dark:text-d-text-3 mb-1">
                            {item.label}
                          </div>
                          {item.href.startsWith('mailto:') ||
                          item.href.startsWith('tel:') ? (
                            <a
                              href={item.href}
                              className="text-l-text-1 dark:text-d-text-1 hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-l-text-1 dark:text-d-text-1">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d p-8">
                <h3 className="text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-6">
                  Follow Me
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map(social => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'w-12 h-12 rounded-lg bg-l-bg-2 dark:bg-d-bg-2 flex items-center justify-center',
                          'text-l-text-2 dark:text-d-text-2 transition-colors',
                          'hover:bg-l-bg-3 dark:hover:bg-d-bg-3',
                          social.color
                        )}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d p-8">
                <h3 className="text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
                  Availability
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-accent-success rounded-full animate-pulse"></div>
                  <span className="text-accent-success font-medium">
                    Available for new projects
                  </span>
                </div>
                <p className="text-l-text-2 dark:text-d-text-2">
                  I&apos;m currently accepting new client work and exciting
                  opportunities. Let&apos;s discuss your project and see how I
                  can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
