import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, RotateCcw } from 'lucide-react';
import { CONTACT_INFO, INQUIRY_CATEGORIES } from '../data/cresData';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { StaggerContainer, RevealItem, RevealBlock } from '../components/MotionPrimitives';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    category: INQUIRY_CATEGORIES[0],
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (form.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number format.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message = 'Please enter a brief message (at least 15 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      category: INQUIRY_CATEGORIES[0],
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white dark:bg-[#050B18] transition-colors duration-200">
      <PageHeader
        sectionLabel="Contact Us"
        title="Connect with CRES in Addis Ababa."
        subtitle="Reach our corporate management desk regarding vehicle owner onboarding, corporate mobility requirements, insurance cooperation, or strategic partnerships."
        heroVariant="contact"
        heroImageTitle="CRES Corporate Headquarters"
        heroImageLocation="Bole Commercial Corridor · Addis Ababa"
        highlights={[
          { value: 'Bole', label: 'Addis Ababa HQ' },
          { value: 'Mon–Sat', label: '08:30 – 17:30 EAT' },
          { value: '24/7', label: 'Monitoring Desk' },
        ]}
        primaryCta={{ label: 'Explore Owner Services', target: 'owner-services' }}
        secondaryCta={{ label: 'Read FAQs', target: 'faq' }}
        onNavigate={onNavigate}
      />

      <section className="overflow-hidden py-12 sm:py-20 bg-white dark:bg-[#050B18]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Corporate Contact Reference (Compact 2x2 Grid on Mobile) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <RevealBlock>
              <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-2">
                Addis Ababa Headquarters
              </p>
              <h2 className="font-display text-2xl font-bold text-[#09142A] dark:text-white mb-2.5">
                Corporate Contact Information
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                CRES operates from Addis Ababa’s central business corridor. Reach our corporate
                management desk directly by phone, email, or through the inquiry form.
              </p>
            </RevealBlock>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 pt-2">
              <RevealItem
                hoverLift
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 flex items-start gap-3 transition-colors"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#09142A] dark:text-white">
                    Office Location
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                    {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
                  </p>
                </div>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 flex items-start gap-3 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#09142A] dark:text-white">
                    Telephone
                  </h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="block text-xs sm:text-sm font-mono-tabular text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors mt-0.5 break-words"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 flex items-start gap-3 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#09142A] dark:text-white">
                    Corporate Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="block text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors mt-0.5 break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </RevealItem>

              <RevealItem
                hoverLift
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 flex items-start gap-3 transition-colors"
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#09142A] dark:text-white">
                    Office Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </RevealItem>
            </StaggerContainer>

            <RevealBlock delay={0.1}>
              <div className="p-5 rounded-xl bg-[#09142A] dark:bg-[#0B1528] border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300 block mb-1">Scope Notice</strong>
                This contact form handles general corporate, owner-onboarding, and partnership
                inquiries. It is not an online vehicle reservation or account registration portal.
              </div>
            </RevealBlock>
          </div>

          {/* Right: Functional Frontend Contact Form */}
          <RevealBlock delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B1528] p-5 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="py-10 text-center space-y-4"
                  >
                    <motion.div
                      initial={prefersReducedMotion ? false : { scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                      className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-[#09142A] dark:text-white">
                      Inquiry Prepared Successfully
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you,{' '}
                      <strong className="text-[#09142A] dark:text-white">{form.fullName}</strong>. Your{' '}
                      <strong className="text-[#09142A] dark:text-white">{form.category}</strong>{' '}
                      message has been validated and formatted for review by the CRES Addis Ababa
                      corporate desk.
                    </p>
                    <div className="pt-4">
                      <motion.button
                        type="button"
                        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold text-[#09142A] dark:text-white bg-white dark:bg-[#101E38] border border-slate-300 dark:border-slate-700 hover:border-slate-400 rounded-xl transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Inquiry</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4 sm:space-y-5"
                  >
                    <div>
                      <h2 className="font-display text-xl font-bold text-[#09142A] dark:text-white">
                        Send a Corporate Inquiry
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Select an inquiry category and complete the required fields below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="Abebe Bikila"
                          className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-org"
                          className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                        >
                          Organization (Optional)
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          value={form.organization}
                          onChange={(e) => setForm({ ...form, organization: e.target.value })}
                          placeholder="Company or Institution"
                          className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                        >
                          Phone Number (Optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+251 91 100 0000"
                          className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-category"
                        className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                      >
                        Inquiry Category *
                      </label>
                      <select
                        id="contact-category"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
                      >
                        {INQUIRY_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#09142A] dark:text-slate-200 mb-1.5"
                      >
                        Inquiry Details *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please share details regarding your vehicle, corporate mobility inquiry, or partnership proposal..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#101E38] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none resize-y"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      className="w-full sm:w-auto min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Corporate Inquiry
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
