import girlSitting from "@src/assets/images/girlSitting.png";
export default function ProductionTech() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row-reverse items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="shrink-0">
        <img src={girlSitting} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <div className="flex flex-col items-center">
          <h1 className="font-bold w-fit mx-auto md:mx-0">
            <span className="block text-4xl sm:text-5xl font-semibold">
              Production Tech
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl p-2 max-w-fit mt-5 rounded-md bg-black text-white">
            NDIS PARTICIPANTS ONLY
          </h2>
          <h2 className="text-2xl mt-5 tracking-widest sm:text-3xl">
            Home & Community Care
          </h2>
        </div>
        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            Assist in the production of ceramic products, ensuring quality and
            consistency.
          </li>
          <li>Operate and maintain ceramic production equipment and tools.</li>
          <li>Follow established safety protocols and procedures.</li>
          <li>
            Collaborate with team members to meet production goals and
            deadlines.
          </li>
          <li>Participate in quality control and inspection processes.</li>
          <li>Maintain a clean and organized work area.</li>
          <li>
            Support the development and implementation of new ceramic designs
            and techniques.
          </li>
        </ul>
      </div>
    </section>
  );
}
