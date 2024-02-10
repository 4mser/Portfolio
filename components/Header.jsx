import Image from "next/image";

const Header = () => {
  return (
    <header className="p-4 fixed left-0 top-0 z-50 w-full backdrop-blur-sm">
      <Image src={"/amser.png"} width={100} height={50} alt="logo" />
    </header>
  );
};

export default Header;
