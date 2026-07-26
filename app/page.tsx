import Image from "next/image";
import { Header } from "@/components/header";
import { Portfolio } from "@/components/portfolio";
import { RevealObserver } from "@/components/reveal-observer";
import { services, siteConfig } from "@/data/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/logo-sirius-principal.png`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__universe" aria-hidden="true">
            <span className="hero__star-layer hero__star-layer--far" />
            <span className="hero__star-layer hero__star-layer--near" />
            <span className="hero__shooting-star hero__shooting-star--one" />
            <span className="hero__shooting-star hero__shooting-star--two" />
            <span className="hero__shooting-star hero__shooting-star--three" />
          </div>

          <div className="hero__orbit" aria-hidden="true">
            <span className="hero__point hero__point--primary" />
            <span className="hero__point hero__point--secondary" />
            <span className="hero__ring hero__ring--one" />
            <span className="hero__ring hero__ring--two" />
          </div>

          <div className="hero__content">
            <p className="eyebrow reveal">Presença digital com intenção</p>
            <h1 id="hero-title" className="hero__title reveal">
              Criatividade e estratégias que fazem a <em>sua marca</em> se
              destacar.
            </h1>
            <div className="hero__bottom reveal">
              <p className="hero__copy">
                A Sirius cuida da direção, da narrativa e da presença digital
                para que cada publicação reconheça a marca.
              </p>
              <div className="hero__actions">
                <a className="button button--light" href="#trabalhos">
                  Ver trabalho
                </a>
                <a className="text-link text-link--light" href="#contato">
                  Conversar sobre um projeto
                </a>
              </div>
            </div>
          </div>

          <div className="hero__coordinates" aria-hidden="true">
            <span>α CMa</span>
            <span>06h 45m 09s</span>
          </div>
        </section>

        <Portfolio />

        <section id="sirius" className="studio" aria-labelledby="studio-title">
          <div className="section-intro studio__intro">
            <p className="eyebrow reveal">Oi, eu sou a Bruna</p>
            <h2 id="studio-title" className="section-title reveal">
              CEO e a pessoa<br />
              <em>por trás da Sirius.</em>
            </h2>
          </div>

          <div className="studio__editorial">
            <figure className="studio__portrait reveal">
              <div className="studio__image-wrap">
                <Image
                  src="/images/bruna-sirius.webp"
                  alt="Bruna trabalhando com uma câmera"
                  width={1600}
                  height={2844}
                  sizes="(max-width: 767px) 100vw, 52vw"
                  className="studio__image"
                />
                <span className="studio__image-index" aria-hidden="true">
                  B / 01
                </span>
              </div>
              <figcaption>Bruna, à frente da Agência Sirius.</figcaption>
            </figure>

            <div className="studio__content">
              <p className="studio__lead reveal">
                Eu sou a Bruna, CEO da Sirius, e acompanho cada projeto de
                perto — da primeira conversa ao conteúdo que chega ao público.
              </p>
              <p className="studio__body reveal">
                Meu trabalho é entender a essência de cada negócio e
                transformá-la em uma presença digital bonita, estratégica e
                reconhecível.
              </p>
            </div>
          </div>

          <div className="offers" aria-labelledby="offers-title">
            <div className="offers__heading reveal">
              <p className="small-label">O que eu faço na Sirius</p>
              <h3 id="offers-title">Da identidade ao conteúdo em movimento.</h3>
              <p>
                Soluções que organizam a presença da marca e aproximam o
                negócio das pessoas certas.
              </p>
            </div>
            <ul className="offers__bubbles">
              {services.map((service, index) => (
                <li className="offers__bubble reveal" key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer id="contato" className="contact" aria-labelledby="contact-title">
        <div className="contact__orbit" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow reveal">Novos projetos</p>
        <h2 id="contact-title" className="contact__title reveal">
          Vamos dar intenção ao que a sua marca <em>mostra?</em>
        </h2>

        <div className="contact__channels reveal">
          {siteConfig.contacts.length > 0 ? (
            siteConfig.contacts.map((contact) => (
              <a key={contact.href} href={contact.href}>
                {contact.label}
              </a>
            ))
          ) : (
            <p>Canais oficiais em atualização.</p>
          )}
        </div>

        <div className="contact__footer">
          <Image
            src="/brand/logo-sirius-principal.png"
            alt="Agência Sirius"
            width={896}
            height={407}
            sizes="180px"
            className="contact__logo"
          />
          <nav aria-label="Navegação do rodapé">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} Agência Sirius</p>
        </div>
      </footer>

      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
