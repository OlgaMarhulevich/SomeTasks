import React from 'react'
import s from './SuperDoubleRange.module.css'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled,
        ...restProps
    }
) => {

    const onChangeHandler = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (onChangeRange) if (Array.isArray(value)) { // @ts-ignore
            onChangeRange(value)
        }
    }

    return (
        <div className={s.range}>
            <Slider
                value={value}
                onChange={onChangeHandler}
                aria-labelledby="range-slider"
                valueLabelDisplay="auto"
                min={min}
                max={max}
                step={step}
                disabled={disabled}

                {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange

