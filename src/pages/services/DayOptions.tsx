import dayoptions from "@src/assets/images/DayOptions.png";

export default function DayOptions() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="shrink-0">
        <img src={dayoptions} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl tracking-widest sm:text-3xl md:text-end  font-light mt-1">
          Day Options
        </h2>

        <p className="mt-5 text-sm sm:text-base text-justify leading-relaxed">
          Our Day Options program provides a structured environment where
          participants can engage in a variety ot activities designed to build
          skills, toster social connections, and encourage personal deve
          onment-rom educotional workshops to recreational activities, we offer
          a diverse range of options tailored to individual interests and needs.
        </p>

        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            <span className="font-semibold">
              Life Skill Development Workshops:
            </span>{" "}
            Enhance abilities in areas such as cooking, art, and technology.
          </li>
          <li>
            <span className="font-semibold"> Social Activities: </span>
            Participate in group outings, dames, and community events.
          </li>
          <li>
            <span className="font-semibold">Personalized Support:</span>Receive
            guidance and support from our experienced staff.
          </li>
          <li>
            <span className="font-semibold">Skill Development workshops:</span>
            Learn tradable skill like pottery, Handmade items
          </li>
          <li>Assistance in sellina vour uniaue creations.</li>
        </ul>
      </div>
    </section>
  );
}
