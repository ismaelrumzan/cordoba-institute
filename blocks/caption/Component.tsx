import React from "react";

export type CaptionBlockProps = {
  title?: string;
  alignment?: "start" | "center" | "end";
  blockType: "captionblock";
};

type Props = CaptionBlockProps & {
  className?: string;
};

export const CaptionBlock: React.FC<Props> = ({
  className,
  title,
  alignment,
}) => {
  return (
    <div className={`flex ${alignment} text-sm  w-full`}>
      <div className="text-gray-400">{title}</div>
    </div>
  );
};
