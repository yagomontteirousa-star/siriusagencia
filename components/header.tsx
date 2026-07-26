"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header ${open ? "header--open" : ""}`}>
      <a className="header__logo" href="#" aria-label="Agência Sirius, início">
        <Image
          src="/brand/logo-sirius-principal.png"
          alt=""
          width={896}
          height={407}
          priority
          sizes="150px"
        />
      </a>

      <nav className="header__nav" aria-label="Navegação principal">
        {siteConfig.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header__cta" href="#contato">
        Iniciar conversa
      </a>

      <button
        className="header__menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div id="menu-mobile" className="header__mobile-panel" aria-hidden={!open}>
        <nav aria-label="Navegação mobile">
          {siteConfig.navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <p>Agência Sirius · presença digital com intenção</p>
      </div>
    </header>
  );
}
