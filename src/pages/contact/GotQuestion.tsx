import gotQuestion from "@src/assets/images/gotQuestion.png";
export default function GotQuestion() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl  sm:text-5xl font-semibold">
          Got
          <br />
          question?
        </h1>
      </div>
      <div className="shrink-0">
        <img src={gotQuestion} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>
    </section>
  );
}
