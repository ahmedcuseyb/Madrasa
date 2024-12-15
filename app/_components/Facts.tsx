// File: pages/facts.js

export default function Facts() {
    const facts = [
      { number: "130+", label: "Faculty Members", subLabel: "WORLDWIDE" },
      { number: "20+", label: "Representatives", subLabel: "WORLDWIDE" },
      { number: "5,500+", label: "Scholarships", subLabel: "WORLDWIDE" },
      { number: "2,500+", label: "Exam Centers", subLabel: "WORLDWIDE" },
    ];
  
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Some Facts About Us
          </h2>
  
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-5xl font-bold text-blue-500">
                  {fact.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {fact.label}
                </h3>
                <p className="text-sm text-gray-600 uppercase mt-1">
                  {fact.subLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  