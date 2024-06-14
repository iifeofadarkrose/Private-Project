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
    <div id="contact" className="flex flex-col justify-between md:flex-row mx-auto lg:w-[960px]">
      <div className="m-12 mx-auto w-[340px] md:w-[300px] lg:w-[460px]">
        <form className="flex flex-col">
          <div className="my-4">
            <h1 className="font-semibold md:font-light text-[30px] md:text-[26px] lg:text-[32px] mb-2">
              {t("contact_us")}
            </h1>
            <p className="text-[14px] text-[#828282] md:text-[16px] lg:text-[22px] mb-4">
              {t("cont")}
            </p>
            <input
              className="my-[8px] h-[44px] lg:text-[18px] lg:h-[50px] w-full text-[#828282] font-thin border-b border-[#828282] bg-inherit text-[18px] md:text-[16px] focus:border-[#279CD5] p-1"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              type="email"
              placeholder="Email"
            />

            <input
              className="my-[8px] h-[44px] lg:h-[50px] lg:text-[18px] w-full border-b border-[#828282] bg-inherit text-[18px] md:text-[16px] focus:border-[#279CD5] p-1"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              type="name"
              placeholder={t("name")}
            />

            <input
              className="my-[8px] h-[44px] lg:h-[50px] lg:text-[18px] w-full border-b border-[#828282] bg-inherit text-[18px] md:text-[16px] focus:border-[#279CD5] p-1"
              value={formik.values.message}
              onChange={formik.handleChange}
              id="message"
              type="message"
              placeholder={t("message")}
            />
          </div>
        </form>
        <button
          className="w-full rounded-[5px] p-1 lg:h-[44px] md:h-[40px] bg-[#279CD5] font-medium text-[18px] md:text-[16px] text-white lg:text-[22px] hover:border-black border-[1px] hover:text-gray-200"
          type="submit"
        >
          {t("submit")}
        </button>
      </div>

      {/* Contact information block */}

      <div className="m-[44px] w-[340px] md:w-[360px] lg:w-[460px] bg-[#279CD5] rounded-md mx-auto p-4">
        <h2 className="mt-[12px] ml-[12px] text-[24px] text-white md:text-[20px] lg:text-[24px]">
          {t("contInt")}
        </h2>
        <div className="gap-4 mt-4">
          <div className="flex items-center mb-4 lg:mb-4">
            <IoMdMail className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] border rounded-md" />
            <p className="text-[18px] ml-[10px] text-white md:text-[14px] lg:text-[18px]">
            <span
                className="hover:text-gray-300 cursor-pointer"
                onClick={() => (window.location.href = "mailto:info.ihtcompany@gmail.com")}
              >
                info.ihtcompany@gmail.com
              </span>
            </p>
          </div>
          <div className="flex items-center mb-4 lg:mb-4">
            <FaPhoneVolume className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] border rounded-md" />
            <p className="text-[18px] ml-[10px] text-white md:text-[14px] lg:text-[18px]">
            <span
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => (window.location.href = "tel:+33749143577")}
            >
              +33 749 143 577
            </span>
            </p>
          </div>
          <div className="flex items-center mb-4 lg:mb-4">
            <HiMiniMapPin className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] border rounded-md" />
            <p className="text-[18px] ml-[10px] text-white md:text-[14px] lg:text-[18px]">
              France, Le Havre
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaRegClock className="ml-[12px] fill-white p-1 w-[44px] h-[44px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] border rounded-md" />
            <p className="text-[18px] ml-[10px] text-white md:text-[14px] lg:text-[18px]">
              9:00-18:00
            </p>
          </div>
        </div>
        <h1 className="ml-[12px] text-white text-[24px] md:text-[12px] lg:text-[18px] my-2">
          {t("social")}
        </h1>
        <div className="flex gap-2 ml-[12px]">
          <CiFacebook className="cursor-pointer border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[32px] md:h-[32px] fill-white lg:w-[44px] lg:h-[44px]" />
          <FaInstagram className="cursor-pointer border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[32px] md:h-[32px] fill-white lg:w-[44px] lg:h-[44px]" />
          <FaWhatsapp className="cursor-pointer border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[32px] md:h-[32px] fill-white lg:w-[44px] lg:h-[44px]" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
