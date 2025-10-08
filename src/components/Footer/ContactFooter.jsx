import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const contactData = [
  {
    id: 1,
    href: "mailto:sleite4r@gmail.com",
    text: "sleite4r@gmail.com",
    clasName: "footer-link font-light text-lg tracking-wide text-content",
    icon: <AiOutlineMail className="text-white w-6 h-6" />,
    className: "footer-item flex items-center gap-2",
  },
  {
    id: 2,
    href: "tel:+45 53 77 01 76",
    text: "+45 53 77 01 76",
    clasName: "footer-link font-light text-lg tracking-wide text-content",
    icon: <BsTelephone className="text-white w-6 h-6" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
];

export const ContactFooter = () => {
  return (
    <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-6">
      {contactData.map((item) => (
        <li key={item.id} className={item.className}>
          {item.icon}
          <a
            href={item.href}
            className="footer-link font-light text-lg tracking-wide text-content"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
