import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex">
      <Image src={"/amser.png"} width={160} height={50} alt="logo" />
    </div>
  );
};

export default Header;
