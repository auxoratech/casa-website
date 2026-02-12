import weHaveSpace from "@src/assets/images/weHaveSpace.png";
export default function WeHaveSpace() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-0">
        <div className="max-w-sm text-center md:text-left">
          <h1 className="font-bold w-fit mx-auto md:mx-0">
            <span className="block text-4xl sm:text-5xl">WE HAVE SPACE.</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-light mt-3 md:pl-26 ">
            You Have Skills.
          </h2>

          <p className="mt-5 text-sm sm:text-base">
            We help people live better lives. You help us do it properly.We do
            serious work, just not in a serious tone.These roles are real,
            meaningful, and come with purpose baked in.If you’re human, capable,
            and kind, you’ll fit right in.
          </p>
        </div>

        <div className="w-40 sm:w-48 md:w-64 lg:w-72 shrink-0">
          <img src={weHaveSpace} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="pt-15">
        <div className="h-0.75 w-full bg-black " />
      </div>
    </section>
  );
}
