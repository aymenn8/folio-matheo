import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Footer from "@/components/footer";
import { Allphotography } from "@/utils/projectList";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto max-w-6xl flex-grow">
        <div className="pt-20">
          <Project projects={Allphotography} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
