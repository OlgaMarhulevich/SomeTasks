import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import AlternativeSuperDoubleRange from "./AlternativeSuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeDoubleRange = (val: [number, number]) => {
        setValue1(val[0])
        setValue2(val[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{display: 'inline-block', width: '30px'}}>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{display: 'inline-block', width: '30px'}}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={(val) => onChangeDoubleRange(val)}
                    value={[value1, value2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
                <AlternativeSuperDoubleRange/>
            <hr/>
        </div>
    )
}

export default HW11
