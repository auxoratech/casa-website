import supportWorker from "@src/assets/images/supportWorker.png";

export default function SupportWorker() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="shrink-0">
        <img src={supportWorker} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h1 className=" md:text-end text-4xl sm:text-5xl font-bold">
          Support Worker
        </h1>

        <h2 className="text-2xl tracking-widest sm:text-3xl md:text-end  font-light mt-1">
          Key responsibilities
        </h2>
        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            Assist in the production of ceramic products, ensuring quality and
            consistency.
          </li>
          <li>Assist Production Tech II.</li>
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
