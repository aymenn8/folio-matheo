export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-2 px-4 font-pixelify-sans">
      <h1 className="text-white text-4xl mb-6 text-center">HI! I'M MAT</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-white text-2xl leading-relaxed text-center">
          Currently in my third year as a design student, I have enriched my
          academic background by studying in Morocco, Algeria, United States,
          and France. All of these cultures have shaped my vision of the world
          and profoundly influenced my approach to design.
        </p>
        <p className="text-white text-2xl mt-4 text-center">
          Presently at{" "}
          <a
            href="https://www.strate.design/"
            className="underline"
            target="_blank"
          >
            strate school of design
          </a>{" "}
          studying industrial design
        </p>
      </div>
    </section>
  );
}
