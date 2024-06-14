import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const BestSeller = ({ onMoreInfoClick }) => {
  const { t, i18n } = useTranslation('translation', {
    defaultNS: 'translation',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
  });

  React.useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('selectedLanguage') || 'fr');
  }, [i18n]);

  return (
    <div className='p-4'>

    
    <div className="p-4 border rounded-lg shadow-sm bg-white mx-auto my-8 container max-w-[620px] lg:max-w-[980px] md:max-w-[750px] hover:border-[1px] hover:border-[#409EFF] cursor-pointer">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-2/3 md:w-2/3 mb-4 sm:mb-0">
          <img 
            src="https://i.imgur.com/0oHPPdR.png" 
            alt="Product" 
            className="h-auto rounded border-1 bg-[#279CD533]"
          />
        </div>
        <div className="w-full sm:w-2/3 pl-0 sm:pl-4">
          <p className="text-[#279CD5] text-xl md:text-2xl font-semibold mb-1">{t('best_seller.name')}</p>
          <h2 className="text-xl md:text-2xl text-[#486284] font-bold mb-2">{t('flatHeatingElements.name')}</h2>
          <p className="text-gray-700 mb-4 text-[12px] md:text-[18px] max-w-[550px]">
            {t('Best.description')}
          </p>
          <button 
            className="px-2 py-1 md:px-4 md:py-2 text-[16px] bg-white border-2 text-[#279CD5] border-[#279CD5] rounded-full hover:bg-slate-200"
            onClick={onMoreInfoClick}
          >
            {t('more_info.name')}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

BestSeller.propTypes = {
  onMoreInfoClick: PropTypes.func.isRequired,
};

export default BestSeller;
