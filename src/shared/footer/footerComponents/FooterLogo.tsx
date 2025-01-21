import { Divider } from "@mui/material";
import Image from "next/image";
import caloLogo from "@/assets/logo.webp";

const FooterLogo = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="w-[60%] md:w-[30%] lg:w-[50%]">
        <Image src={caloLogo} alt="Play-Store" priority />
      </div>

      <h2 className="text-base font-semibold titleFont">
        Spreading like germs, wiggling to the moon!
      </h2>
      <hr className="w-full text-[#ffffff33] md:hidden mt-6" />
    </div>
  );
};

export default FooterLogo;
