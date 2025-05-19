import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {t(error)}
        </div>
      )}
      
      {submitted && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          {t('contact.form.success')}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
            placeholder={t('contact.form.phonePlaceholder')}
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
            {t('contact.form.service')}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
          >
            <option value="">{t('contact.form.selectService')}</option>
            <option value="Film Production">{t('contact.form.services.filmProduction')}</option>
            <option value="Commercial Videos">{t('contact.form.services.commercialVideos')}</option>
            <option value="Animation">{t('contact.form.services.animation')}</option>
            <option value="Photography">{t('contact.form.services.photography')}</option>
            <option value="Post-Production">{t('contact.form.services.postProduction')}</option>
            <option value="Sound Design">{t('contact.form.services.soundDesign')}</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white resize-none"
          placeholder={t('contact.form.messagePlaceholder')}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || submitted}
        className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin h-5 w-5 mr-2" />
            {t('contact.form.sending')}
          </>
        ) : submitted ? (
          t('contact.form.sent')
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            {t('contact.form.submit')}
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;