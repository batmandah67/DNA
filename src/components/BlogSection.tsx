import Image from "next/image";

const blogPosts = [
  {
    title: "Best Medical Network Directory For Physicians & Clients",
    description: "Tips for Maintaining a Healthy Heart. Hypertension, commonly known as high blood pressure.",
    image: "/blog1.jpg",
    link: "#",
  },
  {
    title: "The Importance of Regular Health Checkups",
    description: "Tips for Maintaining a Healthy Heart. Hypertension, commonly known as high blood pressure.",
    image: "/blog2.jpg",
    link: "#",
  },
  {
    title: "Managing Better Stress for Better Mental Health",
    description: "Tips for Maintaining a Healthy Heart. Hypertension, commonly known as high blood pressure.",
    image: "/blog3.jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#FAF3EF] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm text-[#E89D86] uppercase font-semibold">Our Blog</h3>
        <h2 className="text-3xl font-bold text-[#183D3D] mt-2">
          Latest News & Articles<span className="text-[#E89D86]">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Corrected Image Component Usage */}
              <div className="relative w-full h-56">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#183D3D]">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <a href={post.link} className="text-[#E89D86] font-medium mt-4 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
