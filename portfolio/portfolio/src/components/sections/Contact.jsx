import { useState } from 'react';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition shadow-md dark:shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@example.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition shadow-md dark:shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-600 dark:bg-purple-500 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition shadow-md dark:shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-pink-600 dark:bg-pink-500 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg p-6 shadow-lg dark:shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg hover:bg-white/30 transition">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg hover:bg-white/30 transition">
                  <span className="text-white font-bold">in</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg hover:bg-white/30 transition">
                  <span className="text-white font-bold">tw</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg hover:bg-white/30 transition">
                  <span className="text-white font-bold">gh</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 rounded-lg p-8 shadow-lg dark:shadow-xl border border-gray-100 dark:border-slate-700/50">
            {submitted && (
              <div className="mb-6 bg-green-100 dark:bg-green-600/20 border border-green-500 dark:border-green-600 text-green-700 dark:text-green-400 p-4 rounded-lg">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-900 dark:text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-slate-900 dark:text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-900 dark:text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-slate-900 dark:text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-600 dark:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 text-white font-semibold py-3 transition-all">
                <Send size={20} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
