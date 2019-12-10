//Showcasing use of UseEffect and UseState
import React, { useState, useEffect } from "react";

export const UpdatingText = props => {
    const [text, setText] = useState("");
  
    useEffect(() => {
        setText(props.text)
    }, [props.text]);

    return (
        <>
            {text}
        </>
    );
}