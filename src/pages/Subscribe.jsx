import Card from "../components/SiteCard";
import { RiSeparator } from "react-icons/ri";
import logoBintaro from "../assets/image/logo-site/logo-bintaro.png";
import thumbBintaro from "../assets/image/logo-site/thumb-bintaro.jpg";
import logoCibubur from "../assets/image/logo-site/logo-cibubur.png";
import thumbCibubur from "../assets/image/logo-site/thumb-cibubur.jpg";
import logoJuanda from "../assets/image/logo-site/logo-juanda.png";
import thumbJuanda from "../assets/image/logo-site/thumb-juanda.jpg";
import logoSurabaya from "../assets/image/logo-site/logo-surabaya.png";
import thumbSurabaya from "../assets/image/logo-site/thumb-surabaya.jpg";
import UpToDwon from "../components/framer-motion/scroll/UpToDwon";

export default function Subscribe() {
  return (
    <>
      <div className="w-full mt-8 grid grid-cols-1 xl:px-12 2xl:px-26">
        <UpToDwon>
          <div className="w-full font-roboto text-center xl:px-8">
            <h2 className="text-purple-900 text-2xl lg:text-3xl tracking-wide font-black">
              SUBSCRIBE
            </h2>

            <hr className="w-38 lg:w-48 xl:w-52 m-auto bg-purple-800 mt-1 md:mt-2 xl:mt-3" />
          </div>
        </UpToDwon>

        <div className="w-full m-auto p-7 md:py-10 md:px-15 lg:px-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-2 md:gap-y-7 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-6">
          <UpToDwon delay={0}>
            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoBintaro}
                thumb={thumbBintaro}
                alt="thumb-bintaro"
                link="paket/bintaro"
              />
            </div>
          </UpToDwon>

          <UpToDwon delay={0.25}>
            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoCibubur}
                thumb={thumbCibubur}
                alt="thumb-bintaro"
                link="paket/cibubur"
              />
            </div>
          </UpToDwon>

          <UpToDwon delay={0.5}>
            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoJuanda}
                thumb={thumbJuanda}
                alt="thumb-bintaro"
                link="paket/juanda"
              />
            </div>
          </UpToDwon>

          <UpToDwon delay={0.75}>
            <div
              className={`transition-all duration-1000 transform ease-in-out`}
            >
              <Card
                logo={logoSurabaya}
                thumb={thumbSurabaya}
                alt="thumb-bintaro"
                link="paket/surabaya"
              />
            </div>
          </UpToDwon>
        </div>

        <UpToDwon>
          <button className="m-auto px-4 py-2 block border-1 border-slate-300 rounded-sm font-roboto">
            <a
              href="https://noviansyahsukma.github.io/page-subscribe/"
              target="blank"
            >
              <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">
                Berlangganan Disini!
              </h3>
            </a>
          </button>
        </UpToDwon>
      </div>

      <div className="text-center text-8xl md:text-9xl mt-6 md:mt-0 2xl:mt-3 text-slate-500">
        <RiSeparator className="inline-block" />
      </div>
    </>
  );
}
