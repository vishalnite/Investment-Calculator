import { useContext } from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  CompoundButton,
  makeStyles,
  tokens,
  shorthands
} from "@fluentui/react-components";

import {
    ArrowCounterclockwiseRegular
} from '@fluentui/react-icons';

import { calculateInvestmentResults, formatter } from '../util/Investment'; 
import { InvestmentValues } from "./context";

interface Column {
    columnKey: string;
    label: string;
}

const columns: Column[] = [
  { columnKey: "year", label: "Year" },
  { columnKey: "interest", label: "Interest Earned" },
  { columnKey: "valueEndOfYear", label: "Current Invested Value" },
  { columnKey: "annualInvestment", label: "Annual Investment" },
];

const useStyles = makeStyles({
    tableContainer: {
        width: "80%",
        ...shorthands.margin("0", "auto"),
        marginTop: "2rem",
    },
    thead: {
        fontWeight: "bold",
    },
    buttonContainer: {
        textAlign: "center",
    },
    button: {
        marginTop: "3rem",
        marginBottom: "2rem",
        ...shorthands.padding("10px"),
        fontSize: "20px",
        backgroundColor: tokens.colorPaletteBlueForeground2,
        color: tokens.colorNeutralForegroundInverted,
        "&:hover": {
            backgroundColor: tokens.colorPaletteBlueBorderActive,
            color: tokens.colorNeutralForegroundInvertedHover,
        }
    },
})

const handleClick = (setShowTable: any, inputValues: any) => {
    setShowTable((prevState: any) => !prevState)
    inputValues.initialInvestment = 0;
    inputValues.annualInvestment = 0;
    inputValues.expectedReturn = 0;
    inputValues.duration = 0;
}

export default function TableUI({ setShowTable }: any) {
  const classes = useStyles();
  const inputValues = useContext(InvestmentValues);
  const annualData = calculateInvestmentResults(inputValues);

  return (
    <div className={classes.tableContainer}>
        <Table arial-label="Default table">
        <TableHeader>
            <TableRow>
            {columns.map((column) => (
                <TableHeaderCell className={classes.thead} key={column.columnKey}>
                {column.label}
                </TableHeaderCell>
            ))}
            </TableRow>
        </TableHeader>
        <TableBody>
            {annualData.map((data: any) => (
            <TableRow key={data.year}>
                <TableCell>
                {data.year}
                </TableCell>
                <TableCell>
                {formatter.format(data.interest)}
                </TableCell>
                <TableCell>
                {formatter.format(data.valueEndOfYear)}
                </TableCell>
                <TableCell>
                {formatter.format(data.annualInvestment)}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>

        <div className={classes.buttonContainer}>
            <CompoundButton
                className={classes.button}
                icon={<ArrowCounterclockwiseRegular />}
                onClick={() => handleClick(setShowTable, inputValues)}
            >
                Go Back
            </CompoundButton>
        </div>
    </div>
  );
};