import emailjs from "@emailjs/browser";

export type ContactEmailParams = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};

const EMAILJS_SERVICE_ID = "service_ezb4z8g";
const EMAILJS_TEMPLATE_ID = "template_3lqn41k";
const EMAILJS_PUBLIC_KEY = "LvIZIRRowE4pIZ8Lt";

export async function sendContactEmail(params: ContactEmailParams) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
      phone: params.phone,
      message: params.message,
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    },
  );
}
