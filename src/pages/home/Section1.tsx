import stars from "@src/assets/images/stars.png";
export default function Section1() {
  return (
    <div className="flex items-center gap-20 justify-center">
      <div className="w-sm">
        <h1 className="font-bold w-fit ">
          <span className="block text-5xl pl-12">QUIETLY</span>
          <span className="block text-4xl ">EXCELLENT.</span>
        </h1>

        <h2 className="text-3xl font-light pl-17">Loudly Caring.</h2>
        <p className="mt-5">
          Support+ skills + employment - minus the fluff, that's what we do.
          Care that works, Support that sticks.
        </p>
      </div>
      <div className="w-1/4">
        <img src={stars} alt="" />
      </div>
    </div>
  );
}
