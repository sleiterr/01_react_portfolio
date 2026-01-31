import React, { useState } from "react";
import clsx from "clsx";
import BtnModal from "./Btnmodal.jsx";
import { loadGoogleAnalytics } from "../../utils/gtag.js";

const textModal = [
  {
    id: 1,
    text: " We use cookies for analytics purposes to improve this website.You can accept or reject analytics cookies.",
    textClass: "font-normal text-gray-700 text-base",
  },
];

export default function CookieModal() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("cookieConsent"),
  );

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-4 rounded shadow-lg fixed bottom-4 left-12 transform w-11/12 max-w-md z-50">
        <ModalItems />
        <div className="mt-4 flex justify-end space-x-4">
          <BtnModal onClick={acceptCookies}>Accept</BtnModal>
          <BtnModal
            className={clsx(
              "bg-gray-300 text-gray-700",
              "hover:bg-gray-400 focus:ring-gray-400 focus:ring-opacity-75 focus:ring-2",
            )}
            onClick={rejectCookies}
          >
            Reject
          </BtnModal>
        </div>
      </div>
    </div>
  );
}

const ModalItems = () => {
  return (
    <>
      {textModal.map((item) => (
        <p key={item.id} className={item.textClass}>
          {item.text}
          <a
            className="pl-2 text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
            href="https://policies.google.com/privacy?hl=en-EU"
          >
            Learn more
          </a>
        </p>
      ))}
    </>
  );
};

// space-x-4 for spacing between buttons
