"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RecruitmentSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/recruitment');
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-babyBlue border border-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <Image 
            src="/image/well.jpg" 
            alt="Recruitment" 
            width={800} 
            height={600} 
            className="rounded-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center flex flex-col items-center justify-center">
          <h2 className="text-black text-lg font-light">Spring 2024 Recruitment</h2>
          <h1 className="text-black text-4xl font-bold mt-2">
            Eta Chapter is back! Learn how to get involved with our chapter and our upcoming recruitment season!
          </h1>
          <button 
            onClick={handleButtonClick} 
            className="mt-4 px-4 py-2 bg-carolinaBlue text-uncWhite font-semibold rounded-md hover:bg-blue-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}