import Image from "next/image";

const team = [
  {
    name: "Adem Ahmet Keçe",
    title: "Co-Founder",
    photo: "/adem.png",
    bio: "Co-founder passionate about digital innovation and product strategy."
  },
  {
    name: "Tuncay Topçu",
    title: "Co-Founder",
    photo: "/tuncay.png",
    bio: "Co-founder focused on scalable systems and business growth."
  },
  {
    name: "Sena Kara",
    title: "Co-Founder",
    photo: "/sena.png",
    bio: "Co-founder with a vision for user experience and creative solutions."
  },
  {
    name: "Serbay Topcu",
    title: "Co-Founder",
    photo: "/serbay.png",
    bio: "Co-founder dedicated to technology leadership and team success."
  }
];

const features = [
  {
    icon: "/about_us_image1.png",
    title: "Fast & Reliable",
    desc: "We bring your projects to life quickly and securely with the latest technologies."
  },
  {
    icon: "/about_us_image2.png",
    title: "Creative Solutions",
    desc: "We approach every problem with innovation and a user-centric mindset. We develop products that make a difference."
  },
  {
    icon: "/about_us_image3.png",
    title: "Expert Team",
    desc: "We work with a passionate, visionary, and experienced team."
  }
];

export default function About() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center justify-start">
      {/* Title and description */}
      <div className="w-full max-w-4xl mx-auto text-center pt-24 pb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Why Withbooster?</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-4">We are your innovative and reliable partner, taking your business one step further with artificial intelligence and modern software technologies. Our goal is to develop sustainable, scalable, and user-centric digital products.</p>
      </div>
      {/* Features - no background, modern, left-right aligned */}
      <div className="w-full max-w-5xl flex flex-col gap-20 mb-20 px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex w-full ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex flex-col ${i % 2 === 0 ? 'items-start text-left' : 'items-end text-right'} max-w-xl w-full`}>
              <Image src={f.icon} alt={f.title} width={80} height={80} className="mb-4" />
              <h3 className="text-3xl font-extrabold mb-2 text-[#1ae5be]">{f.title}</h3>
              <p className="text-lg text-gray-200 mb-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Team section */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white/80 text-black rounded-2xl shadow-lg flex flex-col items-center p-8 border border-white/30 hover:scale-105 transition-transform backdrop-blur-sm">
              <Image src={member.photo} alt={member.name} width={96} height={96} className="rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-extrabold mb-1 text-center">{member.name}</h3>
              <span className="text-[#1ae5be] font-semibold mb-2 text-center block">{member.title}</span>
              <p className="text-center text-gray-700 text-base">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 