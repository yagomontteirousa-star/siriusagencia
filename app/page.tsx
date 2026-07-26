import Image from "next/image";
import { Header } from "@/components/header";
import { Portfolio } from "@/components/portfolio";
import { RevealObserver } from "@/components/reveal-observer";
import { method, services, siteConfig } from "@/data/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/logo-sirius-azul.png`,
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

          <div className="hero__meta reveal">
            <span>Social media</span>
            <span>Direção criativa</span>
          </div>

          <div className="hero__content">
            <p className="eyebrow reveal">Presença digital com intenção</p>
            <h1 id="hero-title" className="hero__title reveal">
              O que faz uma marca ser <em>lembrada</em> acontece antes de
              publicar.
            </h1>
            <div className="hero__bottom reveal">
              <p className="hero__copy">
                A Sirius cuida da direção, da narrativa e da presença digital
                para que cada publicação reconheça a marca.
              </p>
              <div className="hero__actions">
                <a className="button button--light" href="#trabalhos">
                  Ver trabalho
                  <span aria-hidden="true">↘</span>
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
            <p className="eyebrow reveal">Por trás da Sirius</p>
            <h2 id="studio-title" className="section-title reveal">
              Direção de perto.<br />
              <em>Presença por inteiro.</em>
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
                Bruna acompanha cada etapa — da leitura da marca à direção do
                conteúdo que chega ao público.
              </p>
              <p className="studio__body reveal">
                A proximidade mantém o processo simples e a presença coerente:
                cada escolha conversa com a próxima.
              </p>

              <div className="services reveal">
                <p className="small-label">O que a Sirius cuida</p>
                <ul>
                  {services.map((service, index) => (
                    <li key={service}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="method reveal" aria-labelledby="method-title">
            <div className="method__heading">
              <p className="small-label">Um caminho claro</p>
              <h3 id="method-title">Do primeiro olhar à rotina da marca.</h3>
            </div>
            <ol className="method__list">
              {method.map((item) => (
                <li key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
                <span aria-hidden="true">↗</span>
              </a>
            ))
          ) : (
            <p>Canais oficiais em atualização.</p>
          )}
        </div>

        <div className="contact__footer">
          <Image
            src="/brand/logo-sirius-branca.png"
            alt="Agência Sirius"
            width={1200}
            height={508}
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
