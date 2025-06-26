import React from "react";
import { motion } from "framer-motion";

import romantique from "./assets/images/romantique.jpeg";
import repetitionCoupleArbreVert from "./assets/images/repetition_couple_arbre_vert.jpeg";
import regardRomantiqueBalustrade from "./assets/images/regard_romantique_balustrade.jpeg";
import poseEnPied from "./assets/images/pose_en_pied_bonne_symetrique.jpeg";
import momentTendreBleuCiel from "./assets/images/moment_tendre_bleu_ciel.jpeg";
import hero from "./assets/images/hero.jpeg";
import fondDoux from "./assets/images/fond_doux.jpeg";
import enMouvement from "./assets/images/en_mouvement.jpeg";
import enfantsVoitureTenueClasse from "./assets/images/enfants_voiture_tenue_classe.jpeg";
import enfant from "./assets/images/enfant.jpeg";
import dynamiqueFun from "./assets/images/dynamique_fun.jpeg";
import coupleChampNature from "./assets/images/couple_champ_nature.jpeg";

import './App.css';

const heroMainImage = regardRomantiqueBalustrade;
const heroSmallImage1 = romantique;
const heroSmallImage2 = hero;

const allAvailableImages = [
  fondDoux,
  enMouvement,
  dynamiqueFun,
  enfant,
  repetitionCoupleArbreVert,
  momentTendreBleuCiel,
  enfantsVoitureTenueClasse,
  coupleChampNature,
  poseEnPied, 
  regardRomantiqueBalustrade,
  hero,
  romantique
];

const galleryImagesData = [
  { src: allAvailableImages[0], alt: "Galerie image 1" },
  { src: allAvailableImages[1], alt: "Galerie image 2" },
  { src: allAvailableImages[2], alt: "Galerie image 3" },
  { src: allAvailableImages[3], alt: "Galerie image 4" },
  { src: allAvailableImages[4], alt: "Galerie image 5" },
  { src: allAvailableImages[5], alt: "Galerie image 6" },
  { src: allAvailableImages[6], alt: "Galerie image 7" },
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
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-pink-700 mb-4 tracking-tight drop-shadow-lg leading-tight"
              variants={itemVariants}
            >
              Jo Antsa & Mialy
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-xl text-gray-700 leading-relaxed mb-8"
              variants={itemVariants}
            >
              Merci de faire partie de ce moment inoubliable dans nos vies.
              Votre présence a rendu notre journée encore plus spéciale 💖
            </motion.p>
          </motion.div>

          {/* Images de la section Hero */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center h-[200px] md:h-[500px] md:mt-0">
            {/* L'image principale est réduite sur mobile pour laisser de la place */}
            <motion.img
              src={heroMainImage}
              alt="Couple principal"
              className="absolute w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white z-10"
              initial={{ opacity: 0, scale: 0.7, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.img
              src={heroSmallImage1}
              alt="Détail 1"
              className="absolute w-20 h-20 top-0 left-0 object-cover rounded-full shadow-xl border-2 border-white rotate-6 z-20
                         md:w-56 md:h-56 md:-top-4 md:left-1/2 md:right-0 md:transform md:-translate-x-1/2"
              initial={{ opacity: 0, scale: 0.7, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
            <motion.img
              src={heroSmallImage2}
              alt="Détail 2"
              className="absolute w-24 h-24 bottom-0 right-0 object-cover rounded-full shadow-xl border-2 border-white -rotate-12 z-20
                         md:w-64 md:h-64 md:-bottom-4 md:left-1/4 md:right-1/4 md:transform md:-translate-x-1/2"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* SECTION PHOTOS PERSONNELLES - Galerie Grille Responsive */}
      <section className="py-16 px-4 bg-white shadow-inner">
        <motion.h2
          className="text-4xl font-semibold text-center text-pink-700 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Souvenirs en images
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Colonne 1 (Mobile: pleine largeur, Desktop: 1/3) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <motion.img
              src={galleryImagesData[0].src}
              alt={galleryImagesData[0].alt}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />
            <motion.img
              src={galleryImagesData[1].src}
              alt={galleryImagesData[1].alt}
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            />
          </div>

          {/* Colonnes 2, 3 & 4 (Mobile: pleine largeur, Desktop: adapté) */}
          <div className="md:col-span-1 flex flex-col gap-6 mt-6 md:mt-12">
            {" "}
            {/* Décalage pour effet visuel */}
            <motion.img
              src={galleryImagesData[2].src}
              alt={galleryImagesData[2].alt}
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src={galleryImagesData[3].src}
              alt={galleryImagesData[3].alt}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            />
          </div>

          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-6 mt-6 md:mt-0">
            <motion.img
              src={galleryImagesData[4].src}
              alt={galleryImagesData[4].alt}
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            />
            <motion.img
              src={galleryImagesData[5].src}
              alt={galleryImagesData[5].alt}
              className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            />
            <motion.img
              src={galleryImagesData[6].src}
              alt={galleryImagesData[6].alt}
              className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-102 transition-transform duration-300"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
            />
          </div>
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
          Quelques mots…
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
        <p>© 2025 Jo Antsa & Mialy • Mankasitraka anareo rehetra 🌸</p>
        <p className="mt-2 text-sm text-gray-600">
          Namboarina manokana sy am-pitiavana ho an'ity andro tsy hay hadinoina.
        </p>
      </footer>
    </main>
  );
}

export default App;
