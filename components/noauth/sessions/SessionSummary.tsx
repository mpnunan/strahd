type SummaryProps = {
  summary: string | undefined;
  id: string | undefined;
}

export default function SessionSummary({summary, id}: SummaryProps) {
  const summarySpaced = summary?.split('\n');

  return (
    <div>
        {summarySpaced?.map((paragraph) => (
          <p key={`${id}-${summarySpaced.indexOf(paragraph)}`}>{paragraph}</p>
        ))}
    </div>
  )
}
