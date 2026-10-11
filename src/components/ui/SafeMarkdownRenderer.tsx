import React from 'react';

export interface SafeMarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Safe, pure-React AST Markdown Renderer.
 * Parses headings, lists, code blocks, quotes, and paragraphs directly into safe React nodes.
 */
export const SafeMarkdownRenderer: React.FC<SafeMarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key} className="my-4 space-y-2 list-disc list-inside text-titanium-300">
          {listBuffer.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  const flushCode = (key: string) => {
    if (codeBuffer.length > 0) {
      elements.push(
        <pre
          key={key}
          className="my-5 p-4 rounded-xl bg-background border border-surface-border font-mono text-xs text-titanium-200 overflow-x-auto"
        >
          <code>{codeBuffer.join('\n')}</code>
        </pre>
      );
      codeBuffer = [];
    }
  };

  const renderInline = (text: string): React.ReactNode => {
    // Process bold (**text**) and code (`code`)
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(text.substring(lastIdx, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-semibold text-white">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code
            key={match.index}
            className="px-1.5 py-0.5 rounded bg-surface-border text-brand-crimson font-mono text-[13px]"
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < text.length) {
      parts.push(text.substring(lastIdx));
    }

    return parts.length > 0 ? parts : text;
  };

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();

    // Check code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        flushCode(`code-${idx}`);
        inCodeBlock = false;
      } else {
        flushList(`list-before-code-${idx}`);
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(rawLine);
      return;
    }

    // Horizontal Rule
    if (line === '---' || line === '***') {
      flushList(`list-${idx}`);
      elements.push(<hr key={`hr-${idx}`} className="my-8 border-surface-border" />);
      return;
    }

    // Headings
    if (line.startsWith('### ')) {
      flushList(`list-${idx}`);
      elements.push(
        <h3 key={`h3-${idx}`} className="text-lg sm:text-xl font-bold text-white tracking-tight mt-8 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
      return;
    }

    if (line.startsWith('## ')) {
      flushList(`list-${idx}`);
      elements.push(
        <h2 key={`h2-${idx}`} className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-10 mb-4 pb-2 border-b border-surface-border/60">
          {renderInline(line.slice(3))}
        </h2>
      );
      return;
    }

    if (line.startsWith('# ')) {
      flushList(`list-${idx}`);
      elements.push(
        <h1 key={`h1-${idx}`} className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-12 mb-4">
          {renderInline(line.slice(2))}
        </h1>
      );
      return;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      flushList(`list-${idx}`);
      elements.push(
        <blockquote
          key={`quote-${idx}`}
          className="my-4 pl-4 border-l-2 border-brand-crimson text-titanium-300 italic text-sm"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    // List item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      listBuffer.push(line.slice(2));
      return;
    }

    // Numbered list item
    const numMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      flushList(`list-${idx}`);
      elements.push(
        <div key={`num-${idx}`} className="flex items-start gap-2.5 my-2 text-titanium-300 text-sm">
          <span className="font-mono text-brand-crimson font-bold shrink-0">{numMatch[1]}.</span>
          <div className="leading-relaxed">{renderInline(numMatch[2])}</div>
        </div>
      );
      return;
    }

    // Regular paragraph
    if (line.length > 0) {
      flushList(`list-${idx}`);
      elements.push(
        <p key={`p-${idx}`} className="my-3 text-sm sm:text-base text-titanium-300 leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
  });

  flushList('final-list');
  flushCode('final-code');

  return <div className={`prose-container ${className}`}>{elements}</div>;
};
