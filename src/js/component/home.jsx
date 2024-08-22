import React, { useState } from "react";
import { SimpleCounter } from "./SimpleCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { StateExample } from "./StateExample.jsx";

let counter = 0;
let intervalId = null;


const Home = () => {
	const [displayCounter, setDisplayCounter] = useState(counter);

    // Inicia el contador si no ha sido iniciado
    if (intervalId === null) {
        intervalId = setInterval(() => {
            counter++;
            setDisplayCounter(counter); // Actualiza el estado del contador
        }, 1000);
    }

	const four = Math.floor(displayCounter / 1000);
	const three = Math.floor(displayCounter / 100);
	const two = Math.floor(displayCounter / 10);
	const one = Math.floor(displayCounter / 1);

	return (
		<div className="text-center">
			<SimpleCounter
				digitFour={four}
				digitThree={three}
				digitTwo={two}
				digitOne={one}
			/>
			<StateExample />
		</div>
	)
};

export default Home;
