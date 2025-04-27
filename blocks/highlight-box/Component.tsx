import { RichTextField } from "payload";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  Info,
  Search,
  BrainCircuit,
} from "lucide-react";
import React from "react";
import RichText from "@/components/RichText";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";

type BoxType = "good-to-know" | "research" | "reflection";

export type HighlightBoxProps = {
  title?: string;
  type?: BoxType;
  content?: RichTextField;
  blockType: "highlightbox";
};

type Props = HighlightBoxProps & {
  className?: string;
};

export const HighlightBox: React.FC<Props> = ({
  className,
  title,
  type,
  content,
}) => {
  const icon = (type: BoxType) => {
    return type === "good-to-know" ? (
      <Info style={{
        height: '1rem',
        width: '1rem'
      }} />
    ) : type === "research" ? (
      <Search style={{
        height: '1rem',
        width: '1rem'
      }} />
    ) : type === "reflection" ? (
      <BrainCircuit style={{
        height: '1rem',
        width: '1rem'
      }} />
    ) : null;
  };
  return (
    <div style={{
      backgroundColor: '#f3f4f6',
      borderLeft: '4px solid #9ca3af',
      borderRadius: '0.5rem',
      padding: '1.25rem',
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden'
    }}>
      <h4 style={{
        color: '#1f2937',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontWeight: 500
      }}>
        <div style={{
          backgroundColor: '#6b7280',
          padding: '0.375rem',
          borderRadius: '9999px',
          color: 'white'
        }}>
          {icon(type as BoxType)}
        </div>
        {title}
      </h4>
      <p style={{
        marginTop: '0.5rem',
      }}>
        <RichText
          data={
            content as unknown as SerializedEditorState<SerializedLexicalNode>
          }
        />
      </p>
    </div>
  );
};
