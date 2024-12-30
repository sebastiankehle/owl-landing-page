import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorCardProps {
  title: string;
  description: string;
}

export function ErrorCard({ title, description }: ErrorCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-background/50 p-8 backdrop-blur">
      <ExclamationTriangleIcon className="h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
