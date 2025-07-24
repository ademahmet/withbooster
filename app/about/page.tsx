import Image from "next/image";

const founders = [
  {
    name: "Adem Ahmet Keçe",
    username: "@ademahmetkece",
    title: "Co-Founder & CEO",
    photo: "/adem.png",
    linkedin: "https://linkedin.com/in/ademahmetkece"
  },
  {
    name: "Tuncay Topçu",
    username: "@tuncaytopcu",
    title: "Co-Founder & CTO",
    photo: "/tuncay.png",
    linkedin: "https://www.linkedin.com/in/tuncay-topçu/"
  },
  {
    name: "Sena Kara",
    username: "@senakara",
    title: "Co-Founder & CPO",
    photo: "/sena.png",
    linkedin: "https://www.linkedin.com/in/ssenakara/"
  },
  {
    name: "Serbay Topcu",
    username: "@serbaytopcu",
    title: "Co-Founder & CCO",
    photo: "/serbay.png",
    linkedin: "https://linkedin.com/in/serbaytopcu"
  }
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 font-sans">
      {/* Title Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-sans">
          The best teams <span className="bg-gradient-to-r from-[#2d13aa] to-[#1a237e] text-transparent bg-clip-text">design the best</span>. We try to do more with less.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-sans">
          Our products are used by people who want to be productive and have fun.
        </p>
      </div>

      {/* Founders Section */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-[#0a0a13] rounded-2xl border border-[#22223a] shadow-lg hover:shadow-xl hover:border-[#2d13aa] transition-all duration-300 min-w-[220px] max-w-[260px] w-full font-sans"
            >
              {/* Profile Photo */}
              <div className="relative mb-4">
                <Image 
                  src={founder.photo} 
                  alt={founder.name} 
                  width={88} 
                  height={88} 
                  className="rounded-full object-cover aspect-square border-4 border-[#18182c] group-hover:border-[#2d13aa] transition-colors duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-semibold text-lg mb-1 font-sans">
                  {founder.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2 font-sans">
                  {founder.username}
                </p>
                <p className="text-gray-500 text-sm mb-4 font-sans">
                  {founder.title}
                </p>
                {/* LinkedIn Link */}
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#18182c] hover:bg-[#2d13aa] transition-all duration-300"
                >
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 