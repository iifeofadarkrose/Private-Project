import { useFormik } from "formik";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  return (
    <div className="flex">
      <div className="m-8 w-[120px]">
        <form className="flex max-w-[120px]">
          <div>
            <h1 className="font-semibold">Contact Us</h1>
            <p className="text-[6px] text-[#828282]">
              Feel free to contact us any time. We will get back to you as soon
              as we can.
            </p>
            <input
              className="my-[8px] h-[16px] w-[120px] text-[#828282] font-thin border-b border-gray bg-inherit text-[8px]"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              type="email"
              placeholder="Email"
            />

            <input
              className="my-[8px] h-[16px] w-[120px] border-b border-gray bg-inherit text-[8px]"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              type="name"
              placeholder="Name"
            />

            <input
              className="my-[8px] h-[16px] w-[120px] border-b border-gray bg-inherit text-[8px]"
              value={formik.values.message}
              onChange={formik.handleChange}
              id="message"
              type="message"
              placeholder="Message"
            />
          </div>
        </form>
        <button
          className="w-[120px] rounded-[5px] bg-[#279CD5] font-medium text-[8px] text-white h-[20px]"
          type="submit"
        >
          Submit
        </button>
      </div>

      {/* Вставляем блок с информацией справа */}
      <div className="m-8 w-[185px] bg-[#279CD5] rounded-md">
        <h2 className="mt-[12px] ml-[12px] text-[10px] text-white">
          Contact information
        </h2>
        <div className="gap-4 mt-2">
          <div className="flex items-center mb-1">
            <IoMdMail className="ml-[12px] fill-white p-1 w-[18px] h-[18px] border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white">
              info.ihtcompany@gmail.com
            </p>
          </div>
          <div className="flex items-center mb-1">
            <FaPhoneVolume className="ml-[12px] fill-white p-1 w-[18px] h-[18px] border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white">+33 749 143 577</p>
          </div>
          <div className="flex items-center mb-1">
            <HiMiniMapPin className="ml-[12px]  fill-white p-1 w-[18px] h-[18px] border rounded-md " />
            <p className="text-[6px] ml-[5px] text-white">
              76610, France, Le Havre, 22 Rue De Saint Wandrille
            </p>
          </div>
          <div className="flex items-center mb-1">
            <FaRegClock className="ml-[12px]  fill-white p-1 w-[18px] h-[18px] border rounded-md " />
            <p className="text-[8px] ml-[5px] text-white">9:00-18:00</p>
          </div>
        </div>
        <h1 className="ml-[12px] mb-1 text-white text-[10px]">Socials</h1>
        <div className="flex gap-2 ml-[12px]">
          <CiFacebook className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] fill-white" />
          <FaInstagram className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] fill-white" />
          <FaWhatsapp className="border mb-1 p-1 border-white rounded-md w-[22px] h-[22px] fill-white" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
