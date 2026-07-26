import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 / Fora de rota</p>
      <h1>Este ponto não faz parte do caminho.</h1>
      <Link className="button button--dark" href="/">
        Voltar ao início
      </Link>
    </main>
  );
}
