import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  /* Active section highlight */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      // shadow toggle
      setScrolled(window.scrollY > 10);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={menuRef}
      className={`sticky top-0 z-50 backdrop-blur-md transition-shadow
        ${scrolled ? "shadow-md bg-white/90" : "bg-white/80 shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            🌿
          </div>
          <div>
            <p className="font-semibold text-lg">Mansi Sahai</p>
            <p className="text-sm text-gray-500">
              Dietitian & Lactation Consultant
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`transition ${
                  active === item.id
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-green-600 text-white
                     px-6 py-3 rounded-full font-medium
                     hover:scale-105 transition"
        >
          Book Consultation
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className={`bg-white shadow-lg px-8 py-6 space-y-6 transform transition-all duration-300
          ${open ? "translate-y-0" : "-translate-y-4"}`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                active === item.id
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-green-600 text-white
                       py-3 rounded-full font-medium"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
