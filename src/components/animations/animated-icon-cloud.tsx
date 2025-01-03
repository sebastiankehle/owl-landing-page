import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  // Game Engines & 3D
  "unrealengine",
  "unity",
  "blender",
  "threedotjs",

  // Programming Languages
  "python",
  "cplusplus",
  "cmake",

  // AI & Computer Vision
  "tensorflow",
  "pytorch",
  "opencv",
  "nvidia",
  "jupyter",

  // Robotics & Hardware
  "arduino",
  "raspberrypi",
  "ros",

  // Development Tools
  "visualstudio",
  "git",
  "docker",
  "linux",

  // CAD & Design
  "autodesk",
  "sketchup",

  // Version Control & Project Management
  "github",
  "gitlab",
  "jira",
];

export function AnimatedIconCloud() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
