"use client"

import React from 'react';

const MailingListSection = () => {
    const googleFormUrl = "https://forms.gle/5jhKQcAiTZFSeXoo7";

    const handleSignUp = () => {
        window.open(googleFormUrl, '_blank');
    };

    return (
        <div className="bg-white p-8 m-0">
            <div className="max-w-2xl mx-auto rounded-lg shadow-lg bg-ruddyBlue border border-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Mailing List</h2>
                <p className="italic lg:text-large text-gray-600 mb-4">Sign up with your email address to receive news and updates</p>
                <button
                    className="bg-carolinaBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleSignUp}
                >
                    Sign up
                </button>
                <p className="text-sm lg:text-large mt-4">For inquiries, contact <a href="mailto:dspgamma@gmail.com" className="text-blue-500">uncktp@gmail.com</a></p>
            </div>
        </div>
    );
};

export default MailingListSection;


