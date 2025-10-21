import Product_1 from "../assets/image/product-1.jpg";
import Product_2 from "../assets/image/product-2.jpg";
import { RiSeparator } from "react-icons/ri";
import { motion as Motion } from "framer-motion";
import ScrollReveal from "../components/framer-motion/scroll/ScrollReveal";

export default function Product() {
  return (
    <>
      <div className="w-full mt-8 md:mt-6 grid grid-cols-1 gap-y-6 lg:gap-y-8 xl:px-12 2xl:px-26">
        <ScrollReveal delay={0} offset={600}>
          <div>
            <h2 className="text-purple-900 text-center text-2xl lg:text-3xl tracking-wide font-bold">
              PRODUCT
            </h2>

            <hr className="w-34 lg:w-42 m-auto bg-purple-800 mt-1" />
          </div>
        </ScrollReveal>

        <div className="w-full m-auto px-3 md:px-5 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4">
          <ScrollReveal delay={0.2} offset={625}>
            <div
              className={`font-roboto text-center xl:text-left xl:mt-7 2xl:mt-14 xl:px-8 transition-[opacity, transform] duration-2000 ease-in-out`}
            >
              <h2 className="tracking-wide text-slate-700 text-xl md:text-2xl font-medium">
                BROADBAND
              </h2>

              <hr
                className={`hidden xl:block w-24 bg-slate-100 xl:mt-1 transition-opacity duration-2000 ease-in-out`}
              />

              <p className="tracking-wide font-medium text-slate-900 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md md:mt-1 xl:mt-3 px-4 md:px-26 lg:px-38 xl:px-0">
                Servis ini direkomendasikan untuk rumah, kamar kos, apartemen,
                usaha bisnis kecil, atau kantor kecil yang tidak memiliki
                kebutuhan khusus untuk kecepatan internet yang cepat dan stabil.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} offset={650}>
            <div
              className={`w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] m-auto transition-[opacity, transform] duration-2000 ease-in-out`}
            >
              <img
                src={Product_1}
                alt="product-1"
                className="object-cover m-auto shadow-md 2xl:shadow-xl"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6} offset={675}>
          <hr
            className={`w-24 md:w-80 xl:w-96 m-auto 2xl:mt-6 bg-slate-100 transition-opacity duration-2000 ease-in-out`}
          />
        </ScrollReveal>

        <div className="w-full m-auto px-3 md:px-5 2xl:mt-6 grid grid-cols-1 xl:grid-cols-2 gap-y-3 md:gap-y-4">
          <div
            className={`xl:order-2 font-roboto text-center xl:text-right xl:mt-7 2xl:mt-14 xl:px-8 transition-[opacity, transform] duration-2000 ease-in-out`}
          >
            <ScrollReveal delay={0.8} offset={700}>
              <h2 className="tracking-wide text-slate-700 text-xl md:text-2xl font-medium">
                DEDICATED
              </h2>

              <hr
                className={`hidden xl:block w-24 float-right bg-slate-100 xl:mt-1 transition-opacity duration-2000 ease-in-out`}
              />

              <p className="tracking-wide font-medium text-slate-900 font-monserrat text-sm md:text-lg lg:text-xl xl:text-md md:mt-1 xl:mt-3 px-4 md:px-26 lg:px-38 xl:px-0">
                Servis internet dedicated biasanya digunakan oleh kantor bisnis,
                co-working space, atau gedung perusahaan karena kecepatan
                internet didedikasikan khusus untuk setiap pengguna sehingga
                kecepatan yang didapat sesuai dengan kecepatan yang ditentukan.
              </p>
            </ScrollReveal>
          </div>

          <div
            className={`xl:order-1 w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] m-auto transition-[opacity, transform] duration-2000 ease-in-out`}
          >
            <ScrollReveal delay={1} offset={725}>
              <img
                src={Product_2}
                alt="product-1"
                className="object-cover m-auto shadow-md 2xl:shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="text-center text-8xl md:text-9xl mt-6 2xl:mt-6 text-slate-500">
          <RiSeparator className="inline-block" />
        </div>
      </Motion.div>
    </>
  );
}
