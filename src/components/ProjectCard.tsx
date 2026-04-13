import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative w-full overflow-hidden rounded-3xl group"
    >
      {/* Media */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Overlap Content */}
      <div className="relative z-10 -mt-16 mx-6 mb-6 p-8 rounded-2xl glass">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-semibold text-white/50 px-2 py-1 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
