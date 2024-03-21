// import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx';
import Body from './components/Body.tsx';
import { InvestmentValues } from './components/context.tsx';

import { 
  Divider,
  makeStyles, 
} from '@fluentui/react-components'

const useStyles = makeStyles({
  divider: {
    fontSize: "20px",  
    height: "5rem" 
  },
});

const INITIAL_INVESTMENT_STATE = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const classes = useStyles();

  return (
    <InvestmentValues.Provider value={INITIAL_INVESTMENT_STATE}>
      <Header />
      <Divider className={classes.divider} appearance="subtle">💰</Divider>
      <Body />
    </InvestmentValues.Provider>
  )
}

export default App
