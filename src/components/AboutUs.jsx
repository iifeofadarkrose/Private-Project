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
    <section id="about" className="mx-auto bg-[#EDEFF4] py-16 lg:py-24 max-w-[1000px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="px-6">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#279CD5]">{t("who_are_we")}</h2>
            <h3 className="text-xl lg:text-3xl font-semibold mb-6 text-[#486284]">{t("what_do_we_do")}</h3>
            <div className="max-w-[90%]">
              <p className="mb-4 lg:text-[18px]">{t("our_story")}</p>
              <p className="mb-4 lg:text-[18px]">{t("our_philosophy")}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/YI3aNSC.png"
              alt="Image Description"
              className="w-full lg:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
