import { LucideIcon } from "lucide-react";

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepProps {
  number: string;
  title: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
