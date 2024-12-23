import Image from "next/image";

const MoroccoShowcase = () => {
  const videos = [
    { url: "/images/maroc//maroc_4.1.mov" },
    { url: "/images/maroc/maroc_4.2.mp4" },
    { url: "/images/maroc/maroc_4.3.mp4" },
    { url: "/images/maroc/maroc_4.4.mp4" },
  ];

  const image = {
    url: "/images/maroc/maroc_5.png",
    alt: "Morocco Showcase",
  };

  return (
    <div className="container mx-auto max-w-6xl py-20">
      <div className="grid grid-cols-2 gap-4">
        {/* Vidéos (4 quadrants à gauche) */}
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="relative w-full h-48">
              <video
                src={video.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Image à droite */}
        <div className="relative w-full h-full">
          <Image
            src={image.url}
            alt={image.alt || "Morocco Showcase"}
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MoroccoShowcase;
