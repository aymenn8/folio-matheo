import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="font-pixelify-sans min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto max-w-6xl flex-grow">
        <div className="pt-20 flex flex-col items-center text-center">
          <h4 className="text-white text-6xl mb-8">Hi ! I'M STILL MAT</h4>
          <div className="text-2xl space-y-4">
            <a
              href="https://www.linkedin.com/in/math%C3%A9o-peyrot-des-gachons-3146b6327/"
              className="text-white underline block"
            >
              Linkedin
            </a>
            <a
              href="mailto:matheopeyrotdesgachons@gmail.com"
              className="text-white underline block"
            >
              Email
            </a>
            <a href="" className="text-white underline block">
              my resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
