import ContactCTA from "./ContactCTA";
import ContactForm from "./ContactForm";
import GotQuestion from "./GotQuestion";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <GotQuestion />
      <ContactForm />
      <div className="text-center ">
        <h2 className="text-4xl font-semibold tracking-wide">OR</h2>
      </div>

      <ContactCTA />
    </div>
  );
}
