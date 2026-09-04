import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "/Carrusel01.jpg",
    position: "center center",
    alt: "Irasema y Armando, momento 1",
  },
  {
    src: "/Carrusel02.jpg",
    position: "center 10%",
    alt: "Irasema y Armando, momento 2",
  },
  {
    src: "/Carrusel03.jpg",
    position: "center top",
    alt: "Irasema y Armando, momento 3",
  },
  {
    src: "/Carrusel04.jpg",
    position: "center 0%",
    alt: "Irasema y Armando, momento 4",
  },
  {
    src: "/Carrusel05.jpg",
    position: "center center",
    alt: "Irasema y Armando, momento 5",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [cargando, setCargando] = useState(false);

  const loadedImages = useRef(new Set());
  const requestId = useRef(0);

  /* PRECARGA TODAS LAS FOTOGRAFÍAS */

  useEffect(() => {
    let componenteActivo = true;

    images.forEach((image) => {
      const imagenPrecargada = new Image();

      imagenPrecargada.onload = () => {
        if (componenteActivo) {
          loadedImages.current.add(image.src);
        }
      };

      imagenPrecargada.onerror = () => {
        console.warn(`No se pudo precargar: ${image.src}`);
      };

      imagenPrecargada.src = image.src;

      if (imagenPrecargada.complete) {
        loadedImages.current.add(image.src);
      }
    });

    return () => {
      componenteActivo = false;
      requestId.current += 1;
    };
  }, []);

  /*
   * La imagen actual permanece visible mientras carga la nueva.
   * El índice solamente cambia cuando la siguiente fotografía está lista.
   */

  const cambiarImagen = (nuevoIndex) => {
    if (nuevoIndex === index || cargando) return;

    const nuevaImagen = images[nuevoIndex];
    const nuevaSolicitud = requestId.current + 1;

    requestId.current = nuevaSolicitud;

    if (loadedImages.current.has(nuevaImagen.src)) {
      setIndex(nuevoIndex);
      return;
    }

    setCargando(true);

    const imagenPrecargada = new Image();

    imagenPrecargada.onload = () => {
      loadedImages.current.add(nuevaImagen.src);

      if (requestId.current === nuevaSolicitud) {
        setIndex(nuevoIndex);
        setCargando(false);
      }
    };

    imagenPrecargada.onerror = () => {
      if (requestId.current === nuevaSolicitud) {
        setCargando(false);
      }
    };

    imagenPrecargada.src = nuevaImagen.src;

    if (imagenPrecargada.complete) {
      loadedImages.current.add(nuevaImagen.src);

      if (requestId.current === nuevaSolicitud) {
        setIndex(nuevoIndex);
        setCargando(false);
      }
    }
  };

  const nextImage = () => {
    cambiarImagen((index + 1) % images.length);
  };

  const prevImage = () => {
    cambiarImagen(
      (index - 1 + images.length) % images.length
    );
  };

  /* CAMBIO AUTOMÁTICO */

  useEffect(() => {
    const interval = setInterval(() => {
      if (!cargando) {
        cambiarImagen((index + 1) % images.length);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [index, cargando]);

  return (
    <section className="relative w-full overflow-hidden bg-[#7A1835] px-5 py-20 sm:px-6 sm:py-24">
      {/* DECORACIONES */}

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
          border-[#C99A3D]/25
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
          border-white/10
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
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl"
      >
        {/* ENCABEZADO FUERA DE LA IMAGEN */}

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white sm:text-sm">
            Nuestra historia
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-white sm:text-6xl">
            Momentos
          </h2>

          <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C99A3D]" />

            <span className="text-lg text-white" aria-hidden="true">
              ♡
            </span>

            <div className="h-px flex-1 bg-[#C99A3D]" />
          </div>

          <p className="mx-auto mt-7 max-w-2xl font-playfair text-base leading-relaxed text-white sm:text-lg">
            Cada fotografía guarda un momento especial de nuestra historia.
          </p>
        </div>

        {/* IMAGEN LIMPIA */}

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-bl-2xl
            rounded-br-[3.5rem]
            rounded-tl-[3.5rem]
            rounded-tr-2xl
            border-[6px]
            border-white
            bg-white
            shadow-[0_28px_75px_rgba(0,0,0,0.3)]
            sm:border-[10px]
          "
        >
          <div className="relative h-[550px] w-full overflow-hidden rounded-bl-xl rounded-br-[2.8rem] rounded-tl-[2.8rem] rounded-tr-xl sm:h-[680px] md:h-[770px] lg:h-[820px]">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].alt}
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  opacity: {
                    duration: 0.65,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                }}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  objectPosition: images[index].position,
                }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* CONTROLES FUERA DE LA IMAGEN */}

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {/* FLECHA IZQUIERDA */}

            <motion.button
              type="button"
              onClick={prevImage}
              disabled={cargando}
              whileHover={!cargando ? { scale: 1.1 } : {}}
              whileTap={!cargando ? { scale: 0.92 } : {}}
              aria-label="Ver fotografía anterior"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white
                text-black
                shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                transition-opacity
                disabled:cursor-wait
                disabled:opacity-60
                sm:h-14
                sm:w-14
              "
            >
              <FaChevronLeft size={18} />
            </motion.button>

            {/* NÚMERO DE FOTOGRAFÍA */}

            <div
              className="
                min-w-[105px]
                rounded-full
                border
                border-[#C99A3D]/70
                px-5
                py-3
                text-center
                font-playfair
                text-base
                text-white
                sm:min-w-[120px]
                sm:text-lg
              "
            >
              {String(index + 1).padStart(2, "0")}

              <span className="mx-3 text-white">/</span>

              {String(images.length).padStart(2, "0")}
            </div>

            {/* FLECHA DERECHA */}

            <motion.button
              type="button"
              onClick={nextImage}
              disabled={cargando}
              whileHover={!cargando ? { scale: 1.1 } : {}}
              whileTap={!cargando ? { scale: 0.92 } : {}}
              aria-label="Ver fotografía siguiente"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white
                text-black
                shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                transition-opacity
                disabled:cursor-wait
                disabled:opacity-60
                sm:h-14
                sm:w-14
              "
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>

          {/* INDICADORES FUERA DE LA IMAGEN */}

          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => cambiarImagen(imageIndex)}
                disabled={cargando}
                aria-label={`Ver fotografía ${imageIndex + 1}`}
                className="flex h-5 items-center justify-center disabled:cursor-wait"
              >
                <motion.span
                  animate={{
                    width: index === imageIndex ? 34 : 10,
                    backgroundColor:
                      index === imageIndex
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          {/* TEXTO FUERA DE LA IMAGEN */}

          <div className="mt-8 text-center">
            <p className="font-cursiveDancing text-4xl text-white sm:text-5xl">
              Nuestra historia
            </p>

            <div className="mx-auto my-5 h-px w-16 bg-[#C99A3D]" />

            <p className="font-playfair text-sm tracking-[0.15em] text-white sm:text-base">
              Irasema &amp; Armando
            </p>
          </div>
        </div>

        {/* ADORNO INFERIOR */}

        <div className="mx-auto mt-12 flex max-w-xs items-center gap-4">
          <div className="h-px flex-1 bg-[#C99A3D]" />

          <span className="text-lg text-white" aria-hidden="true">
            ♡
          </span>

          <div className="h-px flex-1 bg-[#C99A3D]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel;