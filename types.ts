
export interface DayPlan {
  day: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Benefit {
  title: string;
  subtitle: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Speaker {
  name: string;
  role: string;
  image: string;
  details: string[];
  isCoach?: boolean;
}
