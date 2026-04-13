import { motion } from "motion/react";
import { 
  Database, 
  Code2, 
  BarChart3, 
  Figma, 
  Cpu, 
  Zap 
} from "lucide-react";

const skills = [
  { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  { name: "SQL", icon: <Database className="w-5 h-5" /> },
  { name: "Power BI", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Integração com IA", icon: <Cpu className="w-5 h-5" /> },
];

export default function Skills() {
  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="glass flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 transition-all duration-300"
          >
            <div className="text-brand-purple">
              {skill.icon}
            </div>
            <span className="text-white/80 font-medium tracking-wide">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
