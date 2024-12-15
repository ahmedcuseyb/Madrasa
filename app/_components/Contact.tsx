// File: pages/contact.js
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // For icons

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <FaHome size={36} className="text-white" />,
      title: "Our Address",
      description: "Makkah\nAlmukarrramah Ave +252 Mogadishu, Somalia.",
    },
    {
      id: 2,
      icon: <FaEnvelope size={36} className="text-white" />,
      title: "Email Us",
      description: "info@stepup.so\nsupport@.stepup",
    },
    {
      id: 3,
      icon: <FaPhoneAlt size={36} className="text-white" />,
      title: "Call Us",
      description: "+252 613174074\n+252 616 147634",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-black rounded-xl p-8 text-center shadow-md border border-gray-700"
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-center">
              {contact.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {contact.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 whitespace-pre-line">{contact.description}</p>
          </div>
        ))}
      </div>

      <div className="gap-8  container mx-auto px-6 grid text-white font-semibold" >
            <form className="mt-6 space-y-4">
            <h2>Get in touch</h2>

              <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
                <div className='w-full md:w-1/2'>
                  <label htmlFor="full-name" className="block text-sm font-medium ">Full magc</label>
                  <input type="text" id="full-name" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent " placeholder="Name" />

                </div>
                <div className=' w-full md:w-1/2'>
                <label htmlFor="full-name" className="block text-sm font-medium">Email address</label>
                  <input type="email" id="email-address"  className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent" placeholder="Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <input type="text" id="subject" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent  " rows={4} placeholder="Message"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#c68958] hover:bg-[#303085] ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
    </div>
  );
}
