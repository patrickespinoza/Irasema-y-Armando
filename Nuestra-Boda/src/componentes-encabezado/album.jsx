// AlbumCompartido.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, ArrowUpRight, X } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AlbumCompartido() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECCIÓN ÁLBUM COMPARTIDO */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="
          relative
          isolate
          overflow-hidden
          bg-[#6B315F]
          px-5
          py-24
          sm:px-8
          md:py-32
        "
      >
        {/* FONDO MORADO */}

        <div className="pointer-events-none absolute inset-0 -z-20 bg-[#6B315F]" />

        {/* LUCES SUAVES */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            -z-10
            h-[460px]
            w-[460px]
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-32
            -z-10
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#C99A3D]/10
            blur-3xl
          "
        />

        {/* TEXTURA DE PAPEL */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-[0.035]
            mix-blend-screen
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />

        {/* BOTÁNICO IZQUIERDO */}

        <svg
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-16
            h-72
            w-60
            text-[#C99A3D]/20
            sm:h-96
            sm:w-80
          "
          viewBox="0 0 250 320"
          fill="none"
        >
          <path
            d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
            stroke="currentColor"
            strokeWidth="1.1"
          />

          <path
            d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* ENCABEZADO */}

          <motion.div
            className="
              mx-auto
              mb-14
              flex
              max-w-2xl
              flex-col
              items-center
              text-center
            "
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[9px] uppercase tracking-[0.5em] text-white sm:text-[10px]">
              Comparte tus recuerdos
            </p>

            <h2 className="mt-4 font-serif text-4xl font-normal text-white sm:text-5xl md:text-6xl">
              Álbum compartido
            </h2>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#C99A3D] sm:w-20" />

              <span className="h-2 w-2 rotate-45 border border-[#C99A3D]" />

              <span className="h-px w-12 bg-[#C99A3D] sm:w-20" />
            </div>

            <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-white sm:text-xl">
              Cada fotografía será parte de los recuerdos que guardaremos de
              este día.
            </p>
          </motion.div>

          {/* CONTENIDO */}

          <motion.div
            className="
              relative
              mx-auto
              w-full
              max-w-5xl
              overflow-hidden
              border
              border-[#C99A3D]/50
              bg-white/10
              shadow-[0_28px_80px_rgba(0,0,0,0.25)]
              backdrop-blur-sm
            "
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* MARCO INTERIOR */}

            <div className="pointer-events-none absolute inset-3 z-20 border border-[#C99A3D]/20" />

        
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />


            {/* TEXTO */}

            <motion.div
              className="
                relative
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                bg-[#6B315F]
                px-8
                py-16
                text-center
                sm:px-12
                md:min-h-[620px]
              "
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C99A3D]/60
                  bg-white
                "
              >
                <Images
                  size={22}
                  strokeWidth={1.3}
                  className="text-black"
                />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-white">
                Nuestros recuerdos
              </p>

              <h3 className="mt-4 font-serif text-4xl font-normal text-white sm:text-5xl">
                Comparte tus fotos
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C99A3D]" />

                <span className="h-2 w-2 rotate-45 border border-[#C99A3D]" />

                <span className="h-px w-10 bg-[#C99A3D]" />
              </div>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white sm:text-base">
                Captura cada instante especial y súbelo a nuestro álbum para
                revivir esta celebración junto a nosotros.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white
                  bg-white
                  px-8
                  py-3.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-black
                  shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#C99A3D]
                "
              >
                Abrir álbum

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL DEL ÁLBUM */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/70
              px-4
              py-8
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="album-modal-title"
              className="
                relative
                my-auto
                w-full
                max-w-md
                overflow-hidden
                border
                border-[#C99A3D]/60
                bg-[#6B315F]
                shadow-[0_35px_100px_rgba(0,0,0,0.4)]
              "
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* FONDO DEL MODAL */}

              <div className="pointer-events-none absolute inset-0 bg-[#6B315F]" />

              {/* TEXTURA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                  mix-blend-screen
                "
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
                }}
              />

              {/* MARCO INTERIOR */}

              <div className="pointer-events-none absolute inset-3 z-10 border border-[#C99A3D]/25" />

              {/* BOTÓN CERRAR */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar álbum compartido"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/50
                  bg-white
                  text-black
                  transition
                  hover:border-[#C99A3D]
                  hover:bg-[#C99A3D]
                "
              >
                <X size={17} strokeWidth={1.5} />
              </button>

              {/* CONTENIDO DEL MODAL */}

              <div className="relative z-20 max-h-[88vh] overflow-y-auto px-7 py-10 text-center sm:px-9">
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C99A3D]/60
                    bg-white
                  "
                >
                  <Images
                    size={21}
                    strokeWidth={1.3}
                    className="text-black"
                  />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-white">
                  Comparte tus recuerdos
                </p>

                <h2
                  id="album-modal-title"
                  className="mt-4 font-serif text-4xl font-normal text-white"
                >
                  Álbum compartido
                </h2>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-[#C99A3D]" />

                  <span className="h-2 w-2 rotate-45 border border-[#C99A3D]" />

                  <span className="h-px w-10 bg-[#C99A3D]" />
                </div>

                {/* APLICACIÓN */}

                <div className="mt-9">
                  <p className="text-[9px] uppercase tracking-[0.38em] text-white">
                    Aplicación
                  </p>

                  <p className="mt-3 font-serif text-2xl text-white">
                    Wedshoots
                  </p>

                  <a
                    href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      justify-center
                      border
                      border-white
                      bg-white
                      px-7
                      py-3
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-black
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#C99A3D]
                    "
                  >
                    Descargar app
                  </a>
                </div>

                {/* CÓDIGO */}

                <div className="mt-9">
                  <p className="text-[9px] uppercase tracking-[0.38em] text-white">
                    Código del álbum
                  </p>

                  <div
                    className="
                      mt-4
                      border
                      border-[#C99A3D]/60
                      bg-white
                      px-4
                      py-4
                      font-mono
                      text-xl
                      tracking-[0.24em]
                      text-black
                      shadow-inner
                      sm:text-2xl
                      sm:tracking-[0.32em]
                    "
                  >
                    MX6af98171
                  </div>
                </div>

                {/* QR */}

                <div className="mt-9 flex justify-center">
                  <div
                    className="
                      border
                      border-[#C99A3D]/60
                      bg-white
                      p-3
                      shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                    "
                  >
                    <img
                      src="/qr.jpg"
                      alt="Código QR del álbum compartido"
                      className="h-40 w-40 object-contain sm:h-44 sm:w-44"
                    />
                  </div>
                </div>

                <p className="mx-auto mt-7 max-w-xs font-serif text-base italic leading-7 text-white">
                  Escanea el código QR o utiliza la aplicación para compartir
                  tus fotografías con nosotros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}