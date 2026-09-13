import React, { useState } from "react";
import { motion } from "framer-motion";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [error, setError] = useState("");

  const TELEFONO_NOVIA = "526311139649";
  const TELEFONO_NOVIO = "526311160377";

  const enviarWhatsApp = (telefono, lado) => {
    if (!nombreInvitado.trim() || !asistencia) {
      setError("Completa tu nombre y confirma tu asistencia.");
      return;
    }

    setError("");

    const mensaje = `
💍 *Confirmación de asistencia*
*Boda de Irasema y Armando*

Hola, confirmo mi asistencia por medio de la invitación digital.

*Nombre:* ${nombreInvitado.trim()}
*Respuesta:* ${asistencia}
*Confirmación enviada a:* ${lado}
*Mensaje:* ${mensajeInvitado.trim() || "Sin mensaje adicional"}
    `.trim();

    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#174E3D] px-5 py-20 sm:px-6 sm:py-24">
      {/* DECORACIONES DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-20
          h-80
          w-80
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-36
          -right-32
          h-80
          w-80
          rounded-full
          border
          border-[#C99A3D]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-12
          top-16
          h-2
          w-2
          rounded-full
          bg-[#C99A3D]
          opacity-70
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          left-16
          h-2
          w-2
          rounded-full
          bg-[#C99A3D]
          opacity-70
        "
      />

      {/* TARJETA PRINCIPAL */}

      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-bl-2xl
          rounded-br-[4rem]
          rounded-tl-[4rem]
          rounded-tr-2xl
          border
          border-[#C99A3D]/50
          bg-[#F8F4EC]
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* LÍNEA SUPERIOR */}

        <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />

        <div className="px-6 py-14 sm:px-12 sm:py-16 md:px-16">
          {/* ENCABEZADO */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black sm:text-sm">
              RSVP
            </p>

            <h2 className="mt-4 font-playfair text-4xl leading-tight text-black sm:text-5xl md:text-6xl">
              Confirmar asistencia
            </h2>

            <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
              <div className="h-px flex-1 bg-[#C99A3D]" />

              <span className="text-lg text-black" aria-hidden="true">
                ♡
              </span>

              <div className="h-px flex-1 bg-[#C99A3D]" />
            </div>

            <p className="mt-7 leading-7 text-black sm:text-xl">
              La invitación es para 2 personas. Por favor, confirma tu
              asistencia antes del 15 de octubre. Nos encantará compartir este
              día tan especial contigo.
            </p>
          </motion.div>

          {/* FORMULARIO */}

          <div className="mx-auto mt-10 max-w-2xl space-y-6">
            {/* NOMBRE */}

            <div>
              <label
                htmlFor="nombreInvitado"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Nombre y apellido
              </label>

              <input
                id="nombreInvitado"
                type="text"
                autoComplete="name"
                placeholder="Escribe tu nombre"
                value={nombreInvitado}
                onChange={(event) => {
                  setNombreInvitado(event.target.value);
                  setError("");
                }}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#174E3D]/25
                  bg-white
                  px-5
                  py-4
                  text-black
                  outline-none
                  placeholder:text-black/45
                  focus:border-[#174E3D]
                  focus:ring-2
                  focus:ring-[#174E3D]/20
                "
              />
            </div>

            {/* ASISTENCIA */}

            <div>
              <p className="mb-3 text-sm font-semibold text-black">
                ¿Podrás acompañarnos?
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("Sí asistiré");
                    setError("");
                  }}
                  className={`
                    w-full
                    rounded-2xl
                    border
                    px-5
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#174E3D] bg-[#174E3D] text-white shadow-[0_10px_25px_rgba(23,78,61,0.2)]"
                        : "border-[#174E3D]/25 bg-white text-black hover:border-[#174E3D]"
                    }
                  `}
                >
                  Sí asistiré
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("No podré asistir");
                    setError("");
                  }}
                  className={`
                    w-full
                    rounded-2xl
                    border
                    px-5
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#7A1835] bg-[#7A1835] text-white shadow-[0_10px_25px_rgba(122,24,53,0.2)]"
                        : "border-[#7A1835]/25 bg-white text-black hover:border-[#7A1835]"
                    }
                  `}
                >
                  No asistiré
                </button>
              </div>
            </div>

            {/* MENSAJE */}

            <div>
              <label
                htmlFor="mensajeInvitado"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Mensaje para los novios
              </label>

              <textarea
                id="mensajeInvitado"
                placeholder="Escribe un mensaje opcional"
                value={mensajeInvitado}
                onChange={(event) => {
                  setMensajeInvitado(event.target.value);
                  setError("");
                }}
                rows="4"
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-[#174E3D]/25
                  bg-white
                  px-5
                  py-4
                  text-black
                  outline-none
                  placeholder:text-black/45
                  focus:border-[#174E3D]
                  focus:ring-2
                  focus:ring-[#174E3D]/20
                "
              />
            </div>

            {/* ERROR */}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="
                  rounded-xl
                  border
                  border-[#7A1835]/30
                  bg-[#7A1835]/10
                  px-4
                  py-3
                  text-center
                  text-sm
                  text-black
                "
              >
                {error}
              </motion.p>
            )}

            {/* SELECCIÓN DE WHATSAPP */}

            <div
              className="
                rounded-3xl
                border
                border-[#C99A3D]/50
                bg-white
                px-5
                py-6
                text-center
              "
            >
              <p className="font-playfair text-lg text-black">
                ¿A quién deseas enviar tu confirmación?
              </p>

              <p className="mt-2 text-sm leading-6 text-black">
                Selecciona a la novia o al novio para continuar en WhatsApp.
              </p>
            </div>

            {/* BOTONES DE WHATSAPP */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.button
                type="button"
                onClick={() =>
                  enviarWhatsApp(TELEFONO_NOVIA, "la novia")
                }
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#6B315F]
                  px-5
                  py-4
                  font-playfair
                  text-base
                  text-white
                  shadow-[0_14px_30px_rgba(107,49,95,0.25)]
                "
              >
                <WhatsAppIcon />
                Confirmar a la novia
              </motion.button>

              <motion.button
                type="button"
                onClick={() =>
                  enviarWhatsApp(TELEFONO_NOVIO, "el novio")
                }
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#174E3D]
                  px-5
                  py-4
                  font-playfair
                  text-base
                  text-white
                  shadow-[0_14px_30px_rgba(23,78,61,0.25)]
                "
              >
                <WhatsAppIcon />
                Confirmar al novio
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const WhatsAppIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8A9 9 0 1 1 8 20.25L3 21Z" />
      <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
      <path d="M8.25 7.75l1.5-.25.75 2-1 1" />
      <path d="M13.5 13.5l1-1 2 .75-.25 1.5" />
    </svg>
  );
};

export default Confirmacion;