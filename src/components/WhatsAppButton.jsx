import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const telefono = "59899896204";
  const mensaje = "Hola, quiero consultar por un sistema.";

  return (
    <a
      href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}