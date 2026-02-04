import peopleSitting from "@src/assets/images/peopleSitting.png";
export default function Section2() {
  return (
    <div className="flex flex-row-reverse gap-20 items-center justify-center">
      <div className="max-w-sm">
        <h1 className="text-3xl pr-10 font-bold text-end">Who are we?</h1>
        <h2 className="text-3xl font-light mb-10">
          Support That Puts You First.
        </h2>
        <p>
          At Casa Community, we believe everyone deserves the opportunity to
          live a fulfilling, independent, and connected life. We provide
          tailored NDIS supports that are designed around your goals, your
          needs, and your choices.
        </p>
        <p className="mt-5">
          From day programs and community participation to supported employment
          and in-home care, dedicated team works alongside you every step of the
          way.
        </p>
      </div>
      <div className="w-1/3">
        <img src={peopleSitting} />
      </div>
    </div>
  );
}
