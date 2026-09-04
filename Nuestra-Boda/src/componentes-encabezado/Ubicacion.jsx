import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "30 Octubre 2026",
  hora = "9:00 PM",
  lugar = "Salón Jardín Ajijic",
  direccion = "Blvd. del Raquet 21, Nuevo Nogales, 84066 Heroica Nogales, Son.",
  ubicacion = "https://maps.app.goo.gl/MAVAh6Ud9g4WEzW99",
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F6670] px-5 py-20 sm:px-6 sm:py-24">
      {/* DECORACIONES DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
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

      <motion.div
        initial={{ opacity: 0, y: 45 }}
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
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        "
      >
        {/* ENCABEZADO */}

        <div className="relative overflow-hidden bg-[#0F6670] px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              font-playfair
              text-4xl
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            {titulo}
          </motion.h2>

          <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-white" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>
        </div>

        {/* CONTENIDO */}

        <div className="bg-white px-6 py-12 sm:px-12 sm:py-16">
          {/* FECHA Y HORA */}

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            {/* FECHA */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                rounded-3xl
                border
                border-[#0F6670]/25
                bg-[#F8F4EC]
                px-6
                py-7
                text-center
                shadow-[0_12px_30px_rgba(15,102,112,0.1)]
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0F6670]
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M3 11h18" />
                </svg>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
                Fecha
              </p>

              <p className="mt-3 font-playfair text-2xl text-black sm:text-3xl">
                {fecha}
              </p>
            </motion.div>

            {/* HORA */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                rounded-3xl
                border
                border-[#0F6670]/25
                bg-[#F8F4EC]
                px-6
                py-7
                text-center
                shadow-[0_12px_30px_rgba(15,102,112,0.1)]
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0F6670]
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
                Hora
              </p>

              <p className="mt-3 font-playfair text-2xl text-black sm:text-3xl">
                {hora}
              </p>
            </motion.div>
          </div>

          {/* UBICACIÓN */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-2xl text-center"
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#C99A3D]
                bg-[#0F6670]
                text-white
                shadow-[0_10px_25px_rgba(15,102,112,0.2)]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <p className="mt-6 font-cursiveDancing text-4xl text-black sm:text-5xl">
              Ubicación
            </p>

            <h3 className="mt-4 font-playfair text-2xl text-black sm:text-3xl">
              {lugar}
            </h3>

            <div className="mx-auto my-6 h-px w-16 bg-[#C99A3D]" />

            <p className="mx-auto max-w-xl text-base leading-relaxed text-black sm:text-lg">
              {direccion}
            </p>

            <motion.a
              href={ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-9
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#0F6670]
                px-9
                py-4
                font-playfair
                text-base
                tracking-wide
                text-white
                shadow-[0_15px_35px_rgba(15,102,112,0.25)]
                transition
                duration-300
                hover:bg-[#174E3D]
                sm:text-lg
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              Ver ubicación
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Celebracion;