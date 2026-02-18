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
    <header className="w-full py-6 md:py-10 lg:py-14">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 px-6 lg:px-16">
        <img
          src={logo}
          alt="Logo"
          className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 transition-all duration-300"
        />

        <nav className="flex flex-col w-full md:w-auto">
          <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-4 text-black font-medium text-sm md:text-base lg:text-lg">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.to} className="relative flex items-center gap-6">
                {index !== 0 && (
                  <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-black rounded-full" />
                )}

                <NavLink
                  to={item.to}
                  className="relative px-3 cursor-pointer group"
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      <span
                        className="
                      absolute -inset-2
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
                          <span className="absolute -inset-3 border border-black/40 rounded-full pointer-events-none opacity-0 scale-95 animate-oval-rotate" />
                          <span className="absolute -inset-2 border-2 border-black rounded-full pointer-events-none opacity-0 scale-95 animate-oval-rotate delay-75" />
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 h-0.5 w-full bg-black hidden sm:block" />
        </nav>
      </div>
    </header>
  );
}
