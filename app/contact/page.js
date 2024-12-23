import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="font-pixelify-sans min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-2 px-4 font-pixelify-sans">
        <h1 className="text-white text-4xl mb-6 text-center">
          Hi ! I'M STILL MAT
        </h1>
        <div className="max-w-2xl mx-auto">
          <a
            href="https://www.linkedin.com/in/math%C3%A9o-peyrot-des-gachons-3146b6327/"
            className="text-white underline block"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="mailto:matheopeyrotdesgachons@gmail.com"
            className="text-white underline block"
            target="_blank"
          >
            Email
          </a>
          <a
            href="/CV-MATHEO-PDG.pdf"
            className="text-white underline block"
            target="_blank"
            download
          >
            my resume
          </a>
        </div>
      </section>
    </main>
  );
}
