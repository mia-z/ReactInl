import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const SubmittedAlert = props => {
    const [show, setShow] = useState(true);
    const [subject, setSubject] = useState("");

    useEffect(() => {
        setSubject(props.subject);
        setTimeout(() => {
            setShow(false);
        }, props.duration * 1000)
    }, [props.subject, props.duration]);

    if (props.show === false) return null;
        else return (
        <>
            <Alert show={show} variant="success">
                <p>
                    Successfully added {subject}
                </p>
            </Alert>
        </>
    );
}