import Link from "next/link";

const FooterMenu = () => {
  const menuData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "",
    },
    {
      title: "Tokenomics",
      link: "",
    },
    {
      title: "How to Buy",
      link: "",
    },
    {
      title: "FAQ",
      link: "",
    },
    {
      title: "Connect",
      link: "",
    },
  ];
  return (
    <div className="col-span-2 flex flex-col md:flex-row flex-wrap justify-center gap-6 py-8 px-4 md:px-0">
      {menuData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className="hover:text-primary font-semibold titleFont"
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
