import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import seans from "../assets/Transfer.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import RU from "../assets/RU.svg";  
import EN from "../assets/EN.png";  
import UZ from "../assets/UZ.svg";   
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Ру");

  const languages = [
    { code: "ru", label: "Ру", flag: RU },
    { code: "en", label: "Ан", flag: EN },
    { code: "uz", label: "Уз", flag: UZ },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language.label);
    setIsOpen(false);
  };

  const Token = localStorage.getItem("Token");

  return (
    <div className="px-[90px] flex justify-between mb-3 items-center relative">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="flex">
        <button className="hover:bg-main-language0">
          <img src={afisha} alt="Afisha" />
        </button>
        <button className="hover:bg-main-language0">
          <img src={seans} alt="Seans" />
        </button>
        <button className="hover:bg-main-language0">
          <img src={bileti} alt="Bileti" />
        </button>
        <button className="hover:bg-main-language0">
          <img src={search} alt="Search" />
        </button>
      </div>
      <div className="flex gap-[20px] relative">
        <div
          className="flex items-center w-[92px] h-[48px] bg-main-language hover:bg-main-language0 rounded-[12px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src={languages.find((l) => l.label === selectedLanguage).flag}
            className="w-[22px] h-[22px] ml-3 mr-[1.5px] rounded-full"
            alt="language-flag"
          />
          <span className="text-main-white ml-1 mr-4 hover:text-main-language1 font-medium text-[14px] leading-[16px] tracking-[0.01em]">
            {selectedLanguage}
          </span>
          <img className="w-3 h-2" src="../../public/vector-language.png" alt="vector-language.png" />
        </div>

        {isOpen && (
          <ul
            className="absolute top-[52px] w-[92px] bg-main-language rounded-[12px] shadow-lg z-20"
            style={{ zIndex: 10 }}
          >
            {languages.map((language) => (
              <li
                key={language.code}
                className="w-full h-[48px] flex items-center justify-center text-main-white cursor-pointer hover:text-main-language1"
                onClick={() => handleSelectLanguage(language)}
              >
                {language.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to={Token ? '/profile' : '/login'}>
        <button className="bg-[#C61F1F] px-[67px] py-[18px] rounded-[12px]">
          {Token ? "профиль" : "Войти"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
