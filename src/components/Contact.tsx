import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github , Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Me',
      details: '+91 9572716927',
      action: 'tel:+919572716927',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'shashank748844@gmail.com',
      action: 'mailto:shashank748844@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Ranchi, India',
      action: '#',
    },
    {
      icon: MessageCircle,
      title: 'Messenger',
      details: 'Shashank_1_2',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-purple-700 text-lg mb-2">Get In Touch</p>
          <h2 className="text-5xl font-bold text-white">Contact Me</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-start space-x-4 p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-900 rounded-lg group-hover:bg-purple-700 transition-colors duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{info.title}</h4>
                    <p className="text-gray-400">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/_shashank_1_2/?igsh=eDNxejRpeGVnMGph#"
                  className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-white"><Instagram size={20} /></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-12-"
                  className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-white">in</span>
                </a>
                <a
                  href="https://github.com/shashank-1-2"
                  className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-white"><Github size={20} /></span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 transition-colors duration-300"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 transition-colors duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-900 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;