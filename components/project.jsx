import Link from "next/link";

export default function Project({ projects }) {
  return (
    <section className="px-4 font-jacques-francois">
      <div className="space-y-24">
        {Object.entries(projects).map(([displayName, urlPath], index) => (
          <Link href={`/${urlPath}`} key={index}>
            <div className="group cursor-pointer">
              <h2 className="text-white text-6xl font-serif tracking-wide hover:opacity-70 transition-opacity pb-12">
                {displayName}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
