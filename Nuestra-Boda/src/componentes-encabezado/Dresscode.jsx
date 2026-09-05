import React from "react";
import { motion } from "framer-motion";

const coloresMujeres = [
  "#6B315F",
  "#0F6670",
  "#7A1835",
  "#174E3D",
  "#B64A1D",
  "#C99A3D",
];

const coloresHombres = [
  "#173A5E",
  "#252525",
  "#174E3D",
];

const Vestimenta = ({
  imagenMujeres = "/mujeres.png",
  imagenHombres = "/hombresv.png",
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F4EC] px-5 py-20 sm:px-6 sm:py-24">
      {/* DECORACIONES DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-24
          h-80
          w-80
          rounded-full
          border
          border-[#6B315F]/15
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
          border-[#174E3D]/15
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ENCABEZADO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black sm:text-sm">
            Nuestro día
          </p>

          <h2 className="mt-5 font-playfair text-4xl text-black sm:text-5xl md:text-6xl">
            Código de Vestimenta
          </h2>

          <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-black" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-black sm:text-lg">
            Estas son nuestras recomendaciones de vestimenta. Nos encantará
            verte elegante para celebrar este día tan especial junto a
            nosotros.
          </p>
        </motion.div>

        {/* TARJETAS */}

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* MUJERES */}

          <motion.article
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
              overflow-hidden
              rounded-bl-2xl
              rounded-br-[3rem]
              rounded-tl-[3rem]
              rounded-tr-2xl
              border
              border-black/10
              bg-white
              shadow-[0_20px_55px_rgba(107,49,95,0.15)]
            "
          >
            {/* TÍTULO MUJERES */}

            <div className="relative bg-[#6B315F] px-6 py-6 text-center">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />

              <h3 className="font-playfair text-3xl text-white sm:text-4xl">
                Mujeres
              </h3>
            </div>

            {/* IMAGEN MUJERES */}

            <div className="relative flex h-[620px] items-center justify-center overflow-hidden bg-white sm:h-[760px] md:h-[700px] lg:h-[820px]">
              <img
                src={imagenMujeres}
                alt="Código de vestimenta formal para mujeres"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />
            </div>

            {/* INFORMACIÓN MUJERES */}

            <div className="border-t border-black/10 bg-white px-6 py-7 text-center">


              <p className="mt-2 text-xl text-black">
                Colores sugeridos
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {coloresMujeres.map((color, index) => (
                  <span
                    key={`${color}-${index}`}
                    className="
                      h-7
                      w-7
                      rounded-full
                      border-2
                      border-white
                      shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                    "
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </motion.article>

          {/* HOMBRES */}

          <motion.article
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
              overflow-hidden
              rounded-bl-2xl
              rounded-br-[3rem]
              rounded-tl-[3rem]
              rounded-tr-2xl
              border
              border-black/10
              bg-white
              shadow-[0_20px_55px_rgba(23,78,61,0.15)]
            "
          >
            {/* TÍTULO HOMBRES */}

            <div className="relative bg-[#174E3D] px-6 py-6 text-center">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#C99A3D]" />

              <h3 className="font-playfair text-3xl text-white sm:text-4xl">
                Hombres
              </h3>
            </div>

            {/* IMAGEN HOMBRES */}

            <div className="relative flex h-[620px] items-center justify-center overflow-hidden bg-white sm:h-[760px] md:h-[700px] lg:h-[820px]">
              <img
                src={imagenHombres}
                alt="Código de vestimenta formal para hombres"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />
            </div>

            {/* INFORMACIÓN HOMBRES */}

            <div className="border-t border-black/10 bg-white px-6 py-7 text-center">
          

              <p className="mt-2 text-xl text-black">
                Colores oscuros
              </p>

              <div className="mt-5 flex items-center justify-center gap-3">
                {coloresHombres.map((color, index) => (
                  <span
                    key={`${color}-${index}`}
                    className="
                      h-7
                      w-7
                      rounded-full
                      border-2
                      border-white
                      shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                    "
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Vestimenta;