import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu, Info, Mail } from 'lucide-react';

// Helper for smooth scrolling
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-gray-100 font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 tracking-tight"
          >
            Café Nova
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex space-x-8"
          >
            <motion.button variants={fadeIn} className="text-gray-300 hover:text-sky-300 transition-colors" onClick={() => scrollToSection('home')}>Home</motion.button>
            <motion.button variants={fadeIn} className="text-gray-300 hover:text-sky-300 transition-colors" onClick={() => scrollToSection('about')}>About</motion.button>
            <motion.button variants={fadeIn} className="text-gray-300 hover:text-sky-300 transition-colors" onClick={() => scrollToSection('menu')}>Menu</motion.button>
            <motion.button variants={fadeIn} className="text-gray-300 hover:text-sky-300 transition-colors" onClick={() => scrollToSection('contact')}>Contact</motion.button>
          </motion.div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center py-24 md:py-32 overflow-hidden">
          {/* Background image/effect */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-950 via-[#0a0a0a] to-[#030303] opacity-80"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-4xl mx-auto px-6"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500"
            >
              Experience the Art of Coffee
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              Discover exquisite flavors and the perfect brew at Café Nova, where every sip is a journey.
            </motion.p>
            <motion.button
              variants={fadeIn}
              className="px-10 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => scrollToSection('menu')}
            >
              Explore Our Menu
            </motion.button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-blue-950/20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                Our Passion, Your Perfect Cup
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed text-lg mb-6">
                At Café Nova, we meticulously source the finest beans from sustainable farms around the globe. Our master roasters then carefully craft each batch to unlock complex aromas and rich, balanced flavors. We believe coffee is more than a drink—it's an experience.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed text-lg">
                From the vibrant acidity of our Ethiopian single origin to the deep, chocolatey notes of our house blend, every cup tells a story of dedication and craftsmanship. Join us and taste the difference.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/50"
            >
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce7103ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee beans and brewing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 md:py-32 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500"
            >
              Our Signature Brews
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {/* Coffee Item 1 */}
              <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Coffee className="w-16 h-16 text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-400">Espresso Elegance</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  A rich, bold shot crafted from our premium house blend, perfect for a quick pick-me-up.
                </p>
                <span className="text-3xl font-bold text-sky-200">$4.00</span>
              </motion.div>

              {/* Coffee Item 2 */}
              <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Menu className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-400">Latte Love</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Smooth espresso harmoniously blended with steamed milk and a delicate layer of foam.
                </p>
                <span className="text-3xl font-bold text-purple-200">$5.50</span>
              </motion.div>

              {/* Coffee Item 3 */}
              <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Info className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">Cold Brew Bliss</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Slow-steeped for 24 hours, delivering a naturally sweet, low-acidity coffee experience.
                </p>
                <span className="text-3xl font-bold text-cyan-200">$5.00</span>
              </motion.div>

               {/* Coffee Item 4 */}
               <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Coffee className="w-16 h-16 text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-indigo-400">Mocha Dream</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  A delightful blend of espresso, rich chocolate, and steamed milk, topped with whipped cream.
                </p>
                <span className="text-3xl font-bold text-violet-200">$6.00</span>
              </motion.div>

               {/* Coffee Item 5 */}
               <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Coffee className="w-16 h-16 text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">Matcha Green Tea Latte</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Premium ceremonial grade matcha with steamed milk, a vibrant and energizing alternative.
                </p>
                <span className="text-3xl font-bold text-teal-200">$6.50</span>
              </motion.div>

               {/* Coffee Item 6 */}
               <motion.div
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 group shadow-md hover:shadow-lg shadow-blue-900/30"
              >
                <Coffee className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">Artisan Pour Over</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Expertly brewed single-origin coffee, highlighting its unique flavor profile. Ask for daily selection.
                </p>
                <span className="text-3xl font-bold text-cyan-200">$7.00</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-blue-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500"
            >
              Visit Us & Taste the Magic
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-gray-300 leading-relaxed text-lg mb-12 max-w-2xl mx-auto"
            >
              Located in the heart of the city, Café Nova awaits you. Come in for a cozy ambiance, friendly faces, and unforgettable coffee.
            </motion.p>
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="px-12 py-5 rounded-xl text-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="inline-block mr-3" /> Get Directions
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Café Nova. All rights reserved.</p>
          <p className="mt-2">Crafted with passion, served with love.</p>
        </div>
      </footer>
    </div>
  );
}
