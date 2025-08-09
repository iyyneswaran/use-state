import { useState } from "react";

function FavouriteColor() {

    // let color = 'Blue';

    const [color, setColor] = useState('Blue');

    return (
        <>
            <h1>My favourite color is {color}</h1>
            <button onClick={() => { setColor('red') }}>Change the color</button>
        </>
    );
};

export default FavouriteColor;