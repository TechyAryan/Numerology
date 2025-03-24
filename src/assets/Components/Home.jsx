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

      <div className="relative text-center mt-50 mb-20 z-10">
        <h2 className="text-7xl font-extrabold text-orange-700 mb-10 font-serif">
          What is Numerology?
        </h2>
        <p className="text-4xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
          Numerology is the study of numbers and their connection to people's lives. 
          It offers deep insights into personality, relationships, career paths, and personal growth.
        </p>
      </div>

      <div className="relative mt-50 flex flex-col space-y-20 px-10 z-10">
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <h3 className="text-4xl font-bold text-orange-600">Personal Growth & Self-Discovery</h3>
          <p className="text-2xl text-gray-700">
            Numerology helps individuals uncover their strengths, weaknesses, and life purpose, 
            guiding them toward personal transformation.
          </p>
        </div>
      </div>

      <div className="relative mt-24 flex mx-10 z-10">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full flex flex-col md:flex-row items-center p-10">
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h3 className="text-4xl font-bold text-orange-700">Meet Your Numerologist</h3>
            <p className="text-2xl text-gray-600 mt-4">
              Rishabh Goel, a professional numerologist, has helped countless individuals understand their life paths 
              and harness the power of numbers.
            </p>
            <p className="text-gray-700 mt-6 text-xl">📍 C1, Yamuna Vihar,Delhi-110053</p>
            <p className="text-gray-700 text-xl">📞 (+91) 9650881509</p>
            <p className="mt-4 flex items-center gap-4">
              <a href="https://www.instagram.com/goel_bhaiji?utm_source=qr&igsh=MTdmdTJseXdsbGV2cg==" target="_blank" className="text-blue-500 flex items-center gap-2">
                <Instagram size={24} /> Instagram
              </a>
              <a href="https://www.facebook.com/share/1BTUVN8G2S/" target="_blank" className="text-blue-500 flex items-center gap-2">
                <Facebook size={24} /> Facebook
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/Profile.jpg" alt="Numerologist" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
