import Image from "next/image";
import { projects } from "@/data/site";

const storyItems = projects.flatMap((project) =>
  project.images.map((media, mediaIndex) => ({
    project,
    media,
    mediaIndex,
  })),
);

const firstRow = storyItems.filter((_, index) => index % 2 === 0);
const secondRow = storyItems.filter((_, index) => index % 2 !== 0);

type StoryItem = (typeof storyItems)[number];

function StoryCard({
  item,
  duplicate,
  row,
}: {
  item: StoryItem;
  duplicate: boolean;
  row: number;
}) {
  const { project, media, mediaIndex } = item;

  return (
    <article
      className="portfolio__story"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <span className="portfolio__story-progress" aria-hidden="true">
        {project.images.map((_, progressIndex) => (
          <span
            className={
              progressIndex <= mediaIndex
                ? "portfolio__story-progress-segment portfolio__story-progress-segment--seen"
                : "portfolio__story-progress-segment"
            }
            key={progressIndex}
          />
        ))}
      </span>

      <span
        className={`portfolio__story-media ${
          media.fit === "cover" ? "portfolio__story-media--cover" : ""
        }`}
      >
        {media.kind === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={media.alt}
          />
        ) : (
          <Image
            className="portfolio__story-image"
            src={media.src}
            alt={duplicate ? "" : media.alt}
            fill
            sizes="(max-width: 767px) 58vw, 15vw"
          />
        )}
      </span>

      <span className="portfolio__story-profile" aria-hidden="true">
        <span
          className="portfolio__story-avatar"
          style={{ backgroundImage: `url("${project.profileImage}")` }}
        />
        <span className="portfolio__story-account">
          <strong>{project.handle}</strong>
          <small>portfólio Sirius</small>
        </span>
        <span className="portfolio__story-more">•••</span>
      </span>

      <span className="portfolio__story-project" aria-hidden="true">
        <strong>{media.client ?? "Carregar projeto"}</strong>
        <small>{media.label ?? "Foto ou vídeo da agência"}</small>
      </span>

      <span className="portfolio__story-upload" aria-hidden="true">
        Story {String(row).padStart(2, "0")} ·{" "}
        {String(mediaIndex + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

function StoryRow({
  items,
  direction,
  row,
}: {
  items: StoryItem[];
  direction: "left" | "right";
  row: number;
}) {
  const extendedItems = [...items, ...items];

  return (
    <div
      className={`portfolio__stories-row portfolio__stories-row--${direction}`}
      aria-label={`Linha ${row} de stories do portfólio`}
    >
      <div className="portfolio__story-track">
        {[0, 1].map((groupIndex) => (
          <div
            className="portfolio__story-group"
            key={groupIndex}
            aria-hidden={groupIndex === 1 ? "true" : undefined}
          >
            {extendedItems.map((item, index) => (
              <StoryCard
                item={item}
                duplicate={groupIndex === 1 || index >= items.length}
                row={row}
                key={`${groupIndex}-${index}-${item.media.src}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="trabalhos"
      className="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio__header">
        <div>
          <p className="eyebrow reveal">Portfólio em movimento</p>
          <h2 id="portfolio-title" className="section-title reveal">
            Ideias que ganham<br />
            <em>forma e presença.</em>
          </h2>
        </div>
        <div className="portfolio__signature reveal">
          <span className="portfolio__signature-mark" aria-hidden="true" />
          <p>Stories · identidades · bastidores</p>
        </div>
      </div>

      <div className="portfolio__stories-stage reveal">
        <StoryRow items={firstRow} direction="left" row={1} />
        <StoryRow items={secondRow} direction="right" row={2} />
      </div>

      <p className="portfolio__stories-note reveal">
        Os materiais atuais sinalizam onde fotos e vídeos reais serão
        carregados. Vídeos tocam automaticamente, sem som e em looping.
      </p>
    </section>
  );
}
