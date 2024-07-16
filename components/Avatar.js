// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-non shadow-orange-700">
    <Image src={'/avatar_abdohero.png'} width={737} height={678} alt="" className="translate-z-0 w-full h-full " />
  </div>;
};

export default Avatar;
