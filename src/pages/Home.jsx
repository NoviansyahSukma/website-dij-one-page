import Jumbotron from "../assets/image/jumbotron.png";
import Thumb_1 from "../assets/image/dij_plus1.png";
import Thumb_2 from "../assets/image/dij_plus2.png";
import Thumb_3 from "../assets/image/dij_plus3.png";
import { RiSeparator } from "react-icons/ri";
import { motion as Motion } from "framer-motion";
import SlideDown from "../components/framer-motion/SlideDown";

export default function Home() {
  return (
    <>
      <div className="xl:grid xl:grid-cols-2 xl:gap-4 px-2 md:px-8 mt-16 md:mt-24 lg:mt-30 xl:mt-24 2xl:mt-32">
        <Motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`order-2 h-64 md:h-80 lg:h-120 xl:h-74 2xl:h-90 overflow-hidden md:px-2`}
        >
          <img
            src={Jumbotron}
            alt="jumbotron-dij"
            className="h-95 md:h-140 lg:h-216 xl:h-130 2xl:h-160 object-cover m-auto shadow-md -mt-12 md:-mt-20 lg:-mt-32 xl:-mt-18 2xl:-mt-24"
          />
        </Motion.div>

        <div
          className={`order-1 font-roboto text-center xl:text-left text-purple-900 mt-5 md:mt-7 xl:mt-3 2xl:mt-14 xl:px-5 2xl:px-14 transition-[opacity, transform] duration-2000 ease-in-out`}
        >
          <SlideDown delay={0.2} distance={30}>
            <h1 className="text-2xl lg:text-3xl tracking-wide font-bold">
              FASTEST CONNECTION
            </h1>

            <hr className="max-w-70 lg:max-w-88 xl:max-w-78 2xl:max-w-78 m-auto mt-1 xl:ml-0 xl:mt-1 2xl:mt-2 bg-purple-900" />
          </SlideDown>

          <SlideDown delay={0.4} distance={20}>
            <p className="font-monserrat font-medium tracking-wide text-sm md:text-lg lg:text-lg xl:text-md text-slate-800 mt-4 md:mt-4 lg:mt-5 xl:mt-3 px-2 lg:px-7 xl:pl-0">
              Pada awal sejarah industri komunikasi Indonesia, Detik Ini
              Juga(DIJ) telah menjadi salah satu Penyedia layanan internet yang
              muncul dengan kuat dari fokusnya dalam bisnis, komitmen dalam
              layanan dan inovasi produk tanpa akhir. DIJ adalah perusahaan ICT
              yang menyediakan Layanan Internet baik untuk perumahan / small
              business maupun perusahaan.
            </p>
          </SlideDown>
        </div>
      </div>

      <div
        className={`text-purple-900 text-center w-full xl:w-4/5 2xl:w-3/5 m-auto tracking-wide grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-10 md:mt-7 lg:mt-10 xl:mt-7 md:px-8 xl:px-14`}
      >
        <SlideDown delay={0.6} distance={30}>
          <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
            <img src={Thumb_1} alt="Thumb-1" className="-mt-5" />
            <h3 className="font-semibold -mt-5 lg:text-xl">FASTER</h3>
          </div>
        </SlideDown>

        <SlideDown delay={0.8} distance={30}>
          <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
            <img src={Thumb_2} alt="Thumb-2" className="-mt-5" />
            <h3 className="font-semibold -mt-5 lg:text-xl">RELIABLE</h3>
          </div>
        </SlideDown>

        <SlideDown delay={1} distance={30}>
          <div className="w-48 md:w-54 lg:w-74 xl:w-64 2xl:w-68 m-auto shadow-sm pb-3 lg:pb-5">
            <img src={Thumb_3} alt="Thumb-3" className="-mt-5" />
            <h3 className="font-semibold -mt-5 lg:text-xl">STABLE</h3>
          </div>
        </SlideDown>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-8xl md:text-9xl mt-6 md:mt-0 2xl:mt-3 text-slate-500"
      >
        <RiSeparator className="inline-block" />
      </Motion.div>
    </>
  );
}
