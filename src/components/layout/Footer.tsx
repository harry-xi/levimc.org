import clsx from "clsx";

import LogoMarkerDark from "@/assets/brand/logo-marker-dark.svg";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="flex flex-row items-center gap-2 border-gray-600/50">
        <LogoMarkerDark className="h-12 cursor-pointer" alt="LeviMC" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm text-right">
          © {new Date().getFullYear()} The LeviMC Team
          <br />
          NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH
          MOJANG.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
