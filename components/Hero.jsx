import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-[url('/artists/sample1.jpg')] bg-cover bg-center bg-no-repeat">
      <motion.h2 className="text-5xl font-bold text-white drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Find Talented Artists
      </motion.h2>
      <p className="text-purple-200 max-w-xl mx-auto text-lg">
        Commission unique NFTs directly from skilled creators on NadArt.
      </p>
    </section>
  );
}