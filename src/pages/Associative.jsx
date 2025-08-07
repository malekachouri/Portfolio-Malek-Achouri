import React from "react";

const Associative = () => {
  const activities = [
    {
      role: "General Secretary",
      organization: "Microsoft Tech Club - ENET'Com",
      period: "2023 – 2024",
      location: "Sfax, Tunisia",
      description:
        "As the General Secretary, I coordinated administrative duties, maintained meeting documentation, and ensured smooth communication between club members and partners. I also contributed to organizing multiple tech events, workshops, and hackathons aimed at promoting Microsoft technologies among students.",
      images: [
        "/assets/ag9.jpg",
        "/assets/WhatsApp Image 2025-08-07 at 1.35.27 PM.jpeg",
        "/assets/WhatsApp Image 2025-08-07 at 1.36.17 PM.jpeg",
      ],
    },
    {
      role: "Active Member",
      organization: "IEEE ISIMA",
      period: "2012",
      location: "Mahdia, Tunisia",
      description:
        "As an active member of the IEEE student branch, I participated in planning and delivering an event focused on artificial intelligence and agriculture. This included working on the agenda, inviting speakers, and supporting hands-on workshops that demonstrated real-world AI applications in the agri-tech sector.",
      images: ["/assets/i3e2.png", "/assets/i3e3.png"],
    },
  ];

  return (
    <section
      id="associative"
      className="py-16 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-indigo-600 dark:text-indigo-400 text-center">
          Associative Activities
        </h2>

        <ul className="space-y-16">
          {activities.map((activity, index) => (
            <li key={index} className="border-l-4 border-indigo-600 pl-6">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{activity.role}</h3>
                <p className="text-lg text-indigo-600">{activity.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.period} – {activity.location}
                </p>
              </div>

              {activity.description && (
                <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              )}

              {activity.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activity.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${activity.organization} ${i + 1}`}
                      className="w-full h-40 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Associative;
