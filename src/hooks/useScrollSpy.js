import { useEffect, useState } from "react";

export default function useScrollSpy(ids = [], offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          // Sekarang section akan dianggap aktif saat top-nya melewati scrollPosition
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      // Jika sudah scroll ke paling bawah dan belum match
      if (
        !current &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      ) {
        current = ids[ids.length - 1];
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
