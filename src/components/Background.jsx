import hero from "../assets/hero_img.jpg";
import Logo from "./Logo";
import InputFields from "./InputFields";

function Background() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="bg-cover bg-center h-screen"
      >
        <div className="w-[100vw] h-[30vh] flex justify-center items-center ">
        <Logo/>
        </div>
        <div>
            <InputFields/>
        </div>
      </div>
    </>
  );
}

export default Background;
