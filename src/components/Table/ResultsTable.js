import React from "react";

import "./ResultsTable.css";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function ResultsTable(props) {
    const yearlyData = [];
    if (props.inputData) {
        let currentSavings = +props.inputData['current_savings'];
        const yearlySavings = +props.inputData['yearly_savings'];
        const expectedInterest = +props.inputData['expected_interest'] / 100;
        const investmentDuration = +props.inputData['investment_duration'];

        for (let i = 0; i < investmentDuration; i++) {
            const yearlyInterest = currentSavings * expectedInterest;
            currentSavings += yearlyInterest + yearlySavings;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                totalSavings: currentSavings,
                yearlySavings: yearlySavings,
            });
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.totalSavings)}</td>
                        <td>{formatter.format(yearData.yearlyInterest)}</td>
                        <td>
                            {formatter.format(yearData.totalSavings - props.inputData["current_savings"] - (yearData.yearlySavings * yearData.year))}
                        </td>
                        <td>
                            {formatter.format(props.inputData["current_savings"] + (yearData.yearlySavings * yearData.year))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;
