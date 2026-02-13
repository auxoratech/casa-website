import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendContactEmail } from "../../services/emailjs";

type ContactFormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

function validateField(name: keyof ContactFormData, value: string): string {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "This field is required";
  }

  if (name === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(trimmedValue) ? "" : "Enter a valid email address";
  }

  if (name === "phone") {
    const phonePattern = /^[\d+\-\s()]+$/;
    const digitsOnly = trimmedValue.replace(/\D/g, "");

    if (!phonePattern.test(trimmedValue)) {
      return "Enter a valid phone number";
    }

    return digitsOnly.length >= 7 && digitsOnly.length <= 15
      ? ""
      : "Phone number must contain 7 to 15 digits";
  }

  if (name === "message") {
    return trimmedValue.length >= 10
      ? ""
      : "Message should be at least 10 characters";
  }

  return "";
}

function validateForm(formData: ContactFormData): ContactFormErrors {
  return {
    first_name: validateField("first_name", formData.first_name),
    last_name: validateField("last_name", formData.last_name),
    email: validateField("email", formData.email),
    phone: validateField("phone", formData.phone),
    message: validateField("message", formData.message),
  };
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSending, setIsSending] = useState(false);

  const handleFieldChange = (name: keyof ContactFormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    try {
      setIsSending(true);
      await sendContactEmail(formData);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        icon: false,
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error("Failed to send contact form email", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        icon: false,
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <form className="space-y-10" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <input
                type="text"
                placeholder="First name"
                value={formData.first_name}
                onChange={(event) =>
                  handleFieldChange("first_name", event.target.value)
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
                aria-invalid={Boolean(errors.first_name)}
              />
              {errors.first_name ? (
                <p className="mt-2 text-sm text-red-600">{errors.first_name}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last name"
                value={formData.last_name}
                onChange={(event) =>
                  handleFieldChange("last_name", event.target.value)
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
                aria-invalid={Boolean(errors.last_name)}
              />
              {errors.last_name ? (
                <p className="mt-2 text-sm text-red-600">{errors.last_name}</p>
              ) : null}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email id:"
              value={formData.email}
              onChange={(event) =>
                handleFieldChange("email", event.target.value)
              }
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone:"
              value={formData.phone}
              onChange={(event) =>
                handleFieldChange("phone", event.target.value)
              }
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? (
              <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
            ) : null}
          </div>

          <div>
            <textarea
              placeholder="Message:"
              rows={4}
              value={formData.message}
              onChange={(event) =>
                handleFieldChange("message", event.target.value)
              }
              className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-lg placeholder-gray-700 resize-none"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            ) : null}
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSending}
              className="bg-black text-white px-10 py-3 text-sm tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
