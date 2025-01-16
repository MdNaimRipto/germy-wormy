import HomeMain from "@/components/home/HomeMain";
import MainLayout from "@/layouts/MainLayout";
import { ReactElement } from "react";

export default function Home() {
  return <HomeMain />;
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
