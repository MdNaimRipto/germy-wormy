import { Divider } from "@mui/material";
import Image from "next/image";
import caloLogo from "@/assets/my-target-logo.png";

const FooterLogo = () => {
  return (
    <div className="order-1 lg:order-3 flex flex-col items-center md:items-end gap-4">
      <div className="w-[60%] md:w-[30%] lg:w-[50%]">
        <Image src={caloLogo} alt="Play-Store" priority />
      </div>

      <h2 className="text-base font-semibold">Meal plans for busy people.</h2>
      <hr className="w-full text-[#ffffff33] md:hidden mt-6" />
    </div>
  );
};

export default FooterLogo;
