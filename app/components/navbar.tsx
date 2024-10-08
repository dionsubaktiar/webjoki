import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-50 w-full flex justify-center items-center py-1 bg-gradient-to-r from-redCustom to-blueCustom font-libreBasker">
      <div
        className=" rounded-full 
          w-16 h-auto overflow-hidden"
      >
        <Image alt="logo" width={400} height={400} src="/logo.png"></Image>
      </div>
      <div className="px-5 text-xl font-bold md:text-3xl">Boosting by Rzz</div>
    </nav>
  );
};

export default Navbar;
