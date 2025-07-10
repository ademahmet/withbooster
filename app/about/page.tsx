const team = [
  {
    name: "Ahmet Yılmaz",
    title: "Kurucu & CEO",
    photo: "/logo.png",
    bio: "Yapay zeka ve yazılım geliştirme alanında 10+ yıl deneyimli girişimci."
  },
  {
    name: "Elif Demir",
    title: "CTO",
    photo: "/logo.png",
    bio: "Teknoloji lideri, inovasyon tutkunu ve ürün mimarı."
  },
  {
    name: "Mehmet Kaya",
    title: "Ürün Müdürü",
    photo: "/logo.png",
    bio: "Kullanıcı odaklı ürün geliştirme ve yönetiminde uzman."
  }
];

export default function About() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 font-gilroy">withbooster Ekibimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white text-black rounded-lg shadow-lg flex flex-col items-center p-6">
            <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h2 className="text-lg font-extrabold font-gilroy">{member.name}</h2>
            <span className="text-primary font-semibold mb-2 font-gilroy">{member.title}</span>
            <p className="text-center font-gilroy font-normal">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 