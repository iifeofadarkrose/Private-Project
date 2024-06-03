import { useFormik } from "formik";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import React from "react";

const ContactUs = () => {
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

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  return (
    <div className="flex flex-col md:flex-row mx-auto lg:max-w-[1024px]">
      <div className="m-8 mx-auto w-[340px] md:w-[300px] lg:w-[350px]">
        <form className="flex flex-col">
          <div>
            <h1 className="font-semibold md:font-light text-[32px] md:text-[24px] lg:text-[32px]">
              {t("contact_us")}
            </h1>
            <p className="text-[12px] text-[#828282] md:text-[8px] lg:text-[19px]">
              {t("cont")}
            </p>
            <input
              className="my-[8px] h-[44px] lg:text-[20px] lg:h-[50px] w-full text-[#828282] font-thin border-b border-gray bg-inherit text-[18px] md:text-[8px]"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              type="email"
              placeholder="Email"
            />

            <input
              className="my-[8px] h-[44px] lg:h-[50px] lg:text-[20px] w-full border-b border-gray bg-inherit text-[18px] md:text-[8px]"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              type="name"
              placeholder={t("name")}
            />

            <input
              className="my-[8px] h-[44px] lg:h-[50px] lg:text-[20px] w-full border-b border-gray bg-inherit text-[18px] md:text-[8px]"
              value={formik.values.message}
              onChange={formik.handleChange}
              id="message"
              type="message"
              placeholder={t("message")}
            />
          </div>
        </form>
        <button
          className="w-full rounded-[5px] h-[44px] md:h-[30px] bg-[#279CD5] font-medium text-[18px] md:text-[8px] text-white lg:text-[18px]"
          type="submit"
        >
          {t("submit")}
        </button>
      </div>

      {/* Contact information block */}

      <div className="m-8 w-[340px] md:w-[300px] lg:w-[350px] bg-[#279CD5] rounded-md mx-auto">
        <h2 className="mt-[12px] ml-[12px] text-[24px] text-white md:text-[12px] lg:text-[24px]">
          {t("contInt")}
        </h2>
        <div className="gap-4 mt-4">
          <div className="flex items-center mb-4 lg:mb-4">
            <IoMdMail className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md" />
            <p className="text-[18px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">
              info.ihtcompany@gmail.com
            </p>
          </div>
          <div className="flex items-center mb-4 lg:mb-4">
            <FaPhoneVolume className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md" />
            <p className="text-[18px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">+33 749 143 577</p>
          </div>
          <div className="flex items-center mb-4 lg:mb-4">
            <HiMiniMapPin className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md" />
            <p className="text-[18px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">
              France, Le Havre
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaRegClock className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md" />
            <p className="text-[18px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">9:00-18:00</p>
          </div>
        </div>
        <h1 className="ml-[12px] mb-1 text-white text-[24px] md:text-[12px] lg:text-[16px] my-6">{t("social")}</h1>
        <div className="flex gap-2 ml-[12px]">
          <CiFacebook className="border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
          <FaInstagram className="border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
          <FaWhatsapp className="border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
