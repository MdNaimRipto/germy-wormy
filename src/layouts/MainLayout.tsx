// import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  const { Router } = UseCommonImports();

  const isHomePage = Router.pathname === "/";
  return (
    <div>
      <Navbar />
      <main className="min-h-screen z-20 bg-white pb-16 rounded-[8.20513px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
