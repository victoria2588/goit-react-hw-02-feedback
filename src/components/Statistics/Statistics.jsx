export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>
        <span>Good: </span>
        {good}
      </p>
      <p>
        <span>Neutral: </span>
        {neutral}
      </p>
      <p>
        <span>Bad: </span>
        {bad}
      </p>
      <p>
        <span>Total: </span>
        {total}
      </p>
      <p>
        <span>Positive Feedback Percentage: </span>
        {positivePercentage} %
      </p>
    </div>
  );
}
