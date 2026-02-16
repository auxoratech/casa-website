import { useState } from "react";

import CalendarModal from "@src/components/CalendarModal";
import fb from "@src/assets/icons/fb.png";
import ig from "@src/assets/icons/ig.png";
import li from "@src/assets/icons/li.png";

export default function ContactCTA() {
  const [isCalOpen, setIsCalOpen] = useState(false);

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <CalendarModal
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
        calLink="bali-aadu-hnrznx/30min"
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-20">
          <button
            onClick={() => setIsCalOpen(true)}
            className="bg-black text-white px-16 py-5 text-xl tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              Join the <br /> conversation!
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-gray-800 transition">
                FAQ
              </button>

              <button className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-gray-800 transition">
                Blogs
              </button>

              <button className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-gray-800 transition">
                Sign up
              </button>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <p className="text-xs tracking-widest text-gray-600 mb-6">
                FOLLOW US ON SOCIAL MEDIA
              </p>

              <div className="flex gap-6">
                <img src={fb} alt="Facebook" className="w-8 h-8" />
                <img src={ig} alt="Facebook" className="w-8 h-8" />
                <img src={li} alt="Facebook" className="w-12 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
