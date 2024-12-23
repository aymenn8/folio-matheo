import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "../../db.json";
import Navbar from "../../components/navbar";
import MoroccoShowcase from "@/components/morocco";

export default async function ProjectPage({ params }) {
  const { projetName } = await params;

  const project = projects.projects.find(
    (p) => p.name.toLowerCase() === projetName.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar isDarkMode={project.isDarkMode} />
      <div
        className={`w-screen font-aldrich ${
          !project.isDarkMode ? "bg-white" : ""
        }`}
      >
        <div className="container mx-auto max-w-6xl pt-60 pb-60">
          <div className="space-y-8">
            <p className="text-xl texte-white">{project.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-0">
          {project.images.map((image, index) => (
            <div key={index} className="relative w-full">
              {image.isVideo ? (
                <video
                  src={image.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              ) : (
                <div className="relative w-full h-auto">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          ))}
          {project.name === "maroc" && <MoroccoShowcase />}
        </div>
      </div>
    </>
  );
}
