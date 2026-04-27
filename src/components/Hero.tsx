import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const profileImageUrl = "https://i.imgur.com/3oV3bxc.png";
  const fallbackUrl = "https://api.dicebear.com/7.x/initials/svg?seed=Lorraine&backgroundColor=A855F7";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-48 md:pt-[26rem] pb-20 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl w-full">
        
        <div className="relative">
          <motion.div 
            animate={{ 
              scale: [1.05, 1.15, 1.05],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-[-10px] bg-gradient-to-tr from-brand-purple via-brand-cyan to-brand-purple blur-[50px] rounded-full -z-10" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10 shadow-[0_0_40px_rgba(168,85,247,0.2)] bg-bg-dark/50 backdrop-blur-sm"
          >
            <img 
              src={imageError ? fallbackUrl : profileImageUrl} 
              alt="Lorraine Santos"
              className="w-full h-full object-cover relative z-20"
              referrerPolicy="no-referrer"
              onLoad={() => console.log("Foto de perfil carregada com sucesso")}
              onError={() => {
                console.error("Erro ao carregar foto de perfil do Imgur");
                setImageError(true);
              }}
            />
          </motion.div>

          <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-64 xl:-right-80 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative flex flex-col items-center lg:items-start"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-handwriting text-white text-xl md:text-2xl lg:text-3xl whitespace-nowrap mb-1">
                  Olá! Me chamo <span className="text-brand-purple font-bold">Lorraine Santos</span>
                </span>
                <svg className="w-12 h-10 md:w-16 md:h-12 text-white/60 -ml-4 lg:ml-0" viewBox="0 0 100 60" fill="none">
                  <path 
                    d="M80,5 Q40,5 15,45" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                  <path d="M10,35 L15,45 L25,40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left space-y-6 pt-12 md:pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Todos os dados contam uma{" "}
            <span className="relative inline-block bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
              história...
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 opacity-50"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  d="M0,5 Q50,0 100,5"
                  stroke="#A855F7"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-2xl md:text-3xl font-medium text-white/80"
          >
            <Typewriter
              options={{
                strings: ["Analista de Dados"],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-[#C084FC]",
                cursorClassName: "text-[#C084FC]"
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mt-32 md:mt-64 lg:mt-96 text-center space-y-4"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Seja muito bem-vindo(a) ao meu portfólio.</h2>
          <div className="w-20 h-1 bg-brand-purple/50 mx-auto rounded-full" />
          <p className="text-lg text-white/80 font-medium pt-2">
            Conheça a minha trajetória:
          </p>
        </div>
        <p className="text-xl text-white/60 leading-relaxed font-light">
          Graduanda em Ciência da Computação (previsão dez/2026), especializo-me em dados com ênfase em automação e IA com o objetivo de otimizar processos. Crio dashboards interativos facilitando a visualização de KPIs de forma clara e eficiente.
        </p>
      </motion.div>
    </div>
  );
}
