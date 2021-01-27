import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import MDXComponents from "@/components/MDXComponents";

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default Application;
