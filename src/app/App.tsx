import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Menu, X, GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';
import daddyImage from './assets/daddy.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-lg text-gray-900 tracking-tight"
            >
              T. Madhusudana Reddy
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {['home', 'about', 'research', 'publications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 capitalize text-sm font-medium tracking-wide"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'research', 'publications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded-md transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Prof. T. Madhusudana Reddy</span>
              </h1>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-medium text-gray-700">Professor of Chemistry</p>
                  <span className="ml-4 inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full">Electrochemical</span>
                </div>
                <p className="text-lg text-gray-600">Ph.D., PDF (France), UGC-Raman Fellow (USA)</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 font-medium mb-2">Electrochemical Research Laboratory</p>
                  <p className="text-gray-600">Department of Chemistry</p>
                  <p className="text-gray-600">S. V. U. College of Sciences</p>
                  <p className="text-gray-600">Sri Venkateswara University, Tirupati</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-md hover:shadow-xl transition-all duration-300 font-medium text-sm ring-1 ring-black/10"
                >
                  <GraduationCap size={18} />
                  Google Scholar
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium text-sm shadow-sm"
                >
                  <ExternalLink size={18} />
                  University Profile
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative w-80 md:w-96">
                <div className="rounded-lg shadow-xl overflow-hidden bg-white border border-gray-100">
                  <img 
                    src={daddyImage}
                    alt="Prof. T. Madhusudana Reddy"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '21', label: 'Years Research' },
              { value: '73', label: 'Publications' },
              { value: '10', label: 'Degrees Awarded' },
              { value: '19', label: 'Years Teaching' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  <span className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md">{stat.value}</span>
                </div>
                <div className="text-gray-600 font-medium text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Background</h2>
            <div className="w-12 h-1 bg-gray-900" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              Prof. T. Madhusudana Reddy is a distinguished Professor in the Department of Chemistry at Sri Venkateswara University, Tirupati, Andhra Pradesh, India. He obtained his M.Sc degree in 1999 with Physical Chemistry as specialization and later carried his research on "Chemically modified electrodes" for obtaining his Ph.D degree in 2005.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Prof. Reddy teaches Electrochemistry to PG students, with research focus in electrochemical sensors and biosensors. He has published 73 research articles in international journals and brings 21 years of research and 19 years of teaching experience.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              During 2005-2007, he served as Postdoctoral Researcher at CNRS, Université de Bretagne Occidentale, Brest, France. In 2015-2016, the UGC awarded him a Raman Fellowship to conduct research at the University of Minnesota, Minneapolis, USA.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              He has successfully completed two major research projects (UGC-MRP and DST-Fast Track Project) and has participated in international conferences in France, Spain, and the USA. Under his guidance, 9 Ph.D and 1 M.Phil degrees have been awarded, with 7 Ph.D scholars and 2 M.Phil students currently pursuing their degrees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Research Interests</h2>
            <div className="w-12 h-1 bg-gray-900" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Electrochemical Sensors',
                desc: 'Development of novel electrochemical sensors for detection of environmental pollutants and biomarkers.'
              },
              {
                title: 'Biosensors',
                desc: 'Design and fabrication of biosensors for medical diagnostics and food safety applications.'
              },
              {
                title: 'Battery Materials',
                desc: 'Research on advanced materials for battery applications and energy storage systems.'
              },
              {
                title: 'Nanomaterials',
                desc: 'Synthesis and characterization of nanomaterials for electrochemical applications.'
              },
              {
                title: 'Environmental Analysis',
                desc: 'Electrochemical methods for environmental monitoring and pollution control.'
              },
              {
                title: 'Pharmaceutical Analysis',
                desc: 'Electroanalytical techniques for pharmaceutical drug analysis and quality control.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 border border-gray-200 border-l-4 border-gray-900 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Background Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Academic Background</h2>
            <div className="w-12 h-1 bg-gray-900" />
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  title: 'Professor',
                  subtitle: 'Department of Chemistry, Sri Venkateswara University',
                  location: 'Tirupati, Andhra Pradesh, India',
                  extra: 'Electrochemical Research Laboratory',
                  year: 'Present'
                },
                {
                  title: 'UGC-Raman Fellow',
                  subtitle: 'Department of Chemistry, University of Minnesota',
                  location: 'Minneapolis, USA',
                  year: '2015-2016'
                },
                {
                  title: 'Postdoctoral Researcher',
                  subtitle: 'CNRS, UMR 6521, Université de Bretagne Occidentale',
                  location: 'Brest, France',
                  extra: 'Chimie, Electrochimie Moléculaires et Chimie Analytique',
                  year: '2005-2007'
                },
                {
                  title: 'Doctor of Philosophy (Chemistry)',
                  subtitle: 'Sri Venkateswara University',
                  location: 'Research on "Chemically modified electrodes"',
                  year: '2005'
                },
                {
                  title: 'Master of Science (Chemistry)',
                  subtitle: 'Sri Venkateswara University',
                  location: 'Specialization in Physical Chemistry',
                  year: '1999'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-l-4 border-gray-900 pl-6 p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1 text-sm">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm">{item.location}</p>
                  {item.extra && <p className="text-gray-600 text-sm mt-2">{item.extra}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Publications & Research</h2>
            <div className="w-12 h-1 bg-gray-900" />
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Publications</h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                Prof. T. Madhusudana Reddy has published 73 research articles in leading international journals in the field of electrochemistry, analytical chemistry, and nanomaterials. His work spans electrochemical sensors, biosensors, and advanced materials.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
                >
                  <GraduationCap size={16} />
                  Google Scholar
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  <ExternalLink size={16} />
                  University Profile
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Projects</h3>
              <div className="space-y-4">
                {[
                  { name: 'UGC Major Research Project', status: 'Completed' },
                  { name: 'DST-Fast Track Project', status: 'Completed' }
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">{project.name}</p>
                      <p className="text-gray-600 text-sm">{project.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Guidance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-5xl font-bold text-gray-900 mb-2">10</p>
                  <p className="text-gray-700 font-medium mb-1">Degrees Awarded</p>
                  <p className="text-gray-600 text-sm">9 Ph.D & 1 M.Phil</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-gray-900 mb-2">9</p>
                  <p className="text-gray-700 font-medium mb-1">Currently Guiding</p>
                  <p className="text-gray-600 text-sm">7 Ph.D & 2 M.Phil scholars</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <div className="w-12 h-1 bg-gray-900" />
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-1">Phone</p>
                    <a href="tel:+919441088587" className="text-gray-900 hover:text-gray-600 font-semibold transition-colors">
                      +91-9441088587
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-1">Email</p>
                    <a href="mailto:tmsreddysvu@gmail.com" className="text-gray-900 hover:text-gray-600 font-semibold break-all transition-colors">
                      tmsreddysvu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-2">Office Address</p>
                    <p className="text-gray-900 font-medium">Electrochemical Research Laboratory</p>
                    <p className="text-gray-600 text-sm">Department of Chemistry</p>
                    <p className="text-gray-600 text-sm">S. V. U. College of Sciences</p>
                    <p className="text-gray-600 text-sm">Sri Venkateswara University</p>
                    <p className="text-gray-600 text-sm">Tirupati - 517502, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-md hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-gray-900" />
                    <span className="font-medium text-gray-900">Google Scholar</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-md hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-gray-900" />
                    <span className="font-medium text-gray-900">University Profile</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">+91-9441088587</p>
              <p className="text-gray-400 text-sm">tmsreddysvu@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">Location</h4>
              <p className="text-gray-400 text-sm">Sri Venkateswara University</p>
              <p className="text-gray-400 text-sm">Tirupati, India</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-white mb-4">Links</h4>
              <a href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors block mb-2">Google Scholar</a>
              <a href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors block">University Profile</a>
            </motion.div>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} T. Madhusudana Reddy. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}