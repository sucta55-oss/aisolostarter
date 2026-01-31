
import React from 'react';
import { DayPlan } from '../types';

interface DayCardProps {
  plan: DayPlan;
  isActive?: boolean;
}

const DayCard: React.FC<DayCardProps> = ({ plan, isActive }) => {
  return (
    <div className={`glass-card p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 ${isActive ? 'border-primary/40 bg-primary/5' : 'hover:bg-white/5'}`}>
      <div className={`${isActive ? 'bg-primary' : 'bg-primary/20'} p-3 rounded-xl shadow-lg transition-colors`}>
        <span className={`material-icons-round ${isActive ? 'text-white' : 'text-primary'}`}>
          {plan.icon}
        </span>
      </div>
      <div>
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
          {plan.day}
        </span>
        <h3 className="font-bold text-lg mb-1 mt-0.5">{plan.title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-3">
          {plan.description}
        </p>
        <ul className="space-y-1">
          {plan.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[10px] text-slate-500">
              <span className="w-1 h-1 bg-primary rounded-full" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayCard;
