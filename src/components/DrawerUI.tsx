import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  Button,
  CompoundButton,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";

import { 
    Dismiss24Regular,
    ArrowTrendingLinesFilled
} from "@fluentui/react-icons";

import InputForm from "./InputForm";

const useStyles = makeStyles({
  root: {
    ...shorthands.overflow("hidden"),

    display: "flex",
    height: "20vh"
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding("16px"),

    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridRowGap: tokens.spacingVerticalXXL,
    gridAutoRows: "max-content",
  },

  button: {
    fontSize: "20px",
    backgroundColor: tokens.colorPaletteBlueForeground2,
    color: tokens.colorNeutralForegroundInverted,
    "&:hover": {
        backgroundColor: tokens.colorPaletteBlueBorderActive,
        color: tokens.colorNeutralForegroundInvertedHover,
    }
  },
});

export default function DrawerUI({ setShowTable }: any) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Drawer
        type="overlay"
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader >
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Fill the Details
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <InputForm setShowTable={setShowTable}  />
        </DrawerBody>
      </Drawer>

      <div className={classes.content}>
        <CompoundButton
            className={classes.button}
            icon={<ArrowTrendingLinesFilled />}
            onClick={() => setIsOpen(!isOpen)}
        >
            Start Investing
        </CompoundButton>
      </div>
    </div>
  );
};