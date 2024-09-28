'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

function About() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        console.log("helooooooooo");
    }, []);

    console.log("hh"); // This will run every render

    return (
        <>
            <div>counter: {counter}</div>
            <button onClick={handleClick}>click to add</button>
        </>
    );
}

export default About;
