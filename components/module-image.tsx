import { JSX } from "react";

export function ModuleImage({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}): JSX.Element {
  return (
    <div className="my-6">
      <img src={src} alt={caption} className="rounded-lg w-full" />
      {caption && (
        <p className="text-sm text-center text-muted-foreground mt-2">
          {caption}
        </p>
      )}
    </div>
  );
}
