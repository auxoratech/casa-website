import { useState } from "react";
import leftTree from "@src/assets/images/leftTree.png";
import catThinking from "@src/assets/images/catThinking.png";
import rightTree from "@src/assets/images/rightTree.png";
import CalendarModal from "@src/components/CalendarModal";

export default function Footer() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return (
    <footer className="w-full mt-20 text-white overflow-hidden">
      <div className="w-full flex justify-between items-end pt-8 relative z-0 px-4 md:px-12">
        <img
          src={leftTree}
          alt=""
          className="
            hidden sm:block
            w-24 md:w-32 lg:w-40
            relative top-3
          "
        />

        <img
          src={catThinking}
          alt=""
          className="
            mx-auto
            w-32 sm:w-40 md:w-48 lg:w-56
          "
        />

        <img
          src={rightTree}
          alt=""
          className="
            hidden sm:block
            w-24 md:w-32 lg:w-40
            relative top-3
          "
        />
      </div>

      <div className="relative bg-black px-6 py-20 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 max-w-6xl mx-auto">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-wide mb-8 text-center md:text-left">
              LET&apos;S
              <br />
              CONNECT
            </h1>

            <p className="text-sm leading-relaxed opacity-80">
              Unit 1/25 Penong Ave,
              <br />
              Camden Park, SA-5038
            </p>

            <p className="mt-4 text-sm opacity-80">1800 18 2272</p>

            <a
              href="mailto:info@casacommunity.com.au"
              className="mt-4 inline-block text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
            >
              info@casacommunity.com.au
            </a>
          </div>

          <div className="max-w-md text-center">
            <h2 className="text-2xl font-light tracking-wide mb-1">OPEN</h2>
            <p className="text-xs opacity-70 mb-6">(By appointment only)</p>

            <div className="space-y-2 text-sm opacity-80 max-w-xs mx-auto">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span>9am–5pm</span>
                  </div>
                ),
              )}
            </div>

            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="mt-8 bg-white text-black text-sm px-6 py-1 font-medium hover:bg-gray-200 transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/20" />

      <CalendarModal 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        calLink="bali-aadu-hnrznx/30min"
      />
    </footer>
  );
}
