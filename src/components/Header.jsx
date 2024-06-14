import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/Logo.png";
import PropTypes from "prop-types";

const Header = ({ selectedCategory }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "fr";
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    scroll.scrollToTop();
    selectedCategory(null);
  };

  

  return (
    <div className="mx-auto lg:max-w-screen-lg px-4 lg:px-0">
      <div className="flex mx-auto justify-between items-center my-8 lg:mx-8">
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="text-[20px] md:text-2xl lg:text-xl lg:mr-8 hover:color-[#279CD5]"
          onClick={handleLogoClick}
        >
          <img className="w-[164px] h-[95px]" src={logo} alt="Logo" />
        </Link>

        <div className="hidden md:flex gap-8 md:text-[16px] lg:text-xl uppercase">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="block hover:text-[#279CD5]"
          >
            {t("home")}
          </Link>
          <ScrollLink
            to="work"
            smooth={true}
            duration={1000}
            className="hover:text-[#279CD5] cursor-pointer"
          >
            {t("our_work")}
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            className="block cursor-pointer hover:text-[#279CD5]"
          >
            {t("about_us")}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            className="block cursor-pointer hover:text-[#279CD5]"
          >
            {t("contact_us")}
          </ScrollLink>
        </div>

        <div className="flex md:flex gap-4 items-center">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-2 py-2 hover:bg-[#279CD5] hover:text-white text-[#279CD5] border-2 border-[#279CD5] rounded-2xl focus:outline-none focus:bg-gray-300 flex items-center"
            >
              {selectedLanguage.toUpperCase()}
              <svg
                className="w-4 h-4 ml-2 mt-1 md:mt-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-[60px] text-[#279CD5] border-2 border-[#279CD5] rounded-2xl shadow-lg z-10">
                <button
                  onClick={() => selectLanguage("en")}
                  className="block w-full py-2 text-[#279CD5] text-center focus:outline-none"
                >
                  En
                </button>
                <button
                  onClick={() => selectLanguage("fr")}
                  className="block w-full py-2 text-center text-[#279CD5] focus:outline-none"
                >
                  Fr
                </button>
              </div>
            )}
          </div>

          <IoMenu
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer md:hidden"
          />

          {isMenuOpen && (
            <div className="absolute bg-white py-2 px-4 border border-solid border-gray-300 shadow-md rounded-lg z-50 mt-44 right-8">
              <Link to="/" className="block" onClick={toggleMenu}>
                {t("home")}
              </Link>
              <Link
                to="/projects"
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("our_work")}
              </Link>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("about_us")}
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block cursor-pointer"
                onClick={toggleMenu}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("contact_us")}
              </ScrollLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  selectedCategory: PropTypes.func,
};

export default Header;
