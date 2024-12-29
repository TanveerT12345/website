import React from 'react';

const Schedule = () => {
  const events = [
    { event: "Event #1", date: "Feb. 8th @ 7:00 PM", location: "Sitterson 014" },
    { event: "Event #2", date: "Feb. 12th @ 7:30 PM", location: "Sitterson 014" },
    { event: "Event #3", date: "Feb. 13th @ 7:00 PM", location: "Sitterson 014" },
    { event: "Event #4", date: "Feb. 15th @ 7:00 PM", location: "Sitterson 014" },
    { event: "Event #5", date: "Feb. 19th @ 7:30 PM", location: "Sitterson 014" },
    { event: "Event #6", date: "Feb. 21st", location: "Invite Only" },
    { event: "Event #7", date: "Feb. 23-24th", location: "Invite Only" },
  ];

  return (
    <div className="bg-babyBlue min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-800 shadow-md mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 underline">Spring 2024 Rush</h1>
          <p className="text-xl text-center">
            Any UNC undergraduate who has completed at least one semester and has at least two semesters remaining, with an interest in technology, is welcome to rush Kappa Theta Pi. Make sure to complete the application by [deadline date].
          </p>
        </div>
        <table className="min-w-full bg-white border border-gray-800">
          <thead>
            <tr>
              <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2 border-l-2">Event</th>
              <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2">Date</th>
              <th className="py-4 px-6 border-b-2 border-r-2 bg-ruddyBlue border-gray-800 text-xl border-t-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="text-center">
                <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl border-l-2">{event.event}</td>
                <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl">{event.date}</td>
                <td className="py-4 px-6 border-b-2 border-r-2 bg-white border-gray-800 text-xl">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
