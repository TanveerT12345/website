import Image from 'next/image';

export default function Home() {
  return (
    <div className="py-8 bg-ruddyBlue px-4 md:px-12 flex items-center justify-center relative">
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-outline-white">Where We Go</h1>
        <div className="py-12 bg-white px-4 md:px-12 flex items-center justify-center relative">
          <div className="w-full max-w-6xl mx-auto p-6 rounded-lg shadow-lg bg-white border border-gray-800">
            <Image 
              src="/image/companies.png" 
              alt="Companies" 
              layout="intrinsic" 
              width={2000} 
              height={800} 
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}







