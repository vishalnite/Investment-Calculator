import { 
    Image, 
    Text, 
    tokens,
    makeStyles,
    shorthands
} from '@fluentui/react-components';
import logo from '../assets/headerImage.png';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyItems: "center",
        alignItems: "center",
        flexDirection: 'column',
        width: "100%",
        ...shorthands.gap("20px")
    },
    headerImage: {
        width: "35rem"
    },
    headerText: {
        color: tokens.colorPaletteBlueForeground2,
    },
})

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Image 
                className={classes.headerImage}
                fit="contain"
                src={logo} 
                alt='investment header'
            />
            
            <Text
                className={classes.headerText}
                font="numeric"
                size={900}
                weight="bold"
            >
                Investment Calculator
            </Text>
        </div>
    )
}