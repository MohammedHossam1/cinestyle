import logo from "../assets/logo.png";
import Image from "./shared/Image";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50">
      <div className="relative">
        <div className="animate-spin border-t-4 border-b-4 border-main-color rounded-full h-32 w-32"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Image src={logo} alt="cinsetyle" className="w-32 lg:w-48" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
