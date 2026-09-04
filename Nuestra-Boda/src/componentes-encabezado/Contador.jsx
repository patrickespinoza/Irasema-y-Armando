import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contador = ({
  titulo = "¡Estás invitado!",
  texto = "A celebrar nuestra union y nos encantaría que seas parte de este momento tan especial para nosotros.",
  frase = "¡Falta poco!",
  fecha = "2026-10-30T00:00:00",
}) => {
  const calcularTiempo = () => {
    const diferencia = new Date(fecha).getTime() - new Date().getTime();

    if (diferencia <= 0) {
      return {
        Días: 0,
        Horas: 0,
        Minutos: 0,
        Segundos: 0,
      };
    }

    return {
      Días: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      Horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      Minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      Segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcularTiempo);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcularTiempo());
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  return (
    <section className="relative overflow-hidden bg-[#F8F4EC] px-5 py-20 sm:px-6 sm:py-24">
      {/* ADORNOS DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          border
          border-[#C99A3D]/30
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
          border-[#174E3D]/15
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* TEXTO PRINCIPAL */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mx-auto flex max-w-md items-center justify-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-black" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>

          <h2
            className="
              mt-7
              font-cursiveDancing
              text-5xl
              leading-tight
              text-black
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              font-playfair
              text-lg
              leading-relaxed
              text-black
              sm:text-2xl
              md:text-3xl
            "
          >
            {texto}
          </p>

          <p
            className="
              mt-7
              font-playfair
              text-xl
              italic
              text-black
              sm:text-2xl
            "
          >
            {frase}
          </p>
        </motion.div>

        {/* CONTADOR */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            mt-12
            max-w-5xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#C99A3D]/50
            bg-[#174E3D]
            px-4
            py-8
            shadow-[0_22px_60px_rgba(23,78,61,0.22)]
            sm:px-8
            sm:py-10
          "
        >
          {/* LÍNEA SUPERIOR */}

          <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
            {Object.entries(timeLeft).map(([item, valor], index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-2
                  py-4
                  ${
                    index !== 0
                      ? "sm:border-l sm:border-white/25"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    font-playfair
                    text-4xl
                    font-medium
                    leading-none
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  {String(valor).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white
                    sm:text-xs
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ADORNO INFERIOR */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-xs items-center gap-4"
        >
          <div className="h-px flex-1 bg-[#C99A3D]" />

          <span className="text-lg text-black" aria-hidden="true">
            ♡
          </span>

          <div className="h-px flex-1 bg-[#C99A3D]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contador;