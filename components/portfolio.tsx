"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/site";

const project = projects[0];

export function Portfolio() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<number | null>(null);

  const closeFromHistory = useCallback(() => {
    setActiveImage(null);
  }, []);

  const requestClose = useCallback(() => {
    if (window.location.hash === `#${project.slug}`) {
      window.history.back();
    } else {
      setActiveImage(null);
    }
  }, []);

  const openProject = useCallback((index: number) => {
    returnFocusRef.current = document.activeElement as HTMLElement;
    setActiveImage(index);
    if (window.location.hash !== `#${project.slug}`) {
      window.history.pushState({ project: project.slug }, "", `#${project.slug}`);
    }
  }, []);

  const previous = useCallback(() => {
    setActiveImage((current) =>
      current === null
        ? 0
        : (current - 1 + project.images.length) % project.images.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveImage((current) =>
      current === null ? 0 : (current + 1) % project.images.length,
    );
  }, []);

  useEffect(() => {
    const onPopState = () => closeFromHistory();
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [closeFromHistory]);

  useEffect(() => {
    if (activeImage === null) {
      returnFocusRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();

      if (event.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, next, previous, requestClose]);

  const onPointerDown = (event: React.PointerEvent) => {
    touchStartRef.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (touchStartRef.current === null) return;
    const delta = event.clientX - touchStartRef.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) previous();
      else next();
    }
    touchStartRef.current = null;
  };

  return (
    <section
      id="trabalhos"
      className="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio__header">
        <div>
          <p className="eyebrow reveal">Trabalho disponível</p>
          <h2 id="portfolio-title" className="section-title reveal">
            Pouco ruído.<br />
            <em>Mais identidade.</em>
          </h2>
        </div>
        <div className="portfolio__note reveal">
          <span>01 / 01</span>
          <p>
            Um estudo da própria marca enquanto os projetos de clientes são
            preparados para publicação.
          </p>
        </div>
      </div>

      <div className="portfolio__project-meta reveal">
        <div>
          <p>{project.title}</p>
          <span>{project.category}</span>
        </div>
        <button type="button" onClick={() => openProject(0)}>
          Abrir galeria
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="portfolio__grid">
        {project.images.map((image, index) => (
          <button
            className={`portfolio__item portfolio__item--${index + 1} reveal`}
            type="button"
            key={image.src}
            onClick={() => openProject(index)}
            aria-label={`Abrir ${project.title}, imagem ${index + 1} de ${project.images.length}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={1400}
              sizes={
                index === 0
                  ? "(max-width: 767px) 100vw, 72vw"
                  : "(max-width: 767px) 100vw, 45vw"
              }
            />
            <span className="portfolio__item-index" aria-hidden="true">
              / {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {activeImage !== null && (
        <div
          className="project-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) requestClose();
          }}
        >
          <div
            ref={dialogRef}
            className="project-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <header className="project-modal__header">
              <div>
                <p id="modal-title">{project.title}</p>
                <span>{project.category}</span>
              </div>
              <button
                type="button"
                className="project-modal__close"
                onClick={requestClose}
                aria-label="Fechar projeto"
              >
                Fechar
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="project-modal__media">
              <Image
                src={project.images[activeImage].src}
                alt={project.images[activeImage].alt}
                width={1400}
                height={1400}
                sizes="(max-width: 767px) 100vw, 76vw"
                priority
              />
            </div>

            <footer className="project-modal__footer">
              <p>{project.description}</p>
              <div className="project-modal__controls">
                <button type="button" onClick={previous} aria-label="Imagem anterior">
                  ←
                </button>
                <span aria-live="polite">
                  {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(project.images.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={next} aria-label="Próxima imagem">
                  →
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
