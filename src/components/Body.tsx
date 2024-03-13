import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  CompoundButton,
  Button,
  Input,
  Label,
  makeStyles,
  tokens
} from "@fluentui/react-components";

import {
    ArrowTrendingLinesFilled
} from '@fluentui/react-icons';

import type {
    CompoundButtonProps
} from '@fluentui/react-components';

import TableUI from './TableUI';
import { calculateInvestmentResults } from '../util/Investment';
import { AnnualDataItem } from './interfaces';

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    height: "50vh"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
  button: {
    marginTop: "2rem",
    fontSize: "20px",
    backgroundColor: tokens.colorPaletteBlueForeground2,
    color: tokens.colorNeutralForegroundInverted,
    "&:hover": {
        backgroundColor: tokens.colorPaletteBlueBorderActive,
        color: tokens.colorNeutralForegroundInvertedHover,
    }
  },
});

interface InvestmentState {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export default function InputForm(props: CompoundButtonProps) {
  const [Investment, setInvestment] = useState<InvestmentState>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })
  const [showTable, setShowTable] = useState(false);
    
  const classes = useStyles();

  let annualData: AnnualDataItem[] = [];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInvestment(prevState => ({
      ...prevState,
      [id]: Math.abs(parseFloat(value))
    }));
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowTable(showTable => !showTable);
  };

  
    if(showTable) {
      annualData = calculateInvestmentResults(Investment);
      return <TableUI annualData={annualData} setShowTable={setShowTable} />
    }
    else {
      return ( 
        <Dialog modalType="modal">

          <DialogTrigger disableButtonEnhancement>
            <div className={classes.container}>
                <CompoundButton
                    className={classes.button}
                    icon={<ArrowTrendingLinesFilled />}
                    {...props}
                >
                    Start Investing
                </CompoundButton>
            </div>
          </DialogTrigger>

          <DialogSurface aria-describedby={undefined}>

            <form onSubmit={handleSubmit}>
              <DialogBody>
                <DialogTitle>Start your Investment Journey</DialogTitle>
                
                <DialogContent className={classes.content}>
                  
                  <Label required htmlFor={"initialInvestment"}>
                    Initial Investment
                  </Label>

                  <Input 
                    required 
                    defaultValue={Investment.initialInvestment.toString()}
                    onChange={handleChange}
                    type="number" 
                    id={"initialInvestment"} 
                  />

                  <Label required htmlFor={"annualInvestment"}>
                    Annual Investment
                  </Label>

                  <Input 
                    required 
                    defaultValue={Investment.annualInvestment.toString()}
                    onChange={handleChange}
                    type="number" 
                    id={"annualInvestment"} 
                  />

                  <Label required htmlFor={"expectedReturn"}>
                    Expected Return (% p.a.)
                  </Label>

                  <Input 
                    required 
                    defaultValue={Investment.expectedReturn.toString()}
                    onChange={handleChange}
                    type="number" 
                    id={"expectedReturn"} 
                  />

                  <Label required htmlFor={"duration"}>
                    Duration (years)
                  </Label>

                  <Input 
                    required 
                    defaultValue={Investment.duration.toString()}
                    onChange={handleChange}
                    type="number" 
                    id={"duration"} 
                    min={1}
                  />

                </DialogContent>
                
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">Close</Button>
                  </DialogTrigger>
                  <Button type="submit" appearance="primary">
                    Submit
                  </Button>
                </DialogActions>

              </DialogBody>
            </form>
          </DialogSurface>
        </Dialog>
      );
    }
};