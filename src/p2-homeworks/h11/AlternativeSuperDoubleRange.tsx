import React, {useState} from 'react'
import {Slider, withStyles} from "@material-ui/core";

const AlternativeSuperDoubleRange: React.FC = () => {
    // сделать самому, можно подключать библиотеки
    const [val, setVal] = useState([30, 50])

    //styles for double range
    const AirbnbSlider = withStyles({
        root: {
            color: '#9fc8d7',
            height: 3,
            padding: '13px 0',
        },
        thumb: {
            height: 15,
            width: 15,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            marginTop: -6,
            marginLeft: -6,
            boxShadow: '#ebebeb 0 0 0',
            '&:focus, &:hover, &$active': {
                boxShadow: '#ccc 0.5px 0.5px 3px',
            },
            '& .bar': {
                height: 6,
                width: 1.5,
                backgroundColor: 'currentColor',
                marginLeft: 1,
                marginRight: 1,
            },
        },
        active: {},
        track: {
            height: 4,
        },
        rail: {
            color: '#d8d8d8',
            opacity: 1,
            height: 4,
            borderRadius: 7,
        },
    })(Slider)

    function AirbnbThumbComponent(props: any) {
        return (
            <span {...props}>
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </span>
        )
    }

    const up = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (Array.isArray(value)) setVal(value)
    }

    return (<div style={{width: 300}}>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={val}
                onChange={up}
            />
            {/* onChange={up} не работает плавное перемещение ползунка */}

        </div>
    )
}

export default AlternativeSuperDoubleRange

