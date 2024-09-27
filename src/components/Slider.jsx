import panda from "../assets/panda.png";
import kungfu_panda from "../assets/kungfu-panda.png";
import kungfu_panda1 from "../assets/kungfu-panda1.png";
import kungfu_panda2 from "../assets/kungfu-panda2.png";
import king_kong from "../assets/king-kong.png";
import king_kong1 from "../assets/king-kong1.png";
import king_kong2 from "../assets/king-kong2.png";
import godzilla from "../assets/godzilla.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderPage() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  return (
    <div>
      <div className="absolute">
        <img
          src={panda}
          alt="Rectangle-64.png"
          className="w-full rounded-[12px]"
        />
        <div className="w-7/12 h-1/12 relative bottom-[187px] mx-auto backdrop-blur-none p-6 rounded-lg text-center">
          <h3 className="font-aeonik font-medium text-[32px] text-main-white leading-[40px] tracking-[0.01em]">
            Kung Fu Panda 4
          </h3>
          <div className="w-[40%] movie-info flex text-main-white mx-auto font-normal text-[14px] leading-[16.1px] tracking-[0.01em] mt-4 mb-4">
            <h1 className="ml-7">2024</h1>
            <p className="mr-1 ml-1">•</p>
            <p>Комедия</p>
            <p className="mr-1 ml-1">•</p>
            <p className="mr-1 ml-1">1ch 34m</p>
            <p className="mr-1 ml-1">•</p>
            <p>EN</p>
            <p className="mr-1 ml-1">•</p>
            <p>6+</p>
          </div>
        </div>
      </div>
      <div className="w-[450px] h-[64px] mx-auto rounded-[12px] mb-[445px]">
        <Slider
          {...settings}
          className="multiple-items w-full mr-[-100px] h-[64px] text-red-600"
        >
          <div>
            <img
              src={panda}
              alt="panda.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={kungfu_panda}
              alt="kungfu_panda.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={kungfu_panda1}
              alt="kungfu_panda1.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={kungfu_panda2}
              alt="kungfu-panda2.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={king_kong}
              alt="king_kong.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={king_kong1}
              alt="king_kong1.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={king_kong2}
              alt="king_kong2.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src={godzilla}
              alt="godzilla.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;
