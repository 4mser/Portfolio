import Image from "next/image";
import ButtonMenu from "./movil/ButtonMenu";

const Header = () => {
  return (
    <header className="p-4 fixed left-0 top-0 z-50 w-full  flex justify-between items-center">
      <Image src={"/amser.png"} width={100} height={50} alt="logo" />
      <ButtonMenu />
    </header>
  );
};

export default Header;
