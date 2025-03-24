import { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";

function Home() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const generateUniqueNumbers = () => {
      let numbersArray = [];
      const maxAttempts = 100;

      for (let i = 0; i < 50; i++) {
        let attempts = 0;
        let newNumber;
        let isOverlapping;

        do {
          newNumber = {
            number: Math.floor(Math.random() * 10),
            top: Math.random() * 90,
            left: Math.random() * 90,
            opacity: Math.random() * 0.5 + 0.2,
          };

          isOverlapping = numbersArray.some(
            (item) =>
              Math.abs(item.top - newNumber.top) < 5 &&
              Math.abs(item.left - newNumber.left) < 5
          );

          attempts++;
        } while (isOverlapping && attempts < maxAttempts);

        numbersArray.push(newNumber);
      }

      setRandomNumbers(numbersArray);
    };

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    generateUniqueNumbers();
  }, []);

  return (
    <div className="relative px-6 py-10 bg-gray-100 min-h-screen overflow-hidden">
      {/* Floating Random Numbers */}
      {randomNumbers.map((item, index) => (
        <span
          key={index}
          className="absolute text-orange-300 text-7xl md:text-9xl font-bold pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            opacity: item.opacity,
          }}
        >
          {item.number}
        </span>
      ))}

      {/* Hero Section */}
<div className="relative text-center mt-32 md:mt-40 z-10 p-10">
  <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 font-serif drop-shadow-sm">
    What is Numerology?
  </h2>
  <p className="md:text-3xl text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
    Numerology is the study of numbers and their connection to people's lives. It offers deep insights into personality, relationships, career paths, and personal growth.
  </p>
  <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
</div>


      {/* Key Numerology Benefits Section */}
      <div className="relative mt-24 md:mt-32 grid gap-12 md:gap-16 max-w-6xl mx-auto z-10">
        {[
          {
            title: "Personal Growth & Self-Discovery",
            text: "Numerology helps individuals uncover their strengths, weaknesses, and life purpose, guiding them toward personal transformation.",
            img: "/images/1.jpg",
            align: "left",
          },
          {
            title: "Career & Business Success",
            text: "Understanding numerology can help in choosing the right career path, optimizing business decisions, and improving financial stability.",
            img: "/images/2.jpg",
            align: "right",
          },
          {
            title: "Relationships & Compatibility",
            text: "By analyzing life path numbers, numerology provides insights into compatibility, helping individuals build stronger and more fulfilling relationships.",
            img: "/images/3.jpg",
            align: "left",
          },
          {
            title: "Spiritual Awakening & Intuition",
            text: "Many use numerology as a tool for spiritual growth, enhancing intuition, and aligning with their higher self.",
            img: "/images/4.jpg",
            align: "right",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            } items-center gap-8 md:gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-36 md:w-48 h-36 md:h-48 rounded-full shadow-lg"
            />
            <div className={item.align === "right" ? "text-right" : "text-left"}>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-700">
                {item.title}
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 mt-4">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="relative mt-24 bg-white shadow-lg rounded-xl p-8 md:p-16 text-center z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-orange-700">
          Explore Our Features
        </h3>
        <p className="text-lg md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
          Our website provides powerful tools to explore numerology and
          understand its impact on your life.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              title: "📊 Study Numerology",
              text: "Learn about different numerology charts, including Master numbers, destiny numbers, and more.",
            },
            {
              title: "🔢 Numerology Calculator",
              text: "Calculate your life path number, expression number, and other key numerology numbers.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 p-8 bg-orange-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-orange-700">
                {feature.title}
              </h4>
              <p className="text-lg md:text-xl text-gray-700 mt-4">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Numerologist Profile Section */}
      <div className="relative mt-24 mx-auto bg-gradient-to-r from-orange-500 to-red-600 shadow-2xl rounded-xl overflow-hidden max-w-5xl flex flex-col md:flex-row items-center p-10 z-10">
        <img
          src="/images/Profile.jpg"
          alt="Rishabh Goel"
          className="w-36 md:w-48 h-36 md:h-48 rounded-full shadow-lg border-4 border-white"
        />
        <div className="w-full md:w-2/3 p-6 text-center md:text-left text-white">
          <h3 className="text-3xl md:text-4xl font-bold">
            Meet Your Numerologist
          </h3>
          <p className="text-lg md:text-2xl mt-4">
            Rishabh Goel, a professional numerologist, has helped countless
            individuals understand their life paths and harness the power of
            numbers.
          </p>
          <p className="mt-6 text-xl">📍 C1, Yamuna Vihar, Delhi-110053</p>
          <p className="text-xl">📞 (+91) 9650881509</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
