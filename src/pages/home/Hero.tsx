import stars from "@src/assets/images/stars.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-0">
      <div className="max-w-sm text-center md:text-left">
        <h1 className="font-bold w-fit mx-auto md:mx-0">
          <span className="block text-4xl sm:text-5xl md:pl-12">QUIETLY</span>
          <span className="block text-3xl sm:text-4xl">EXCELLENT.</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-light mt-3 md:pl-16">
          Loudly Caring.
        </h2>

        <p className="mt-5 text-sm sm:text-base">
          Support + skills + employment — minus the fluff, that's what we do.
          Care that works, Support that sticks.
        </p>
      </div>

      <div className="w-40 sm:w-48 md:w-64 lg:w-72 shrink-0">
        <img src={stars} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
}
