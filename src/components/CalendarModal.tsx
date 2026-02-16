import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type CalendarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
};

export default function CalendarModal({
  isOpen,
  onClose,
  calLink,
}: CalendarModalProps) {
  useEffect(() => {
    if (isOpen) {
      const initCal = async () => {
        const cal = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
        });
      };
      initCal();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg w-full max-w-4xl h-[90vh] mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black text-white w-10 h-10 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="w-full h-full overflow-auto p-4">
          <Cal
            calLink={calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: "month_view",
              origin: "https://cal.eu",
            }}
          />
        </div>
      </div>
    </div>
  );
}
