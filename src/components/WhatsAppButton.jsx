import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+917973706630"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500
                 p-4 rounded-full shadow-lg hover:scale-110
                 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
