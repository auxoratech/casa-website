import leftTree from "@src/assets/images/leftTree.png";
import catThinking from "@src/assets/images/catThinking.png";
import rightTree from "@src/assets/images/rightTree.png";
export default function Footer() {
  return (
    <footer className="w-full mt-20 text-white">
      <div className="w-full flex justify-between pt-8 relative z-0">
        <img src={leftTree} className="relative top-8" />

        <img src={catThinking} />

        <img src={rightTree} className="relative top-8" />
      </div>

      <div className=" relative bg-black px-6 py-20 z-2">
        <div className="flex flex-col md:flex-row justify-around gap-16">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-center tracking-wide mb-8">
              LET&apos;S
              <br />
              CONNECT
            </h1>
            <div>
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
          </div>

          <div className="max-w-md text-center">
            <h2 className="text-2xl  font-light tracking-wide mb-1">OPEN</h2>
            <p className="text-xs opacity-70 mb-6">(By appointment only)</p>

            <div className="space-y-2 text-sm opacity-80">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                  <div key={day} className="flex justify-between gap-12">
                    <span>{day}</span>
                    <span>9am–5pm</span>
                  </div>
                ),
              )}
            </div>

            <button className="mt-8 bg-white text-black text-sm px-6 py-1 font-medium hover:bg-gray-200 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/20" />
    </footer>
  );
}
