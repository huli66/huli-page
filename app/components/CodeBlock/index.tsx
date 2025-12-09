// import { codeToHtml } from 'shiki';
// import type { BundledLanguage } from 'shiki';

// interface Props {
//   children: string
//   lang: BundledLanguage
// }

// async function CodeBlock(props: Props) {
//   const out = await codeToHtml(props.children, {
//     lang: props.lang,
//     theme: 'github-dark'
//   })

//   return <div dangerouslySetInnerHTML={{ __html: out }} />
// }

import { BundledLanguage, BundledTheme, codeToHtml, createHighlighter} from 'shiki/bundle-web.mjs'
import ToggleCodeTheme from './ToggleCodeTheme';

const highlighter = await createHighlighter({
  themes: ['github-dark', 'github-light'],
  langs: ['ts'],
});

const CodeBlock = async ({ children, lang }: { children: string, lang: BundledLanguage }) => {
  const out = highlighter.codeToHtml(children, {
    lang,
    themes: {
      dark: 'github-dark',
      light: 'github-light',  
    },
  });
  return <div className="w-full h-full flex flex-col items-center justify-center">
    <ToggleCodeTheme />
    <div className="w-full h-full p-4" dangerouslySetInnerHTML={{ __html: out }} />
  </div>;
};

export default CodeBlock;