import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = calculateInvestmentResults(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest &#40;Year&#41;</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter(data.valueEndOfYear)}</td>
            <td>{formatter(data.interest)}</td>
            <td>{formatter(data.year)}</td>
            <td>{formatter(data.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
