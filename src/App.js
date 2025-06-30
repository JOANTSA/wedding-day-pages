import React from "react";
import { motion } from "framer-motion";

import romantique from "./assets/images/romantique.jpeg";
import repetitionCoupleArbreVert from "./assets/images/repetition_couple_arbre_vert.jpeg";
import regardRomantiqueBalustrade from "./assets/images/regard_romantique_balustrade.jpeg";
import fondDoux from "./assets/images/fond_doux.jpeg";
import enMouvement from "./assets/images/en_mouvement.jpeg";
import enfantsVoitureTenueClasse from "./assets/images/enfants_voiture_tenue_classe.jpeg";
import enfant from "./assets/images/enfant.jpeg";
import dynamiqueFun from "./assets/images/dynamique_fun.jpeg";

import './App.css';

const heroMainImage = regardRomantiqueBalustrade;
const heroSmallImage1 = romantique;
const heroSmallImage2 = repetitionCoupleArbreVert;

const allAvailableImages = [
  fondDoux,
  enMouvement,
  dynamiqueFun,
  enfant,
  enfantsVoitureTenueClasse
];

const galleryImagesData = [
  { src: allAvailableImages[0], alt: "Galerie image 1" },
  { src: allAvailableImages[1], alt: "Galerie image 2" },
  { src: allAvailableImages[2], alt: "Galerie image 3" },
  { src: allAvailableImages[3], alt: "Galerie image 4" },
  { src: allAvailableImages[4], alt: "Galerie image 5" },
];


function App() {
  // Variants Framer Motion pour l'animation d'entrée du conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre les animations des enfants
      },
    },
  };

  // Variants Framer Motion pour les éléments de texte et titres
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Variants Framer Motion pour les images
  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <main className="bg-gradient-to-br from-pink-50 to-purple-50 text-gray-800 min-h-screen font-sans overflow-hidden">
      {/* SECTION HERO - Introduction avec mise en page sophistiquée */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
          
          {/* Texte et Bouton */}
          <motion.div
            className="md:w-1/2 text-center md:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Noms */}
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-pink-700 mb-4 tracking-tight drop-shadow-lg leading-tight"
              variants={itemVariants}
            >
              Jo Antsa & Mialy
            </motion.h1>

            {/* Badge Date */}
            <motion.div
              className="inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-full text-lg md:text-xl font-semibold shadow-md mb-4"
              variants={itemVariants}
            >
              💍 05 Juillet 2025
            </motion.div>

            {/* Message d'accueil */}
            <motion.p
              className="text-lg md:text-xl max-w-xl text-gray-700 leading-relaxed mt-2 mb-8"
              variants={itemVariants}
            >
              Misaotra indrindra amin'ny fanotronana. Faly sy mankasitraka izahay fa niara-paly taminay ianareo, ka 
              nahatonga ity andro ity ho tena andro tsy hay hadinoina 💖
            </motion.p>
          </motion.div>

          {/* Images de la section Hero */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center h-[200px] md:h-[500px] md:mt-0">
            <motion.img
              src={heroMainImage}
              alt="Couple principal"
              className="absolute w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white z-10"
              initial={{ opacity: 0, scale: 0.7, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <motion.img
              src={heroSmallImage1}
              alt="Détail 1"
              className="absolute w-20 h-20 top-0 left-0 object-cover rounded-full shadow-xl border-2 border-white rotate-6 z-20
md:w-56 md:h-56 md:-top-10 md:left-1/2 md:right-0 md:transform md:-translate-x-1/2"
              initial={{ opacity: 0, scale: 0.7, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <motion.img
              src={heroSmallImage2}
              alt="Détail 2"
              className="absolute w-24 h-24 bottom-0 right-0 object-cover rounded-full shadow-xl border-2 border-white -rotate-12 z-20
                        md:w-64 md:h-64 md:-bottom-10 md:left-1/4 md:right-1/4 md:transform md:-translate-x-1/2"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      </section>


      {/* SECTION PHOTOS PERSONNELLES - Galerie Grille Responsive */}
      <section className="py-12 px-4 bg-white">
  <motion.h2
    className="text-3xl md:text-4xl font-semibold text-center text-pink-700 mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
  >
    Sarinay 📸
  </motion.h2>

  {/* MOBILE: SCROLL HORIZONTAL */}
  <div className="block md:hidden overflow-x-auto">
    <div className="flex gap-4 w-max">
      {galleryImagesData.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={img.alt}
          className="w-64 h-80 object-cover rounded-xl shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  </div>

  {/* DESKTOP: GRID */}
  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {galleryImagesData.map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>
    ))}
  </div>
</section>


      {/* SECTION CITATION / SOUHAITS avec animations */}
      <section className="py-16 px-4 bg-pink-100 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-pink-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Vavolombelona Izy ✨
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-700 italic text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          « Ary ny amin'ilay noresahintsika, dia izaho sy ianao, indro, Jehovah no vavolombelona
          amiko sy aminao mandrakizay. » 
        </motion.p>
        <motion.p
          className="mt-6 text-gray-600 text-lg md:text-xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          — I Samoela 20 : 23
        </motion.p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-md py-8 bg-purple-200 text-gray-700 shadow-md">
        <p>© 2025 Jo Antsa & Mialy</p>
        <p className="mt-2 text-sm text-gray-600">
          Mankasitraka anareo rehetra 🌸
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Namboarina manokana sy am-pitiavana ho an'ity andro tsy hay hadinoina.
        </p>
      </footer>


    </main>
  );
}

export default App;
