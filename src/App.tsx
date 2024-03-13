// import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx';
import Body from './components/Body.tsx';

import { 
  Divider,
  makeStyles, 
} from '@fluentui/react-components'

const useStyles = makeStyles({
  divider: {
    fontSize: "20px",  
    height: "5rem" 
  } 
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <Header />
        <Divider className={classes.divider} appearance="subtle">💰</Divider>
      <Body />
    </div>
  )
}

export default App
