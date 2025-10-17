'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const SolutionSection = () => {
  const t = useTranslations('SolutionSection');
  const [activeTab, setActiveTab] = useState('advantage-1');

  const tabs = [
    { id: 'advantage-1', title: t('distanceImaging.title') },
    { id: 'advantage-2', title: t('wirelessMobility.title') },
    { id: 'advantage-3', title: t('enhancedSafety.title') },
    { id: 'advantage-4', title: t('marketPosition.title') },
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">{t('title')}</h3>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8 -mx-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-4 mx-2 mb-2 font-medium text-gray-600 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 transition-colors ${
                  activeTab === tab.id ? 'active' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div
              id="advantage-1"
              className={`advantage-content ${
                activeTab === 'advantage-1' ? 'active' : ''
              }`}
            >
              <h4 className="text-2xl font-semibold text-teal-700 mb-3">
                {t('distanceImaging.title')}
              </h4>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold text-gray-800">
                  {t('distanceImaging.difference')}
                </strong>
                {t('distanceImaging.differenceText')}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <strong className="font-semibold text-gray-800">
                  {t('distanceImaging.impact')}
                </strong>
                {t('distanceImaging.impactText')}
              </p>
            </div>
            <div
              id="advantage-2"
              className={`advantage-content ${
                activeTab === 'advantage-2' ? 'active' : ''
              }`}
            >
              <h4 className="text-2xl font-semibold text-teal-700 mb-3">
                {t('wirelessMobility.title')}
              </h4>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold text-gray-800">
                  {t('wirelessMobility.difference')}
                </strong>
                {t('wirelessMobility.differenceText')}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <strong className="font-semibold text-gray-800">
                  {t('wirelessMobility.impact')}
                </strong>
                {t('wirelessMobility.impactText')}
              </p>
            </div>
            <div
              id="advantage-3"
              className={`advantage-content ${
                activeTab === 'advantage-3' ? 'active' : ''
              }`}
            >
              <h4 className="text-2xl font-semibold text-teal-700 mb-3">
                {t('enhancedSafety.title')}
              </h4>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold text-gray-800">
                  {t('enhancedSafety.difference')}
                </strong>
                {t('enhancedSafety.differenceText')}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <strong className="font-semibold text-gray-800">
                  {t('enhancedSafety.impact')}
                </strong>
                {t('enhancedSafety.impactText')}
              </p>
            </div>
            <div
              id="advantage-4"
              className={`advantage-content ${
                activeTab === 'advantage-4' ? 'active' : ''
              }`}
            >
              <h4 className="text-2xl font-semibold text-teal-700 mb-3">
                {t('marketPosition.title')}
              </h4>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold text-gray-800">
                  {t('marketPosition.difference')}
                </strong>
                {t('marketPosition.differenceText')}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <strong className="font-semibold text-gray-800">
                  {t('marketPosition.impact')}
                </strong>
                {t('marketPosition.impactText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
