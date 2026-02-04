import Hero from "./Hero";
import WhoAreWe from "./WhoAreWe";

export default function Home() {
  return (
    <div className="flex mt-10 flex-col gap-20">
      <Hero />
      <WhoAreWe />
    </div>
  );
}
