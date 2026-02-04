import { NavLink } from "react-router";
import logo from "../../assets/images/casaLogo2.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Join Us", to: "/join" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <header className="py-8 w-full">
      <div className="flex items-center justify-center gap-10">
        <img src={logo} alt="Logo" />

        <nav className="flex flex-col">
          <ul className="flex items-center gap-6 text-black font-medium">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.to} className="relative flex items-center gap-6">
                {index !== 0 && (
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-6 w-0.75 bg-black rounded-full blur-[0.6px]" />
                )}

                <NavLink
                  to={item.to}
                  className="relative px-2 cursor-pointer group"
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className="
          absolute -inset-1
          border border-black/40
          rounded-full
          pointer-events-none
          opacity-0 scale-95
          transition-all duration-200 ease-out
          group-hover:opacity-100
          group-hover:scale-100
        "
                      />
                      {isActive && (
                        <>
                          <span className="absolute -inset-2 border border-black/40 rounded-full pointer-events-none opacity-0 scale-95 animate-oval-rotate" />
                          <span className="absolute -inset-1.5 border-2 border-black rounded-full pointer-events-none opacity-0 scale-95 animate-oval-rotate delay-75" />
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-3 h-0.5 w-full bg-black" />
        </nav>
      </div>
    </header>
  );
}
