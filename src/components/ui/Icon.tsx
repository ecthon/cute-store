import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

interface IconProps {
  icon: typeof StarIcon;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ 
  icon, 
  size = 18, 
  color = "currentColor", 
  strokeWidth = 1.5, 
  className = "" 
}: IconProps) {
  return (
    <HugeiconsIcon 
      icon={icon} 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
      className={className} 
    />
  );
} 