// components/CourseCards.js
import React from 'react';

const courses = [
  {
    id: 1,
    category: 'Series',
    title: 'Divine Speech',
    image: '/images/series.jpg',
    description:
      "Dive into the Quran's unique structure and content, discovering the divine wisdom behind each.",
  },
  {
    id: 2,
    category: 'Quran',
    title: 'A Deeper Look',
    image: '/images/quran.jpg',
    description:
      'Explore the rich details of each Surah, including its language, theology, laws and more.',
  },
  {
    id: 3,
    category: 'Arabic',
    title: 'Learn to Read Quran',
    description:
      'Understand and read Arabic letters and basic texts, starting from scratch.',
    image: '/images/arabic.jpg',
  },
  {
    id: 4,
    category: 'Kids',
    title: 'Story Night',
    description:
      'Watch stories from the Quran come to life in an engaging, family-friendly way.',
    image: '/images/kids.jpg',
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-gray-900 py-10 px-6" id='course'>
       <div className="text-white flex flex-col justify-center items-center text-center bg-gray-400 px-4">
  <h1 className="text-5xl font-bold mb-4">Lorem Resource</h1>
  <p className="text-lg max-w-3xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad ipsum,
    tenetur et at neque ea iusto impedit cumque. Error minus et eaque nostrum,
    accusamus pariatur iure quo ex similique. Magni velit officiis animi repellat
    natus iste debitis ut provident iusto expedita. Molestiae amet magni unde quos
    fugit nulla similique consequuntur maiores dignissimos blanditiis animi, ipsam
    incidunt reprehenderit dolorum ab.
  </p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10px">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-red-900 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute top-0 left-0 bg-opacity-90 text-sm font-medium px-3 py-1 rounded-br-lg ${
                  course.category === 'Series'
                    ? 'bg-teal-600'
                    : course.category === 'Quran'
                    ? 'bg-yellow-600'
                    : course.category === 'Arabic'
                    ? 'bg-purple-600'
                    : 'bg-orange-600'
                }`}
              >
                {course.category}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
