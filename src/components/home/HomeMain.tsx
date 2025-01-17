import Buy from "./Buy";
import FAQ from "./FAQ";
import Join from "./Join";

const HomeMain = () => {
  return (
    <>
      <h2>Home</h2>

      <div className="bg-white h-[1000px] py-20"></div>
      <Buy />
      <FAQ />
      <Join />
    </>
  );
};

export default HomeMain;
