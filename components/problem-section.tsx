'use client';

import { useTranslations } from 'next-intl';

export const ProblemSection = () => {
  const t = useTranslations('ProblemSection');

  return (
    <section id="problem" className="py-16 bg-teal-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">{t('title')}</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4 text-teal-600">&#128694;</div>
            <h4 className="text-xl font-semibold mb-2">{t('immobilityTitle')}</h4>
            <p className="text-gray-600">{t('immobilityText')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4 text-teal-600">&#9888;&#65039;</div>
            <h4 className="text-xl font-semibold mb-2">
              {t('complexityTitle')}
            </h4>
            <p className="text-gray-600">{t('complexityText')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-4 text-teal-600">&#128337;</div>
            <h4 className="text-xl font-semibold mb-2">
              {t('inefficiencyTitle')}
            </h4>
            <p className="text-gray-600">{t('inefficiencyText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
