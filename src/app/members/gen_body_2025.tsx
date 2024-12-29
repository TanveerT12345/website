import Link from 'next/link';

const class_2025 = [
    {
        name: 'Anan Garg',
        linkedin: 'https://www.linkedin.com/in/ananyakgarg/',
        image: '/image/ananya.jpeg',
        class: 'Delta'
      },
      {
        name: 'Arya Rao',
        linkedin: 'https://www.linkedin.com/in/arya-rao/',
        image: '/image/arya.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Carmine Anderson-Falconi',
        linkedin: 'https://www.linkedin.com/in/carmine-anderson-falconi-561824204/',
        image: '/image/carmine.jpg',
        class: 'Zeta'
      },{
        name: 'Haley Brosnahan',
        linkedin: 'https://www.linkedin.com/in/haley-brosnahan-69a500266/',
        image: '/image/haley.jpeg',
        class: 'Delta'
      },
      {
        name: 'Jake Rogers',
        linkedin: 'https://www.linkedin.com/in/jake-rogers-691908168/',
        image: '/image/jake.jpeg',
        class: 'Epsilon'
      },
      {
        name: 'Justin Rivera',
        linkedin: 'https://www.linkedin.com/in/justin-rivera-330448251/',
        image: '/image/justin.jpeg',
        class: 'Delta'
      },
      {
        name: 'Katherine Katsoudas',
        linkedin: 'https://www.linkedin.com/in/katherine-katsoudas-0026a520b/',
        image: '/image/katherine.jpeg',
        class: 'Delta'
      },
      {
        name: 'Mark Maio',
        linkedin: 'https://www.linkedin.com/in/markamaiojr/',
        image: '/image/markm.jpeg',
        class: 'Delta'
      },
      {
        name: 'Nikhil Abraham',
        linkedin: 'https://www.linkedin.com/in/nikhilabraham1/',
        image: '/image/nikhila.jpeg',
        class: 'Delta'
      },
      {
        name: 'Ryan Lutz',
        linkedin: 'https://www.linkedin.com/in/ryan-lutz000/',
        image: '/image/ryan.jpeg',
        class: 'Epsilon'
      },
      {
        name: 'Sana Goyal',
        linkedin: 'https://www.linkedin.com/in/sgoyal2/',
        image: '/image/sana.jpeg',
        class: 'Delta'
      },
      {
        name: 'Sarayu Yenumula',
        linkedin: 'https://www.linkedin.com/in/sarayuy/',
        image: '/image/sarayu.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Sai Kaza',
        linkedin: 'https://www.linkedin.com/in/saikaza/',
        image: '/image/sai.jpeg',
        class: 'Delta'
      },
      {
        name: 'Srinidhi Ekkurthi',
        linkedin: 'https://www.linkedin.com/in/srinidhi-ekkurthi/',
        image: '/image/srinidhi.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Tanvi Pulipaka',
        linkedin: 'https://www.linkedin.com/in/tanvipulipaka/',
        image: '/image/tanvi.jpeg',
        class: 'Gamma'
      },
      {
        name: 'Tyler Roth',
        linkedin: 'https://www.linkedin.com/in/tylertroth/',
        image: '/image/tyler.jpeg',
        class: 'Delta'
      },
];

const ExecutiveBoard = () => {
  return (
    <div className="w-full bg-babyBlue"> 
      <div className="container bg-babyBlue mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-outline-white text-center my-12">Class of 2025</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
          {class_2025.slice(0).map((member) => (
            <div key={member.name} className="text-center bg-white p-4 rounded-lg shadow-lg border border-gray-800 shadow-md">
              <Link href={member.linkedin} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="mx-auto rounded-full w-32 h-32 mb-4 transition-transform duration-200 hover:scale-105"
                  />
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className="text-black">{member.class}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBoard;


