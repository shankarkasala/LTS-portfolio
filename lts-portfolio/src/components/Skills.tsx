import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiGit, SiGithub, SiGitlab,
  SiDocker, SiKubernetes, SiHelm, SiRancher
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'

const skills = {
  languages: [
    { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', level: 95, icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: SiCss3, color: '#1572B6' },
  ],
  frameworks: [
    { name: 'React', level: 90, icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', level: 80, icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', level: 75, icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', level: 70, icon: SiExpress, color: '#000000' },
  ],
  tools: [
    { name: 'VS Code', level: 95, icon: FaMicrosoft, color: '#007ACC' },
    { name: 'Git', level: 85, icon: SiGit, color: '#F05032' },
    { name: 'GitHub', level: 90, icon: SiGithub, color: '#181717' },
    { name: 'GitLab', level: 80, icon: SiGitlab, color: '#FCA121' },
  ],
  devops: [
    { name: 'Docker', level: 70, icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', level: 65, icon: SiKubernetes, color: '#326CE5' },
    { name: 'Helm Charts', level: 60, icon: SiHelm, color: '#0F1689' },
    { name: 'Rancher', level: 60, icon: SiRancher, color: '#0075A8' },
  ],
}

interface SkillBarProps {
  name: string;
  level: number;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const SkillBar = ({ name, level, Icon, color }: SkillBarProps) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" style={{ color }} />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm text-primary-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here are some of the technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-semibold mb-6 capitalize">{category}</h3>
              {items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  Icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 