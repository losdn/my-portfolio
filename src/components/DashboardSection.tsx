import { motion } from "motion/react";

interface DashboardSectionProps {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}

export default function DashboardSection({ title, description, image, reversed = false }: DashboardSectionProps) {
  return (
    <div className={`relative flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-0`}>
      {/* Text Content */}
      <div className={`flex-1 z-20 space-y-8 ${reversed ? 'lg:text-right lg:-ml-24' : 'lg:text-left lg:-mr-24'}`}>
        <div className="space-y-2">
          <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent font-semibold text-sm tracking-wide uppercase">Projeto em Destaque</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
        </div>
        
        <motion.div 
          initial={{ x: reversed ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl relative lg:w-[115%] shadow-2xl"
        >
          <p className="text-white/70 leading-relaxed text-lg">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="flex-[1.2] w-full z-10">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover aspect-[16/10]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
