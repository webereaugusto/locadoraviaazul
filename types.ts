import { IconComponent } from './components/Icons';

export interface Feature {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface CarPlan {
  name: string;
  category: string;
  image: string;
  price: string;
  features: string[];
  popular?: boolean;
  uberBlack?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}