import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Menu, X, GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-semibold text-lg text-blue-900"
            >
              Prof. T. Madhusudana Reddy
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'research', 'publications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 capitalize relative group"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
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
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="mb-6">
                <span className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                  Professor of Chemistry
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Prof. T. Madhusudana Reddy
              </h1>
              <div className="space-y-3 text-gray-700 mb-8">
                <p className="text-xl font-semibold text-gray-800">Ph.D., PDF (France), UGC-Raman Fellow (USA)</p>
                <p className="text-lg text-blue-700 font-semibold">Electrochemical Research Laboratory</p>
                <p className="text-gray-600 text-lg">Department of Chemistry</p>
                <p className="text-gray-600">S. V. U. College of Sciences</p>
                <p className="text-gray-600">Sri Venkateswara University</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <GraduationCap size={20} />
                  Google Scholar
                </a>
                <a
                  href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  University Profile
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1659353887617-8cf154b312c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzb3IlMjBzY2llbnRpc3QlMjBjaGVtaXN0cnklMjBsYWIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNTI2NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Prof. T. Madhusudana Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 w-28 h-28 bg-yellow-400 rounded-full opacity-80 blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-20 h-20 bg-green-400 rounded-full opacity-60 blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '21', label: 'Years Research', icon: '🔬' },
              { value: '73', label: 'Publications', icon: '📚' },
              { value: '10', label: 'Degrees Awarded', icon: '🎓' },
              { value: '19', label: 'Years Teaching', icon: '👨‍🏫' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              About
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Prof. T. Madhusudana Reddy is a distinguished Professor in the Department of Chemistry at Sri Venkateswara University, Tirupati, Andhra Pradesh, India. He obtained his M.Sc degree in 1999 with Physical Chemistry as specialization and later carried his research on "Chemically modified electrodes" for obtaining his Ph.D degree in the year 2005.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Prof. Reddy teaches Electrochemistry to the PG students and his research mainly focuses in the field of Electrochemistry. Presently he is working on Electrochemical sensors and Biosensors. He has published 73 research articles in international journals and has 21 years of research and 19 years of teaching experience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                During 2005-2007, he worked as Postdoctoral Researcher at "Chimie, Electrochimie Moléculaires et Chimie Analytique" CNRS, UMR 6521, Université de Bretagne Occidentale, Brest, France. During 2015-2016, he was awarded with Raman Fellowship by UGC to visit USA to carry out research at the Department of Chemistry, University of Minnesota, Minneapolis, USA.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                He visited France, Spain and USA for attending conferences. He has successfully completed two major research projects (UGC-MRP and DST-Fast Track Project).
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Under his guidance 9 Ph.D's and 1 M.Phil. degrees were awarded. Presently seven Ph.D scholars and two M.Phil. students are working for their degrees under his supervision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Research Interests
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Electrochemical Sensors',
                desc: 'Development of novel electrochemical sensors for detection of environmental pollutants and biomarkers.',
                gradient: 'from-blue-50 to-blue-100',
                iconBg: 'bg-blue-600'
              },
              {
                icon: '🧬',
                title: 'Biosensors',
                desc: 'Design and fabrication of biosensors for medical diagnostics and food safety applications.',
                gradient: 'from-green-50 to-green-100',
                iconBg: 'bg-green-600'
              },
              {
                icon: '🔋',
                title: 'Battery Materials',
                desc: 'Research on advanced materials for battery applications and energy storage systems.',
                gradient: 'from-purple-50 to-purple-100',
                iconBg: 'bg-purple-600'
              },
              {
                icon: '⚛️',
                title: 'Nanomaterials',
                desc: 'Synthesis and characterization of nanomaterials for electrochemical applications.',
                gradient: 'from-yellow-50 to-yellow-100',
                iconBg: 'bg-yellow-600'
              },
              {
                icon: '🌍',
                title: 'Environmental Analysis',
                desc: 'Electrochemical methods for environmental monitoring and pollution control.',
                gradient: 'from-red-50 to-red-100',
                iconBg: 'bg-red-600'
              },
              {
                icon: '💊',
                title: 'Pharmaceutical Analysis',
                desc: 'Electroanalytical techniques for pharmaceutical drug analysis and quality control.',
                gradient: 'from-indigo-50 to-indigo-100',
                iconBg: 'bg-indigo-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-7 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200`}
              >
                <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-white text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Background Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Academic Background
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: 'P',
                  title: 'Professor',
                  subtitle: 'Department of Chemistry, Sri Venkateswara University',
                  location: 'Tirupati, Andhra Pradesh, India',
                  extra: 'Electrochemical Research Laboratory',
                  color: 'blue'
                },
                {
                  icon: 'RF',
                  title: 'UGC-Raman Fellow (2015-2016)',
                  subtitle: 'Department of Chemistry, University of Minnesota',
                  location: 'Minneapolis, USA',
                  color: 'green'
                },
                {
                  icon: 'PDF',
                  title: 'Postdoctoral Researcher (2005-2007)',
                  subtitle: 'CNRS, UMR 6521, Université de Bretagne Occidentale',
                  location: 'Brest, France',
                  extra: 'Chimie, Electrochimie Moléculaires et Chimie Analytique',
                  color: 'purple'
                },
                {
                  icon: 'PhD',
                  title: 'Doctor of Philosophy (2005)',
                  subtitle: 'Chemistry',
                  location: 'Research on "Chemically modified electrodes"',
                  color: 'yellow'
                },
                {
                  icon: 'MSc',
                  title: 'Master of Science (1999)',
                  subtitle: 'Chemistry',
                  location: 'Specialization in Physical Chemistry',
                  color: 'orange'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border-l-4 border-${item.color}-600 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className={`text-${item.color}-600 text-lg font-bold`}>{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-700 mb-1">{item.subtitle}</p>
                      <p className="text-gray-600 text-sm">{item.location}</p>
                      {item.extra && <p className="text-gray-600 text-sm mt-1">{item.extra}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Publications & Research Projects
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Research Publications</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Prof. T. Madhusudana Reddy has published 73 research articles in leading international journals in the field of electrochemistry, analytical chemistry, and nanomaterials.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                His research papers have been cited numerous times, reflecting the significant impact of his work on the scientific community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://scholar.google.com/citations?user=fDrpWdkAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <GraduationCap size={20} />
                  View on Google Scholar
                </a>
                <a
                  href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  Complete Publications
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-green-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Major Research Projects</h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: 'UGC Major Research Project', status: 'Successfully completed' },
                  { name: 'DST-Fast Track Project', status: 'Successfully completed' }
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{project.name}</p>
                      <p className="text-green-700 text-sm font-medium">{project.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                🎓 Student Guidance
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-5xl font-bold text-purple-600 mb-3">10</p>
                  <p className="text-gray-900 font-bold text-lg">Degrees Awarded</p>
                  <p className="text-sm text-gray-600 mt-2">9 Ph.D & 1 M.Phil.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-5xl font-bold text-purple-600 mb-3">9</p>
                  <p className="text-gray-900 font-bold text-lg">Currently Guiding</p>
                  <p className="text-sm text-gray-600 mt-2">7 Ph.D & 2 M.Phil. scholars</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                🌍 International Conferences
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Prof. Reddy has participated in several international conferences, visiting France, Spain, and the USA to present his research and collaborate with international researchers in the field of electrochemistry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Contact Information
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-6 text-2xl">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-medium">Phone</p>
                    <a href="tel:+919441088587" className="text-gray-900 hover:text-blue-600 font-semibold text-lg">
                      +91-9441088587
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-medium">Email</p>
                    <a href="mailto:tmsreddysvu@gmail.com" className="text-gray-900 hover:text-green-600 font-semibold break-all">
                      tmsreddysvu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <ExternalLink size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-medium">University Profile</p>
                    <a
                      href="https://svuniversity.edu.in/college_of_science/dr-t-madhusudana-reddy-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-purple-600 font-semibold"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-6 text-2xl">Office Address</h3>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin size={22} className="text-white" />
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p className="font-bold mb-3 text-lg text-gray-900">Electrochemical Research Laboratory</p>
                  <p className="mb-1">Department of Chemistry</p>
                  <p className="mb-1">S. V. U. College of Sciences</p>
                  <p className="mb-1">Sri Venkateswara University</p>
                  <p className="mb-1 font-semibold text-gray-900">Tirupati - 517502</p>
                  <p className="font-semibold text-gray-900">Andhra Pradesh, INDIA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-2"
            >
              © {new Date().getFullYear()} Prof. T. Madhusudana Reddy. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm"
            >
              Electrochemical Research Laboratory | Sri Venkateswara University
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}