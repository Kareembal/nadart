import { useState } from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import CreatorSlider from "@/components/CreatorSlider";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert("Install MetaMask to connect wallet.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">
      <header className="flex justify-between items-center p-6 bg-black bg-opacity-80 backdrop-blur-lg fixed w-full z-50 border-b border-zinc-800">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          🎨 NadArt
        </motion.h1>
        <nav className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#gallery" className="hover:text-purple-400 transition">Gallery</a>
          <a href="#benefits" className="hover:text-purple-400 transition">Benefits</a>
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={connectWallet} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-xl shadow-xl transition">
            {account ? `🟢 ${account.slice(0, 6)}...` : "🔗 Connect Wallet"}
          </Button>
        </motion.div>
      </header>

      <main className="pt-24 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Hero />
          <GallerySection />
          <AboutSection />
          <BenefitsSection />
          <CreatorSlider />
          <Footer />
        </AnimatePresence>
      </main>
    </div>
  );
}