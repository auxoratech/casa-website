import whychoosecasa from "@src/assets/images/whychoosecasa.png";

export default function WhyChooseCasa() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="shrink-0">
        <img src={whychoosecasa} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl text-end sm:text-4xl font-bold">
          Why Choose Casa Community?
        </h1>

        <h2 className="text-2xl tracking-widest sm:text-3xl text-end  font-light mt-1">
          Care with structure. And soul.
        </h2>

        <p className="mt-5 text-sm sm:text-base text-justify leading-relaxed">
          At Casa Community, we are more than just a service provider. We are a
          community dedicated to empowering individuals with disabilities. Our
          focus on inclusivity, support, and empowerment sets us apart, making
          us a trusted partner in your journey towards independence.
        </p>

        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            <span className="font-semibold">Experienced Team:</span> Our staff
            is highly trained and passionate about providing exceptional care.
          </li>
          <li>
            <span className="font-semibold">Tailored Services:</span> We offer
            personalized support to meet the unique needs of each individual.
          </li>
          <li>
            <span className="font-semibold">Community Focus:</span> We foster a
            sense of belonging and community through our programs and
            activities.
          </li>
        </ul>
      </div>
    </section>
  );
}
