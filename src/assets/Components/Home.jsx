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
    <div className="relative px-20 py-10 bg-gray-100 min-h-screen overflow-hidden">
      {randomNumbers.map((item, index) => (
        <span
          key={index}
          className="absolute text-gray-300 text-9xl font-bold pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            opacity: item.opacity,
          }}>
          {item.number}
        </span>
      ))}

      <div className="relative text-center mt-30 md:mt-50 z-10">
        <h2 className="text-4xl md:text-7xl font-extrabold text-orange-700 mb-10 font-serif">
          What is Numerology?
        </h2>
        <p className="text-2xl md:text-4xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
          Numerology is the study of numbers and their connection to people's lives. 
          It offers deep insights into personality, relationships, career paths, and personal growth.
        </p>
      </div>

      <div className="relative mt-20 md:mt-50 flex flex-col space-y-20 z-10">
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <h3 className="text-4xl font-bold text-orange-600">Personal Growth & Self-Discovery</h3>
          <p className="text-2xl text-gray-700">
            Numerology helps individuals uncover their strengths, weaknesses, and life purpose, 
            guiding them toward personal transformation.
          </p>
        </div>
      
        <div className="text-right flex flex-col gap-4 max-w-3xl self-end">
          <h3 className="text-4xl font-bold text-orange-600">Career & Business Success</h3>
          <p className="text-2xl text-gray-700">
            Understanding numerology can help in choosing the right career path, 
            optimizing business decisions, and improving financial stability.
          </p>
        </div>
      
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <h3 className="text-4xl font-bold text-orange-600">Relationships & Compatibility</h3>
          <p className="text-2xl text-gray-700">
            By analyzing life path numbers, numerology provides insights into compatibility, 
            helping individuals build stronger and more fulfilling relationships.
          </p>
        </div>
      
        <div className="text-right flex flex-col gap-4 max-w-3xl self-end">
          <h3 className="text-4xl font-bold text-orange-600">Spiritual Awakening & Intuition</h3>
          <p className="text-2xl text-gray-700">
            Many use numerology as a tool for spiritual growth, enhancing intuition, 
            and aligning with their higher self.
          </p>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative mt-24 bg-white shadow-lg rounded-xl p-6 md:p-12 text-center z-10 mx-4 sm:mx-6 lg:mx-10">
  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-700">
    Explore Our Features
  </h3>
  <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mt-4 max-w-4xl mx-auto">
    Our website provides powerful tools to explore numerology and understand its impact on your life.
  </p>

  <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 md:gap-16">
    <div className="w-full sm:w-1/2 md:w-1/3 p-6 sm:p-8 bg-orange-100 rounded-lg shadow-md">
      <h4 className="text-2xl sm:text-3xl font-bold text-orange-700">📊 Study Numerology</h4>
      <p className="text-lg sm:text-2xl text-gray-700 mt-4">
        Learn about different numerology charts, including Master numbers, destiny numbers, and more.
      </p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/3 p-6 sm:p-8 bg-orange-100 rounded-lg shadow-md">
      <h4 className="text-2xl sm:text-3xl font-bold text-orange-700">🔢 Numerology Calculator</h4>
      <p className="text-lg sm:text-2xl text-gray-700 mt-4">
        Calculate your life path number, expression number, and other key numerology numbers.
      </p>
    </div>
  </div>

      </div>
      
      {/* Numerologist Section */}
      <div className="relative mt-24 flex flex-col md:flex-row items-center bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-screen-lg mx-auto z-10 p-4 sm:p-6 md:p-10">
  <img 
    src="/images/Profile.jpg" 
    alt="Rishabh Goel" 
    className="w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 rounded-full shadow-lg"
  />
  <div className="w-full md:w-2/3 p-4 sm:p-6 text-center md:text-left">
    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-orange-700">
      Meet Your Numerologist
    </h3>
    <p className="text-base sm:text-lg md:text-2xl text-gray-600 mt-3 sm:mt-4">
      Rishabh Goel, a professional numerologist, has helped countless individuals understand their life paths and harness the power of numbers.
    </p>
    <p className="text-gray-700 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-lg">
      📍 C1, Yamuna Vihar, Delhi-110053
    </p>
    <p className="text-gray-700 text-sm sm:text-lg">📞 (+91) 9650881509</p>
    <div className="mt-4 flex justify-center md:justify-start space-x-4 sm:space-x-6">
      <a href="https://facebook.com/rishabhgoel" target="_blank" rel="noopener noreferrer">
        <Facebook size={28} className="text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://instagram.com/rishabhgoel" target="_blank" rel="noopener noreferrer">
        <Instagram size={28} className="text-pink-600 hover:text-pink-800" />
      </a>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;