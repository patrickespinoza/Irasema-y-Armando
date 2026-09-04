import React from "react";
import { motion } from "framer-motion";

const Regalos = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F4EC] px-5 py-20 sm:px-6 sm:py-24">
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
          border-[#B64A1D]/15
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
          border-[#C99A3D]/25
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-bl-2xl
          rounded-br-[4rem]
          rounded-tl-[4rem]
          rounded-tr-2xl
          border
          border-[#C99A3D]/50
          bg-[#B64A1D]
          shadow-[0_25px_70px_rgba(182,74,29,0.25)]
        "
      >
        {/* LÍNEA DECORATIVA SUPERIOR */}

        <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />

        <div className="relative px-7 py-16 text-center sm:px-14 sm:py-20">
          {/* ENCABEZADO */}

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.35em",
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase text-white sm:text-sm"
          >
            Con cariño
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-5 font-playfair text-5xl text-white sm:text-6xl"
          >
            Lluvia de sobres
          </motion.h2>

          <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-white" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>

          {/* ÍCONO DE SOBRE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            className="
              mx-auto
              mt-10
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              border
              border-white/60
              bg-white
              text-black
              shadow-[0_15px_35px_rgba(0,0,0,0.2)]
              sm:h-32
              sm:w-32
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2.5" y="5" width="19" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
              <path d="m3 18 6.5-6" />
              <path d="m21 18-6.5-6" />
            </svg>
          </motion.div>

          {/* MENSAJE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl"
          >
            <p className="font-playfair text-xl leading-9 text-white sm:text-2xl sm:leading-10">
              El mejor regalo será compartir este día contigo.
            </p>

            <div className="mx-auto my-7 h-px w-16 bg-[#C99A3D]" />

            <p className="text-base leading-8 text-white sm:text-lg">
              Si deseas tener un detalle con nosotros, contaremos con lluvia de
              sobres durante nuestra celebración.
            </p>
          </motion.div>

          {/* TARJETA INFORMATIVA */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-10
              max-w-xl
              rounded-3xl
              border
              border-white/40
              bg-white
              px-6
              py-7
              shadow-[0_15px_35px_rgba(0,0,0,0.15)]
              sm:px-9
            "
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B64A1D]
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 12v9H4v-9" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 7v14" />
                  <path d="M12 7H7.5A2.5 2.5 0 1 1 10 4.5C10 7 12 7 12 7Z" />
                  <path d="M12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 7 12 7 12 7Z" />
                </svg>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-playfair text-xl text-black">
                  Lluvia de sobres
                </p>

                <p className="mt-2 text-sm leading-6 text-black sm:text-base">
                  Podrás depositar el efectivo en tu sobre en el espacio destinado durante el
                  evento.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AGRADECIMIENTO */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            viewport={{ once: true }}
            className="mt-10 font-cursiveDancing text-4xl text-white sm:text-5xl"
          >
            Gracias por acompañarnos
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Regalos;