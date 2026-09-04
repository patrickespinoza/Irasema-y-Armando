import React from "react";
import { motion } from "framer-motion";

const itinerario = [
  {
    hora: "8:00 PM",
    actividad: "Ceremonia civil",
    color: "#174E3D",
    icono: "ceremonia",
  },
  {
    hora: "8:30 PM",
    actividad: "Cóctel de bienvenida",
    color: "#0F6670",
    icono: "coctel",
  },
  {
    hora: "9:00 PM",
    actividad: "Recepción",
    color: "#7A1835",
    icono: "recepcion",
  },
  {
    hora: "9:45 PM",
    actividad: "Presentación de los novios",
    color: "#6B315F",
    icono: "novios",
  },
  {
    hora: "10:00 PM",
    actividad: "Cena",
    color: "#B64A1D",
    icono: "cena",
  },
];

const IconoItinerario = ({ tipo }) => {
  const propiedades = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "27",
    height: "27",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (tipo === "ceremonia") {
    return (
      <svg {...propiedades}>
        <path d="M3 21h18" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M9 21v-6h6v6" />
        <path d="M12 2v4" />
        <path d="M10 4h4" />
      </svg>
    );
  }

  if (tipo === "coctel") {
    return (
      <svg {...propiedades}>
        <path d="M8 2h8l-1 7a3 3 0 0 1-6 0Z" />
        <path d="M12 12v7" />
        <path d="M8 22h8" />
        <path d="M8.5 6h7" />
      </svg>
    );
  }

  if (tipo === "recepcion") {
    return (
      <svg {...propiedades}>
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M2 21h20" />
        <path d="M8 11h8" />
        <path d="M8 15h8" />
        <path d="M10 21v-3h4v3" />
      </svg>
    );
  }

  if (tipo === "novios") {
    return (
      <svg {...propiedades}>
        <path d="M8.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M15.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M2.5 21c.5-4 2.5-6 6-6s5.5 2 6 6" />
        <path d="M9.5 21c.5-4 2.5-6 6-6s5.5 2 6 6" />
        <path d="M11 5.5 12 7l1-1.5" />
      </svg>
    );
  }

  return (
    <svg {...propiedades}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4v16" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
};

const Itinerario = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F4EC] px-5 py-20 sm:px-6 sm:py-24">
      {/* DECORACIONES DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-1/3
          h-80
          w-80
          rounded-full
          border
          border-[#C99A3D]/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-24
          h-72
          w-72
          rounded-full
          border
          border-[#174E3D]/15
        "
      />

      <div className="relative mx-auto max-w-5xl">
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
            Acompáñanos
          </p>

          <h2 className="mt-5 font-playfair text-4xl text-black sm:text-5xl md:text-6xl">
            Itinerario
          </h2>

          <p className="mt-5 font-cursiveDancing text-4xl text-black sm:text-5xl">
            Nuestro gran día
          </p>

          <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-black" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>
        </motion.div>

        {/* LÍNEA DEL ITINERARIO */}

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Línea vertical */}

          <div
            className="
              absolute
              bottom-10
              left-[31px]
              top-10
              w-px
              bg-[#174E3D]/35
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          <div className="space-y-7 sm:space-y-10">
            {itinerario.map((evento, index) => {
              const esIzquierda = index % 2 === 0;

              return (
                <motion.div
                  key={`${evento.hora}-${evento.actividad}`}
                  initial={{
                    opacity: 0,
                    x: esIzquierda ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="
                    relative
                    grid
                    grid-cols-[64px_1fr]
                    items-center
                    gap-4
                    sm:grid-cols-[1fr_80px_1fr]
                    sm:gap-6
                  "
                >
                  {/* TARJETA EN ESCRITORIO: LADO IZQUIERDO */}

                  <div
                    className={`
                      hidden
                      sm:block
                      ${
                        esIzquierda
                          ? "sm:col-start-1"
                          : "sm:col-start-3"
                      }
                    `}
                  >
                    {esIzquierda && (
                      <TarjetaEvento
                        evento={evento}
                        alineacion="right"
                      />
                    )}

                    {!esIzquierda && (
                      <TarjetaEvento
                        evento={evento}
                        alineacion="left"
                      />
                    )}
                  </div>

                  {/* ÍCONO CENTRAL */}

                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      flex
                      justify-center
                      sm:col-start-2
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                      }}
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-[#F8F4EC]
                        text-white
                        shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                      "
                      style={{
                        backgroundColor: evento.color,
                      }}
                    >
                      <IconoItinerario tipo={evento.icono} />
                    </motion.div>
                  </div>

                  {/* TARJETA EN CELULAR */}

                  <div className="col-start-2 row-start-1 sm:hidden">
                    <TarjetaEvento
                      evento={evento}
                      alineacion="left"
                    />
                  </div>

                  {/* ESPACIO DEL LADO CONTRARIO EN ESCRITORIO */}

                  <div
                    className={`
                      hidden
                      sm:block
                      ${
                        esIzquierda
                          ? "sm:col-start-3"
                          : "sm:col-start-1 sm:row-start-1"
                      }
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MENSAJE FINAL */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-16
            max-w-2xl
            rounded-3xl
            bg-[#174E3D]
            px-7
            py-8
            text-center
            shadow-[0_18px_45px_rgba(23,78,61,0.18)]
          "
        >
          <p className="font-cursiveDancing text-4xl text-white sm:text-5xl">
            Celebremos juntos
          </p>

          <div className="mx-auto my-5 h-px w-16 bg-[#C99A3D]" />

          <p className="font-playfair text-base leading-relaxed text-white sm:text-lg">
            Hemos preparado cada momento con mucho cariño para compartirlo
            contigo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const TarjetaEvento = ({ evento, alineacion }) => {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-black/10
        bg-white
        px-5
        py-5
        shadow-[0_10px_30px_rgba(23,78,61,0.08)]
        sm:px-6
        ${alineacion === "right" ? "sm:text-right" : "sm:text-left"}
      `}
    >
      <p className="font-playfair text-xl font-semibold text-black sm:text-2xl">
        {evento.hora}
      </p>

      <div
        className={`
          my-3
          h-px
          w-10
          ${alineacion === "right" ? "sm:ml-auto" : ""}
        `}
        style={{
          backgroundColor: evento.color,
        }}
      />

      <p className="text-sm leading-relaxed text-black sm:text-base">
        {evento.actividad}
      </p>
    </div>
  );
};

export default Itinerario;