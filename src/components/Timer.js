import { useEffect, useState } from "react";

function Timer() {

    // const [count, setCount] = useState(1);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     checkCount();
    // }, [count]);

    useEffect(() => {
        console.log("Screen Rendered");
        setTimeout(() => {
            setCount((previousState) => { return previousState + 1 });
        }, 2000);
    });

    function checkCount() {
        if(count > 10){
            setCount(1);
            alert("Count has been reset to 1 because it exceeded 10.");
        }
    };

    function updateCount() {
        setCount((previousState) => {
            return previousState + 1;
        });
    };

    return (
        <>
            <h1>I have rendered {count} times!</h1>
            <button onClick={updateCount}>Increase count</button>
        </>
    ); 
}

export default Timer;