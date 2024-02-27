import { footerProps } from "@/@types/general";
import React from "react";

function Footer({ darkMode = false, asDiv = false }: footerProps) {
  const variant = {};
  return (
    <>
      {asDiv ? (
        <div
          className={`${
            darkMode ? "text-gray-400" : "text-white text-sm bg-primary"
          } py-4 text-center w-full font-open-sans`}
        >
          &#169; {new Date().getFullYear()} Songster Capital LLC. - All rights
          reserved
        </div>
      ) : (
        <footer
          className={`${
            darkMode ? "text-gray-400" : "text-white text-sm bg-primary"
          } py-4 text-center w-full font-open-sans`}
        >
          &#169; {new Date().getFullYear()} Songster Capital LLC. - All rights
          reserved
        </footer>
      )}
    </>
  );
}

export default Footer;
