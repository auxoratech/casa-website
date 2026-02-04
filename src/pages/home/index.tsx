import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Home() {
  return (
    <div className="flex mt-10 flex-col gap-20">
      <Section1 />
      <Section2 />
    </div>
  );
}
