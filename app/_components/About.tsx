// File: pages/about.js

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full bg-white py-12 shadow-md">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our school</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            our school is a non-profit organization registered as darausalam in daruslam and operates on a global level. It is a leading portal in the digital sphere serving students from diverse backgrounds and all walks of life.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/lady.jpg"
              alt="About Seekers Guidance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">For the Last 13 Years</h2>
            <p className="text-lg text-gray-600 mb-4">
              We have strived to confront the crisis of knowledge facing Muslims by providing a diverse range of offerings to serve the believing community through authentic and reliable knowledge and guidance.
            </p>
            <p className="text-lg text-gray-600">
              Inspired by the Prophetic tradition of knowledge and service, we have helped to provide millions of Muslims with access to free Islamic knowledge through structured learning streams, answers service, podcasts, articles, and on-the-ground programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2008, the school offers authentic and reliable Islamic knowledge and spiritual guidance, helping Muslims practice their faith with confidence and clarity.
            </p>
            <blockquote className="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-4">
              "O my people! I do not ask you for any reward for this message. My reward is only from the One who created me. Will you not then understand?" (Quran 11:51)
            </blockquote>
          </div>
          <div>
            <Image
              src="/images/young.jpg"
              alt="Mission Seekers Guidance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/lecture.jpg"
              alt="Vision Seekers Guidance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              We envision a time wherein every town and city has access to reliable and authentic Islamic knowledge and guidance.
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-600 space-y-2">
              <li>Offers a reliable resource of Islamic knowledge at the highest level of quality and excellence.</li>
              <li>Strengthens the connection between qualified teachers and students to inspire confidence.</li>
              <li>Invites communities to the Prophetic call to serve and bring long-lasting benefit to the Ummah.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
