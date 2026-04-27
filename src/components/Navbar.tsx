import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = "https://i.imgur.com/JNkyYqU.png";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center pointer-events-auto"
      >
        {!logoError ? (
          <div className="relative group">
            <img 
              src={logoUrl} 
              alt="Logo losdn" 
              className="h-12 md:h-14 w-auto object-contain relative z-10"
              referrerPolicy="no-referrer"
              onLoad={() => console.log("Logo carregada com sucesso")}
              onError={() => {
                console.error("Erro ao carregar logo do Imgur");
                setLogoError(true);
              }}
            />
          </div>
        ) : (
          <span className="logo-fallback text-white/30 font-bold tracking-[0.3em] text-[12px] uppercase">
            LOSDN
          </span>
        )}
      </motion.div>
    </nav>
  );
}
