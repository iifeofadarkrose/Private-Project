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
    <div className="flex mx-auto lg:max-w-[1024px]">
      <div className="m-8 mx-auto">
        <form className="flex max-w-[120px] md:max-w-[200px] lg:max-w-[350px]">
          <div>
            <h1 className="font-semibold md:font-light md:text-[24px] lg:text-[32px] "> {t("contact_us")}</h1>
            <p className="text-[6px] text-[#828282] md:text-[8px] lg:text-[10px]">
            {t("cont")}
            </p>
            <input
              className="my-[8px] h-[16px]  lg:text-[12px] lg:h-[50px] w-[120px] md:w-[200px] lg:w-[350px] text-[#828282] font-thin border-b  border-gray bg-inherit text-[8px]"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              type="email"
              placeholder="Email"
            />

            <input
              className="my-[8px] h-[16px] lg:h-[50px] lg:text-[12px]  w-[120px] md:w-[200px] lg:w-[350px] border-b border-gray bg-inherit text-[8px]"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              type="name"
              placeholder={t("name")}
            />

            <input
              className="my-[8px] h-[16px] lg:h-[50px] lg:text-[12px]  w-[120px] md:w-[200px] lg:w-[350px] border-b border-gray bg-inherit text-[8px]"
              value={formik.values.message}
              onChange={formik.handleChange}
              id="message"
              type="message"
              placeholder={t("message")}
            />
          </div>
        </form>
        <button
          className="w-[120px] rounded-[5px] md:w-[200px] md:h-[30px] bg-[#279CD5] font-medium text-[8px] text-white h-[20px] lg:w-[350px] lg:text-[18px]"
          type="submit"
        >
       {t("submit")}
        </button>
      </div>

      {/* Вставляем блок с информацией справа */}
      <div className="m-8 w-[150px] md:w-[200px] lg:w-[350px] bg-[#279CD5] rounded-md mx-auto">
        <h2 className="mt-[12px] ml-[12px] text-[10px] text-white md:text-[12px] lg:text-[24px]">
        {t("contInt")}
        </h2>
        <div className="gap-4 mt-2">
          <div className="flex items-center mb-1">
            <IoMdMail className="ml-[12px] fill-white p-1 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">
              info.ihtcompany@gmail.com
            </p>
          </div>
          <div className="flex items-center mb-1">
            <FaPhoneVolume className="ml-[12px] fill-white p-1 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">+33 749 143 577</p>
          </div>
          <div className="flex items-center mb-1">
            <HiMiniMapPin className="ml-[12px]  fill-white p-1 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] border rounded-md " />
            <p className="text-[6px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">
               France, Le Havre
            </p>
          </div>
          <div className="flex items-center mb-1">
            <FaRegClock className="ml-[12px]  fill-white p-1 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px]  border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white md:text-[10px] lg:text-[16px]">9:00-18:00</p>
          </div>
        </div>
        <h1 className="ml-[12px] mb-1 text-white text-[10px] md:text-[12px] lg:text-[16px]">{t("social")}</h1>
        <div className="flex gap-2 ml-[12px]">
          <CiFacebook className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
          <FaInstagram className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
          <FaWhatsapp className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] md:w-[26px] md:h-[26px] fill-white lg:w-[40px] lg:h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
