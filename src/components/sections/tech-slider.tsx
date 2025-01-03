"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import {
  SiUnrealengine,
  SiPython,
  SiTensorflow,
  SiRos,
  SiOpencv,
  SiNvidia,
  SiJupyter,
  SiPytorch,
  SiArduino,
  SiCplusplus,
} from "react-icons/si";

const technologies = [
  {
    icon: SiUnrealengine,
    name: "Unreal Engine",
    href: "https://www.unrealengine.com/",
  },
  {
    icon: SiPython,
    name: "Python",
    href: "https://www.python.org/",
  },
  {
    icon: SiTensorflow,
    name: "TensorFlow",
    href: "https://www.tensorflow.org/",
  },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiRos, name: "ROS" },
  { icon: SiOpencv, name: "OpenCV" },
  { icon: SiNvidia, name: "NVIDIA CUDA" },
  { icon: SiJupyter, name: "Jupyter" },
  { icon: SiArduino, name: "Arduino" },
  { icon: SiCplusplus, name: "C++" },
];

export function TechSlider() {
  return (
    <div className="py-20">
      <InfiniteSlider duration={30} durationOnHover={120} className="py-8">
        {technologies.map(({ icon: Icon, name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex items-center justify-center px-8",
              "text-muted-foreground/60 hover:text-foreground",
              "transition-colors duration-200",
            )}
          >
            <Icon className="h-8 w-8" />
            <span className="absolute -bottom-6 scale-0 rounded-md bg-background px-3 py-1 text-xs shadow-sm transition-transform group-hover:scale-100">
              {name}
            </span>
          </a>
        ))}
      </InfiniteSlider>
    </div>
  );
}
