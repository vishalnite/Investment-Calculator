import { useForm, SubmitHandler } from 'react-hook-form';
import { InvestmentValues } from './context';

import {
    Field, 
    Input,
    makeStyles,
    tokens,
    shorthands
} from '@fluentui/react-components';
import { useContext } from 'react';

const useStyles = makeStyles({
    submitButton: {
        fontSize: "15px",
        marginTop: "10px",
        ...shorthands.padding("10px"),
        ...shorthands.borderRadius("5px"),
        backgroundColor: tokens.colorPaletteBlueForeground2,
        color: tokens.colorNeutralForegroundInverted,
        "&:hover": {
            backgroundColor: tokens.colorPaletteBlueBorderActive,
            color: tokens.colorNeutralForegroundInvertedHover,
        }
    }
})

type formInput = {
    initialInvestment: number
    annualInvestment: number
    expectedReturn: number
    duration: number
}

export default function InputForm({ setShowTable }: any) {
    const classes = useStyles();
    const investmentValues = useContext(InvestmentValues);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formInput>()
    
    const onSubmit: SubmitHandler<formInput> = (data) => {
        investmentValues.initialInvestment = Number(data.initialInvestment);
        investmentValues.annualInvestment = Number(data.annualInvestment);
        investmentValues.expectedReturn = Number(data.expectedReturn);
        investmentValues.duration = Number(data.duration);
        setShowTable((prevState: any) => !prevState)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field
                required
                label="Initial Investment"
                validationState={errors.initialInvestment ? "error" : "success"}
                validationMessage={errors.initialInvestment?.message as string}
            >
                <Input 
                    type="number"
                    {...register("initialInvestment", {
                        required: {
                            value: true,
                            message: "Field is required"
                        },
                        min: {
                            value: 0,
                            message: "Negative value not allowed"
                        }
                    })}
                    defaultValue={investmentValues.initialInvestment.toString()}
                />
            </Field>

            <Field
                required
                label="Annual Investment"
                validationState={errors.annualInvestment ? "error" : "success"}
                validationMessage={errors.annualInvestment?.message as string}
            >
                <Input 
                    type="number"
                    {...register("annualInvestment", {
                        required: {
                            value: true,
                            message: "Field is required"
                        },
                        min: {
                            value: 0,
                            message: "Negative value not allowed"
                        }
                    })}
                    defaultValue={investmentValues.annualInvestment.toString()}
                />
            </Field>

            <Field
                required
                label="Expected Return (% p.a.)"
                validationState={errors.expectedReturn ? "error" : "success"}
                validationMessage={errors.expectedReturn?.message as string}
            >
                <Input 
                    type="number"
                    {...register("expectedReturn", {
                        required: {
                            value: true,
                            message: "Field is required"
                        },
                        min: {
                            value: 0,
                            message: "Negative value not allowed"
                        }
                    })}
                    defaultValue={investmentValues.expectedReturn.toString()}
                />
            </Field>

            <Field
                required
                label="Duration (years)"
                validationState={errors.duration ? "error" : "success"}
                validationMessage={errors.duration?.message as string}
            >
                <Input 
                    type="number"
                    {...register("duration", {
                        required: {
                            value: true,
                            message: "Field is required"
                        },
                        min: {
                            value: 0,
                            message: "Negative value not allowed"
                        }
                    })}
                    defaultValue={investmentValues.duration.toString()}
                />
            </Field>

            <input className={classes.submitButton} type="submit" />
        </form>
    )
}