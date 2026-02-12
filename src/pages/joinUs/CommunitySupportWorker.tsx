import communitySupportWorker from "@src/assets/images/communitySupportWorker.png";
export default function CommunitySupportWorker() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row-reverse items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="font-bold w-fit mx-auto md:mx-0">
          <span className="block text-4xl sm:text-5xl font-semibold">
            Community Support Worker
          </span>
        </h1>
        <h2 className="text-2xl mt-5 tracking-widest sm:text-3xl">
          Key responsibilities
        </h2>

        <ul className="mt-4 space-y-2 list-disc list-inside max-w-md mx-auto md:mx-0 text-justify text-sm sm:text-base">
          <li>
            Assist community members with daily activities and personal care
            needs.
          </li>
          <li>
            Develop and maintain supportive relationships with individuals.
          </li>
          <li>
            Implement personalized support plans to meet individual goals.
          </li>
          <li>Encourage participation in community activities and programs.</li>
          <li>Provide emotional support and companionship.</li>
          <li>
            Maintain accurate records and documentation of support provided.
          </li>
          <li>
            Communicate effectively with team members, families, and
            stakeholders.
          </li>
          <li>Adhere to all organizational policies and procedures.</li>
        </ul>
      </div>
      <div className="shrink-0">
        <img
          src={communitySupportWorker}
          alt=""
          className="w-48 md:w-56 lg:w-72"
        />
      </div>
    </section>
  );
}
