const projects = [
  "IPSEITY",
  "E & A",
  "LACABANE",
  "RE:BUILD",
  "LPM",
  "NOWAYHOME",
  "SOUSLEAU",
  "ULUWATU",
  "MAROC",
];

export default function Project() {
  return (
    <section className="px-4 font-jacques-francois">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <h2 className="text-white text-4xl font-serif tracking-wide hover:opacity-70 transition-opacity">
              {project}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
