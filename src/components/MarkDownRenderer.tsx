import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { useTheme } from "../theme/ThemeContext";

type PropType = {
  articlePath: string;
};

const MarkdownRenderer: React.FC<PropType> = ({ articlePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(articlePath);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error(
          `Error fetching Markdown content from ${articlePath}`,
          error
        );
      }
    };

    fetchMarkdownContent();
  }, [articlePath]);

  return (
    <ReactMarkdown
      className={`prose max-w-full text-black ${
        isDarkMode ? "dark:bg-slate-900 dark:text-slate-200" : ""
      } `}
      remarkPlugins={[remarkGfm, rehypeHighlight]}
      components={{
        // Customize styles for specific elements
        p: ({ node, ...props }) => <p className="" {...props} />,
        h1: ({ node, ...props }) => (
          <h1
            className={`text-black ${isDarkMode ? "dark:text-slate-200" : ""}`}
            {...props}
          >
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2
            className={`text-black ${isDarkMode ? "dark:text-slate-200" : ""}`}
            {...props}
          >
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3
            className={`text-black ${isDarkMode ? "dark:text-slate-200" : ""}`}
            {...props}
          >
            {props.children}
          </h3>
        ),
        strong: ({ children, ...props }) => (
          <strong
            className={`text-black ${isDarkMode ? "dark:text-slate-200" : ""}`}
          >
            {children}
          </strong>
        ),
      }}
      children={markdownContent}
    ></ReactMarkdown>
  );
};

export default MarkdownRenderer;
