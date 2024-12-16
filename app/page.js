import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-6xl">
        <Hero />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
