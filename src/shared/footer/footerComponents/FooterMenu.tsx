import Link from "next/link";

const FooterMenu = () => {
  const menuData = [
    { title: "Home", link: "/" },
    { title: "Our meals", link: "/menu" },
    { title: "Plans & subscriptions", link: "/plansAndPackages" },
    { title: "Consultations", link: "/consultations" },
    // { title: "Partnerships", link: "/partnerships" },
    // { title: "Our community", link: "/our-community" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <div className="col-span-2 order-2 flex flex-col md:flex-row flex-wrap items-center justify-end lg:justify-center gap-6 py-8">
      {menuData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className="hover:text-primary font-medium"
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
