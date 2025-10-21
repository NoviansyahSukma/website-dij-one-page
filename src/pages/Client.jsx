import Apartment from "../assets/image/apartment.jpg";
import Mall from "../assets/image/mall.jpg";
import Carousel from "../components/Carousel";
import { RiSeparator } from "react-icons/ri";
import UpToDwon from "../components/framer-motion/scroll/UpToDwon";

export default function Client() {
  return (
    <>
      <div className="w-full xl:w-4/5 2xl:w-5/6 mx-auto mt-8 px-4">
        <UpToDwon>
          <div className="w-full font-roboto text-center xl:px-8">
            <h2 className="text-purple-900 text-2xl lg:text-3xl tracking-wide font-black">
              OUR CLIENT
            </h2>

            <hr className="w-38 md:w-42 lg:w-48 xl:w-52 m-auto bg-purple-800 mt-1 md:mt-2 xl:mt-3" />
          </div>
        </UpToDwon>

        <div className="mt-7 grid grid-cols-1 gap-10 md:gap-14 xl:grid-cols-3">
          <UpToDwon delay={0.25}>
            <div
              className={`w-full transition-[opacity, transform] duration-2000 ease-in-out `}
            >
              <h2 className="font-roboto font-bold text-xl md:text-2xl text-center text-slate-700 tracking-wide">
                APARTMENT
              </h2>

              <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-2 shadow-xl">
                <img
                  src={Apartment}
                  alt="product-1"
                  className="w-full object-cover m-auto shadow-xl"
                />
              </div>

              <hr className="w-24 md:w-80 m-auto bg-slate-100 mt-12 md:mt-16 xl:hidden" />
            </div>
          </UpToDwon>

          <UpToDwon delay={0.5}>
            <div
              className={`w-full xl:mt-0 transition-[opacity, transform] duration-2000 ease-in-out`}
            >
              <h2 className="font-roboto font-bold text-xl md:text-2xl text-center text-slate-700 tracking-wide">
                MALL
              </h2>

              <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-2 shadow-xl">
                <img
                  src={Mall}
                  alt="product-1"
                  className="w-full object-cover m-auto shadow-xl"
                />
              </div>

              <hr className="w-24 md:w-80 m-auto bg-slate-100 mt-12 md:mt-16 xl:hidden" />
            </div>
          </UpToDwon>

          <UpToDwon delay={0.75}>
            <div
              className={`w-full transition-[opacity, transform] duration-2000 ease-in-out`}
            >
              <h2 className="font-roboto font-bold text-xl md:text-2xl text-center text-slate-700 tracking-wide">
                TENANT
              </h2>

              <div className="w-[90%] md:w-[75%] lg:w-[70%] xl:w-full 2xl:w-[95%] mx-auto mt-2 border-1 border-gray-300 shadow-xl">
                <Carousel />
              </div>
            </div>
          </UpToDwon>
        </div>
      </div>

      <div className="text-center text-8xl md:text-9xl mt-6 text-slate-500">
        <RiSeparator className="inline-block" />
      </div>
    </>
  );
}
