import React from 'react';

const alumniData = {
    Founders: ["Ella Jeungst", "Hannah Chisholm", "Josh Redman", "Manas Takalpati", "Manivannan Senthil", "Rhea Bhagia", "Rohitha Madduluri"],
    Alpha: ["Beliz Yilmaz", "Ben Woodman", "Brendan O’Malley", "Cole Hoffman", "John Poltorak", "Kavish Gandhi", "Mia Uitz", "Olivia Wen", "Raahil Madhiwala", "Savitra Kulkarni", "Simon Low", "Yulim Kim"],
    Beta: ["Alan Chen", "Andi Carnell", "Aryaman Agrawal", "Cole Henry", "David Lu", "Ethan Rayala", "Kyle Sorensen", "Manisha Nallakatla", "Mikaela Sherry", "Naman Kejriwal", "Neha Patel", "Raghuvara Padma", "Raheel Qamar", "Ronit Ray"],
    Gamma: ["Alison Polito", "Andrew Knotts", "Ashwin Senthil", "Davis Atwell", "Jackson Reed", "Kirsten Allen", "Lam Ngo", "Milen Patel", "Tara Ghorpadkar"],
    Delta: ["Ahmadou Bamba Diouf", "Alec Pugh", "Mateo Correa Risso"]
};

const AlumniList = () => {
  return (
    <div className="w-full bg-ruddyBlue">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-outline-white my-12">Alumni</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(alumniData).map((group) => (
            <div key={group} className="bg-white p-4 shadow rounded border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-center underline">{group}</h2>
              <ul>
                {alumniData[group].map((name, index) => (
                  <li key={index} className="mb-2 text-center">{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniList;



