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
  logo: `${siteConfig.url}/brand/logo-sirius-laranja.png`,
  description: siteConfig.description,
};

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.1a8.45 8.45 0 0 0-7.18 12.9L3.6 20.4l4.52-1.18A8.46 8.46 0 1 0 12 3.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M9.05 7.65c.2-.45.4-.46.62-.47h.52c.17 0 .44.06.67.57.23.52.79 1.92.86 2.06.07.14.12.31.02.49-.1.17-.15.28-.3.43-.14.16-.3.35-.43.47-.14.14-.28.3-.12.58.16.28.7 1.16 1.52 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.23.64-.14.27.09 1.69.8 1.98.94.29.14.48.21.55.33.07.12.07.68-.16 1.33-.23.66-1.36 1.26-1.87 1.34-.48.07-1.09.1-1.76-.11-.4-.13-.92-.3-1.59-.59-2.79-1.2-4.61-4.02-4.75-4.21-.14-.19-1.13-1.51-1.13-2.88 0-1.37.72-2.05.98-2.33Z" />
    </svg>
  );
}

export default function Home() {
  const whatsappContact = siteConfig.contacts.find(
    (contact) => contact.kind === "whatsapp",
  );

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
            <p className="eyebrow reveal">Oi, eu sou a Bruna</p>
            <h2 id="studio-title" className="section-title reveal">
              A pessoa por trás<br />
              <em>da Sirius.</em>
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
                Eu estou à frente da Sirius e acompanho cada projeto de perto —
                da leitura da marca ao conteúdo que chega ao público.
              </p>
              <p className="studio__body reveal">
                Meu trabalho é transformar intenção em uma presença digital
                com identidade, consistência e verdade. Eu penso a direção,
                planejo, crio e produzo para que cada escolha converse com a
                próxima.
              </p>
            </div>
          </div>

          <div className="care" aria-labelledby="care-title">
            <div className="care__heading reveal">
              <p className="small-label">O que a Sirius cuida</p>
              <h3 id="care-title">Tudo o que dá forma à sua presença.</h3>
              <p>
                Estratégia, criação e produção reunidas para a marca aparecer
                com clareza — e continuar sendo reconhecida.
              </p>
            </div>
            <ul className="care__bubbles">
              {services.map((service, index) => (
                <li className="care__bubble reveal" key={service.title}>
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
        <div className="contact__universe" aria-hidden="true">
          <span className="hero__star-layer hero__star-layer--far" />
          <span className="hero__star-layer hero__star-layer--near" />
        </div>
        <div className="contact__orbit" aria-hidden="true">
          <span />
        </div>

        <div className="contact__brand reveal">
          <Image
            src="/brand/logo-sirius-laranja.png"
            alt="Agência Sirius"
            width={1200}
            height={508}
            sizes="180px"
            className="contact__logo"
          />
          <p>Social media, direção criativa e produção de conteúdo.</p>
        </div>

        <div className="contact__main">
          <div className="contact__invitation reveal">
            <p className="eyebrow">Contato</p>
            <h2 id="contact-title" className="contact__title">
              Vamos encontrar o ponto de luz <em>da sua marca?</em>
            </h2>
          </div>

          <div className="contact__details reveal">
            <div className="contact__channels">
              <p className="small-label">Fale com a Sirius</p>
              {siteConfig.contacts.length > 0 ? (
                siteConfig.contacts.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                  >
                    {contact.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))
              ) : (
                <p className="contact__pending">
                  WhatsApp, Instagram e e-mail
                  <span>Dados oficiais aguardando atualização.</span>
                </p>
              )}
            </div>

            <div className="contact__index">
              <p className="small-label">Mapa do site</p>
              <nav aria-label="Navegação do rodapé">
                {siteConfig.navigation.map((item, index) => (
                  <a key={item.href} href={item.href}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <p>© {new Date().getFullYear()} Agência Sirius</p>
          <a href="#" aria-label="Voltar ao início">
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
          <p>Brasil · projetos online</p>
        </div>
      </footer>

      {whatsappContact ? (
        <a
          className="whatsapp-fab"
          href={whatsappContact.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com a Sirius pelo WhatsApp"
        >
          <WhatsAppMark />
          <span>WhatsApp</span>
        </a>
      ) : (
        <span
          className="whatsapp-fab whatsapp-fab--pending"
          aria-label="WhatsApp: número oficial ainda não informado"
          title="Adicione o número oficial para ativar este botão"
        >
          <WhatsAppMark />
          <span>WhatsApp</span>
        </span>
      )}

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
