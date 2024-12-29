import React from 'react';

const Pillars = () => {
  const pillars = [
    {
      title: 'Professional Development',
      description: 'Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.',
    },
    {
      title: 'Alumni Connections',
      description: 'Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!',
    },
    {
      title: 'Social Growth',
      description: 'The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, retreats, and more!',
    },
    {
      title: 'Technical Advancement',
      description: 'Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.',
    },
    {
      title: 'Academic Support',
      description: 'Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.',
    },
  ];

  return (
    <div className="py-12 bg-ruddyBlue px-4 md:px-12">
      <h2 className="text-3xl font-bold text-outline-white text-center mb-8">What Makes Us Who We Are?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.slice(0, 3).map((pillar, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-white border border-gray-800 text-center">
            <h3 className="text-xl lg:text-xl font-semibold mb-4 underline">{pillar.title}</h3>
            <p className="text-base lg:text-xl">{pillar.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {pillars.slice(3).map((pillar, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-white border border-gray-800 text-center">
            <h3 className="text-xl lg:text-xl font-semibold mb-4 underline">{pillar.title}</h3>
            <p className="text-base lg:text-xl">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  export default Pillars;
  

  
