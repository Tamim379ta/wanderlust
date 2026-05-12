import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    text: `"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."`,
    name: "Michael Chen",
    location: "Singapore",
    image: "/assets/person2.png",
  },
  {
    id: 2,
    text: `"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"`,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/assets/person1.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-5xl font-light text-black">
              What Travelers Say
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Real experiences from our happy travelers
            </p>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <FiArrowLeft className="text-2xl" />
            </button>

            <button className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <FiArrowRight className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 bg-white p-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Text */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-3xl leading-tight font-light text-black">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-sky-500 text-xl font-medium">
                      — {item.name}
                    </h4>

                    <p className="text-gray-500 mt-1">{item.location}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-80">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;