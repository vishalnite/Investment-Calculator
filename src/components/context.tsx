import { createContext } from "react";

export const InvestmentValues = createContext({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
});
