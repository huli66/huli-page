import NumberFlow from "@number-flow/react";

const StableCounter = ({
  value = 0,
  intervalMs = 1000,
}: {
  value?: number
  intervalMs?: number
}) => {
  const dummyString = Number(
    Array(value?.toString().length ?? 1)
      .fill('8')
      .join('')
  )
  // TODO don't use locale formatting since it can cause a hydration mismatch
  //.toLocaleString()

  return (
    <>
      {/* Dummy span to prevent layout shift */}
      <span className="opacity-0">{dummyString}</span>
      <span className="-translate-x-8 text-4xl font-bold">
        <NumberFlow
          // Defer to counter hook calculated interval
          spinTiming={{
            duration: intervalMs,
            easing: 'linear',
          }}
          // Slow horizontal shift animation (due to differing number widths)
          transformTiming={{
            duration: 1000,
            easing: 'linear',
          }}
          value={value}
          trend={1}
          // continuous
          willChange
        />
      </span>
    </>
  )
}

export default StableCounter;
