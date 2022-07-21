import React, { useState } from "react";
import Nav from "./Nav";
// import Pig from "./Pig";
import PigList from "./PigList"
import hogs from "../porkers_data";
import PigFilter from "./PigFilter";


function App() {
	const [showGreased, setShowGreased] = useState(false);

	return (
		<div className="App">
			<Nav />
			<PigFilter handleGreased={setShowGreased} />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
