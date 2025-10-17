import React, { useState, useEffect, useRef } from "react";

export default function TypingLoop() {
  const textos = [
    "¡Hola, mi nombre es Luis Pérez!",
    "Desarrollador Web App",
    "Diseñador UX/UI",
  ];

  const [index, setIndex] = useState(0);
  const [subTexto, setSubTexto] = useState("");
  const [borrando, setBorrando] = useState(false);
  const [pausa, setPausa] = useState(false);

  const typingTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);

  useEffect(() => {
    if (pausa) return;

    const textoActual = textos[index];
    const velocidad = borrando ? 50 : 120;

    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    typingTimerRef.current = setTimeout(() => {
      if (!borrando) {
        setSubTexto((prev) => {
          const next = textoActual.slice(0, prev.length + 1);

          if (next.length === textoActual.length) {
            if (pauseTimerRef.current) {
              clearTimeout(pauseTimerRef.current);
              pauseTimerRef.current = null;
            }

            setPausa(true);
            pauseTimerRef.current = setTimeout(() => {
              setBorrando(true);
              setPausa(false);
              pauseTimerRef.current = null;
            }, 2000); // pausa antes de borrar
          }

          return next;
        });
      } else {
        setSubTexto((prev) => {
          const next = textoActual.slice(0, Math.max(0, prev.length - 1));

          if (next.length === 0) {
            if (pauseTimerRef.current) {
              clearTimeout(pauseTimerRef.current);
              pauseTimerRef.current = null;
            }

            setPausa(true);
            pauseTimerRef.current = setTimeout(() => {
              setBorrando(false);
              setIndex((i) => (i + 1) % textos.length);
              setPausa(false);
              pauseTimerRef.current = null;
            }, 1500); // pausa antes de empezar nuevo texto
          }

          return next;
        });
      }
    }, velocidad);

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [subTexto, borrando, index, textos, pausa]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h2>
        {subTexto}
        <span className="inline-block w-3 border-b-2 animate-[blink_0.7s_step-start_infinite] ml-1 align-baseline"></span>
      </h2>
      <style>{`
        @keyframes blink {
          50% { opacity: 0 }
        }
      `}</style>
    </div>
  );
}
