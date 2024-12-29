"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about-us');
  };

  return (
    <div className="bg-white flex items-center justify-center py-2">
      <div className="max-w-4xl mx-auto bg-ruddyBlue border border-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-2 text-center flex flex-col items-center justify-center">
          <h2 className="text-black text-lg font-light">Discover KTP</h2>
          <h1 className="text-black text-4xl font-bold mt-2">
            Interested in joining a community of driven and ambitious individuals? Learn more about our KTP chapter!
          </h1>
          <button 
            onClick={handleButtonClick} 
            className="mt-4 px-4 py-2 bg-carolinaBlue text-uncWhite font-semibold rounded-md hover:bg-blue-600"
          >
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Image 
            src="/image/well.jpg" 
            alt="KTP" 
            width={800} 
            height={600} 
            className="rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
}

