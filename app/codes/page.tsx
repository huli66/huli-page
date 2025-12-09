import CodeBlock from "../components/CodeBlock";

const Codes = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <CodeBlock lang="ts">
        {[
          'console.log("Hello")',
          'console.log("World")',
        ].join('\n')}
      </CodeBlock>
    </div>
  )
}

export default Codes;
