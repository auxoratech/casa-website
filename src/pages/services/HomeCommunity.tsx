import homeCommunity from "@src/assets/images/homeCommunity.png";

export default function HomeCommunity() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row-reverse items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="shrink-0">
        <img src={homeCommunity} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl tracking-widest sm:text-3xl text-end  font-light mt-1">
          Home & Community Care
        </h2>

        <p className="mt-5 text-sm sm:text-base text-justify leading-relaxed">
          Casa Community's Homecare Support service is designed to provide
          personalized care in the comfort of your own home. Our compassionate
          and professional team is here to assist with daily living activities,
          ensuring a sate and supportive environment.
        </p>

        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            <span className="font-semibold">Personal Care:</span> Assistance
            with bathing, dressing, and grooming.
          </li>
          <li>
            <span className="font-semibold">Household asks: </span>
            support with cooking, cleaning, and other household chores.
          </li>
          <li>
            <span className="font-semibold">Health and Wellbeing: </span>Help
            with medication management and health monitoring.
          </li>
        </ul>
      </div>
    </section>
  );
}
