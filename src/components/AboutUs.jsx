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

  React.useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("selectedLanguage") || "en");
  }, [i18n]);

  return (
    <div className="mx-auto lg:w-[1000px] px-4 py-8">
      <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
        <div className="sm:w-2/3 sm:pr-8 w-[1/2]">
          <h2 className="text-2xl font-bold mb-4">{t("who_are_we")}</h2>
          <h3 className="text-xl font-semibold mb-4">{t("what_do_we_do")}</h3>
          <p className="mb-4">
            {t("our_story")}
          </p>
          <p className="mb-4">
            {t("our_philosophy")}
          </p>
        </div>
        <div className="sm:w-1/3">
          <img src="../../src/assets/place.png" alt="Image Description" className=" rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
