
import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="glass-card rounded-[32px] overflow-hidden border border-white/5 transition-all hover:border-primary/20 group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={speaker.image} 
          alt={speaker.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
        
        {speaker.isCoach && (
          <div className="absolute top-4 left-4 bg-primary px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <span className="material-icons-round text-white text-[12px]">verified</span>
            <span className="text-[10px] font-black tracking-widest text-white uppercase">Coach Đồng Hành</span>
          </div>
        )}
        
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl font-black mb-1 leading-tight">{speaker.name}</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{speaker.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <ul className="space-y-2.5">
          {speaker.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="material-icons-round text-primary text-[14px] mt-0.5">check_circle</span>
              <span className="text-[11px] text-slate-400 font-medium leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpeakerCard;
