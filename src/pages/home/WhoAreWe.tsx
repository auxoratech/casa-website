import peopleSitting from "@src/assets/images/peopleSitting.png";

export default function WhoAreWe() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 px-6 md:px-0">
      <div className="max-w-sm text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold md:text-end md:pr-10">
          Who are we?
        </h1>

        <h2 className="text-2xl sm:text-3xl font-light mb-6 md:mb-10">
          Support That Puts You First.
        </h2>

        <p className="text-sm sm:text-base">
          At Casa Community, we believe everyone deserves the opportunity to
          live a fulfilling, independent, and connected life. We provide
          tailored NDIS supports that are designed around your goals, your
          needs, and your choices.
        </p>

        <p className="mt-5 text-sm sm:text-base">
          From day programs and community participation to supported employment
          and in-home care, our dedicated team works alongside you every step of
          the way.
        </p>
      </div>

      <div className="w-56 sm:w-64 md:w-80 lg:w-96 shrink-0">
        <img src={peopleSitting} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
}
