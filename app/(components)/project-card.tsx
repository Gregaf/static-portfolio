export default function ProjectCard() {
  return (
    <a
      href="/projects/id"
      //   className={styles.card}
      className="transition py-4 px-5 rounded-xl border-2 border-transparent hover:border-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-1">
        Deploy <span className="inline-block">-&gt;</span>
      </h2>
      <p className="transition m-0 opacity-60 hover:opacity-100">
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </a>
  );
}
