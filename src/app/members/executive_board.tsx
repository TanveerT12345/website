import Link from 'next/link';

const executiveMembers = [
    {
        name: 'Srikar Sannidhi',
        title: 'President',
        linkedin: 'https://www.linkedin.com/in/srikarsannidhi/',
        image: '/image/srikar.jpeg',
    },
    {
        name: 'Caroline Bryan',
        title: 'Vice President',
        linkedin: 'https://www.linkedin.com/in/caroline-bryan/',
        image: '/image/caroline.jpg',
    },
    {
        name: 'Abhiraam Aremanda',
        title: 'Treasurer',
        linkedin: 'https://www.linkedin.com/in/abhiraam-aremanda-0a93aa239/',
        image: '/image/abhi.jpeg',
    },
    {
        name: 'Lauren Lascano',
        title: 'Secretary',
        linkedin: 'https://www.linkedin.com/in/laurenlascano/',
        image: '/image/lauren.jpeg',
    },
    {
        name: 'Nicholas Sanaie',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/nsanaie/',
        image: '/image/nick.jpeg',
    },
    {
        name: 'Chris Zou',
        title: 'Director of Recruitment',
        linkedin: 'https://www.linkedin.com/in/chris-zou/',
        image: '/image/chris.jpeg',
    },
    {
        name: 'Jules Kim',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/juha-kim-b2b664279/',
        image: '/image/jules.jpeg',
    },
    {
        name: 'Carmine Anderson-Falconi',
        title: 'Director of NME',
        linkedin: 'https://www.linkedin.com/in/carmine-anderson-falconi-561824204/',
        image: '/image/carmine.jpg',
    },
    {
        name: 'Tracy Dang',
        title: 'Director of Social',
        linkedin: 'https://www.linkedin.com/in/tracy-dang-27116a244/',
        image: '/image/tracy.jpeg',
    },
    {
        name: 'Ari Gomez',
        title: 'Director of DEI',
        linkedin: 'https://www.linkedin.com/in/aracely-gomez-a68b002ab/',
        image: '/image/ari.jpeg',
    },
    {
        name: 'Anan Garg',
        title: 'Director of Professional Development',
        linkedin: 'https://www.linkedin.com/in/ananyakgarg/',
        image: '/image/ananya.jpeg',
    },
    {
        name: 'Megha Thumma',
        title: 'Director of Technical Enrichment',
        linkedin: 'https://www.linkedin.com/in/meghathumma/',
        image: '/image/megha.jpeg',
    },
    {
        name: 'Daniel Wang',
        title: 'Director of Community Service',
        linkedin: 'https://www.linkedin.com/in/daniel-wang23/',
        image: '/image/daniel.jpeg',
    },
    {
        name: 'Angelina León',
        title: 'Director of Marketing',
        linkedin: 'https://www.linkedin.com/in/angelina-le%C3%B3n/',
        image: '/image/angelina.jpeg',
    },
    {
        name: 'Nithya Indlamuri',
        title: 'Director of Membership',
        linkedin: 'https://www.linkedin.com/in/nithya-indlamuri-486bb2296/',
        image: '/image/nithya.jpeg',
    },
    {
        name: 'Kibby Hyacinth Pangilinan',
        title: 'Director of Chapter Standards',
        linkedin: 'https://www.linkedin.com/in/kpangilinan/',
        image: '/image/kibby.jpeg',
    },
];



const ExecutiveBoard = () => {
    return (
        <div className="w-full bg-ruddyBlue">
            <div className="container bg-ruddyBlue mx-auto px-4 py-8">
                <h1 className="text-4xl text-black font-bold text-outline-white text-center my-12">Executive Board</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
                    {executiveMembers.map((member) => (
                        <div key={member.name} className="text-center bg-white p-4 rounded-lg shadow-lg border border-gray-800 shadow-md">
                            <Link href={member.linkedin} passHref legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={member.image}
                                        alt={`Photo of ${member.name}`}
                                        className="mx-auto rounded-full w-32 h-32 mb-4 transition-transform duration-200 hover:scale-105"
                                    />
                                    <h2 className="text-xl font-semibold">{member.name}</h2>
                                    <p className="text-black">{member.title}</p>
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


