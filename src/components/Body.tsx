import { useState } from "react";
import TableUI from './TableUI';
import DrawerUI from './DrawerUI';

export default function InputForm() {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      {
        (showTable) ?
        <TableUI setShowTable={setShowTable} /> :
        <DrawerUI setShowTable={setShowTable} />
      } 
    </>
  )
};

