import React from "react";
import { useTranslation } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const AboutUs = () => {
  const { t, i18n } = useTranslation("translation", {
    defaultNS: "translation",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
  });

  // Этот useEffect будет обновлять язык в компоненте AboutUs,
  // когда выбранный язык меняется в Header.
  React.useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("selectedLanguage") || "en");
  }, [i18n]);

  return (
    <div className="mx-8 my-8 md:flex justify-center md:max-w-[730px] md:mx-[10%] lg:mx-[18%]">
      <div className="flex md:w-[40%]">
        <section className="w-[2px] md:w-[3px] bg-[#279CD5] h-[44px] color-[#279CD5] border-left border-[1px] border-[#279CD5] ml-[-30px]"></section>
        <h1 className="ml-4 md:text-normal">
          {t("who_are_we")} <br /> {t("what_do_we_do")}
        </h1>
      </div>

      <div className="md:ml-10">
        <h2 className="text-[10px] lg:text-[14px] mt-[12px] md:mt-0 font-light max-w-[400px] md:text-[12px] md:max-w-[500px] lg:max-w-full">
          {t("our_story")}
        </h2>
        <h2 className="text-[10px] lg:text-[14px] mt-[12px] font-light max-w-[400px] md:text-[12px] md:max-w-[500px] lg:max-w-[600px]">
          {t("our_philosophy")}
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
