import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col bg-babyBlue md:flex-row items-start justify-center p-8">
      <div className="flex flex-col gap-4 md:mr-8">
        <Image src="/image/well.jpg" alt="About Us" width={600} height={500} />
        <Image src="/image/well.jpg" alt="About Us" width={600} height={500} />
        <Image src="/image/well.jpg" alt="About Us" width={600} height={500} />
      </div>
      <div className="mt-4 md:mt-0 text-center md:text-left md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 underline">Who Are We?</h2>
        
        <p className="text-lg leading-7 mb-4">
          Kappa Theta Pi stands as the pioneering professional technology organization in the nation and the first co-ed professional technology organization at UNC. Our core mission is to enhance the professional, social, and technical development of our members, ensuring they acquire essential skills to remain at the forefront of the tech industry and foster a robust foundation for future career success. Our programs are designed to challenge our members and push the boundaries of their capabilities, preparing them for real-world challenges.
        </p>
        
        <p className="text-lg leading-7 mb-4">
          Kappa Theta Pi began its journey at UNC in 2020, marking the establishment of a tech-centric community for passionate students. Over the past four years, our organization has blossomed into a vibrant and supportive network that thrives on the unique backgrounds and shared passion for technology among our members. Our organization is composed of individuals from various disciplines, including design, analysis, computer science, engineering, art, entrepreneurship, economics, and cognitive science. This diversity enriches our community, creating a powerful synergy of talents and perspectives.
        </p>
        
        <p className="text-lg leading-7 mb-4">
          At Kappa Theta Pi, we view networking as more than a professional endeavor; it is a journey built on friendship, trust, and camaraderie. We provide an environment where members can excel both academically and socially. Through a variety of workshops, mentorship opportunities, and collaborative projects, we prepare our members to navigate and succeed in the dynamic tech landscape. Our organization promotes a sense of belonging and mutual growth, fostering long-lasting connections and avenues for personal and professional development.
        </p>
        
        <p className="text-lg leading-7 mb-4">
          Our alumni network is vast and closely knit, stretching across the United States. Our former members can be found in major tech hubs like Seattle, New York, San Franciso, and Austin, working in startups and established companies alike. This extensive network offers invaluable guidance and support for the professional growth of our current members, ensuring a continuous cycle of development and achievement.
        </p>
        
        <p className="text-lg leading-7 mb-4">
          Kappa Theta Pi is more than just an organization; it is a thriving community where members build enduring friendships, advance professionally, and grow technically. We take pride in our role within UNC and the broader tech community, consistently striving for excellence and innovation. Our commitment to fostering a collaborative and innovative environment has positioned us as leaders in the tech space. We look forward to continuing our journey and making a lasting impact on the world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
