"use client"

import { motion } from 'framer-motion';
import { Users, Lightbulb, ShieldCheck, Heart, UserPlus, Leaf } from 'lucide-react';

const goalData = [
  {
    title: 'Customer',
    desc: 'Unyielding support & satisfaction through tailored solutions.',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    title: 'New Opportunity',
    desc: 'Constantly expanding boundaries by looking for innovation.',
    icon: Lightbulb,
    color: 'bg-yellow-500'
  },
  {
    title: 'Discipline',
    desc: 'Maintaining business integrity through strategic focus.',
    icon: ShieldCheck,
    color: 'bg-red-500'
  },
  {
    title: 'Diversity',
    desc: 'Promoting a culture that encourages unique perspectives.',
    icon: Heart,
    color: 'bg-pink-500'
  },
  {
    title: 'Teamwork',
    desc: 'Rewarding collective success and self-driven initiative.',
    icon: UserPlus,
    color: 'bg-teal-500'
  },
  {
    title: 'Environment',
    desc: 'Committed to excellence in healthy, green operations.',
    icon: Leaf,
    color: 'bg-green-500'
  },
];

export function Goals() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-24">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold dark:text-white text-4xl">Company Goal</h2>
          <p className="mx-auto max-w-2xl text-slate-500">Our roadmap for excellence is built on these foundational pillars of growth and responsibility.</p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {goalData.map((goal, idx) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-start gap-6 bg-white dark:bg-slate-800 shadow-sm p-8 border border-slate-100 dark:border-slate-700 rounded-2xl"
            >
              <div className={`p-4 rounded-xl text-white ${goal.color}`}>
                <goal.icon size={28} />
              </div>
              <div>
                <h3 className="mb-2 font-bold dark:text-white text-xl">{goal.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{goal.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
