import type { MDXComponents } from 'mdx/types'
// import './styles/index.css'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function H1({ children }: { children: React.ReactNode}) {
  return <h1 className="text-3xl font-bold" >{children}</h1>;
}

function H2({ children }: { children: React.ReactNode}) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function useMDXComponents(components: MDXComponents) {
  return { h1: H1, h2: H2, ...components };
}
