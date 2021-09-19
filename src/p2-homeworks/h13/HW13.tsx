import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {post} from "./API13";
import Request from "./Request";

function HW13() {
    let [request, setRequest] = useState('')

    const postChecked = (e: boolean) => {
        post(e)
            .then(res => {
                console.log('SUCCESS:')
                console.log(res.data)
                setRequest(JSON.stringify(res.data.errorText))
            })
            .catch(er => {
                console.log('ERROR:')
                console.log(er)
                setRequest(JSON.stringify(er.message))
            })
    }

    return (
        <div>
            <hr/>
            homework 13
            <hr/>

            <SuperCheckbox onChangeChecked={postChecked}/>

            <Request request={request}/>

            <hr/>
        </div>
    );
}

export default HW13;
