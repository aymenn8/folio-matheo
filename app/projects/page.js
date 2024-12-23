import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Footer from "@/components/footer";
import { Allprojects } from "@/utils/projectList";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="container mx-auto max-w-6xl">
        <div className="pt-60">
          <Project projects={Allprojects} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
