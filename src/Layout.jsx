import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Client from "./pages/Client.jsx";
import Subscribe from "./pages/Subscribe.jsx";
import Contact from "./pages/Contact.jsx";

export default function Layout() {
  const sectionIds = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
  ];
  const activeId = useScrollSpy(sectionIds, 120);

  return (
    <>
      <div className="relative">
        <div className="top-0 right-0 bottom-0 left-0 h-screen fixed bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat"></div>

        <div className="2xl:px-16">
          <Navbar activeId={activeId} />

          <Section id="section1" scrollMt="scroll-mt-24 lg:scroll-mt-30">
            <Home />
          </Section>

          <Section
            id="section2"
            scrollMt="scroll-mt-18 md:scroll-mt-26 lg:scroll-mt-34 xl:scroll-mt-26 2xl:scroll-mt-32"
          >
            <Product />
          </Section>

          <Section
            id="section3"
            scrollMt="scroll-mt-18 md:scroll-mt-26 lg:scroll-mt-34 xl:scroll-mt-28 2xl:scroll-mt-34"
          >
            <Client />
          </Section>

          <Section
            id="section4"
            scrollMt="scroll-mt-18 md:scroll-mt-26 lg:scroll-mt-34 xl:scroll-mt-24 2xl:scroll-mt-30"
          >
            <Subscribe />
          </Section>

          <Section id="section5" scrollMt="scroll-mt-18">
            <Contact />
          </Section>
        </div>

        <div className="relative font-roboto text-slate-700 text-center py-18">
          <h1 className="font-roboto inline-block text-purple-900 text-sm 2xl: text-center shadow-md px-4 py-2">
            Copyright @ 2025 DIJ.
          </h1>
        </div>
      </div>
    </>
  );
}
