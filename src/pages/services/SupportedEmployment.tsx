import support from "@src/assets/images/support.png";
export default function SupportedEmployment() {
  return (
    <section className="mt-15 flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-10 px-6 md:px-0">
      <div className="max-w-sm text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-light mb-4">
          Supported employment
        </h2>

        <p className="text-sm text-justify sm:text-base leading-relaxed ">
          Introducing Casa Community's new and innovative Supported Employment
          Program, a key component of our Employment Empowerment Services (EES).
          We are dedicated to providing individuals with disabilities the
          opportunity to gain meaningful employment, fostering independence and
          enhancing their quality of life. Our program offers personalized
          support, skill development, and job placement assistance tailored to
          each participant's unique abilities and aspirations. By collaborating
          with local businesses and focusing on inclusivity, we aim to bridge
          the gap between potential and opportunity, empowering our community
          members to thrive in the worktorce.
        </p>
      </div>

      <div className="w-56 sm:w-64 md:w-80 lg:w-96 shrink-0">
        <img src={support} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
}
