import React from "react";
import { Card } from "../component/card.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="home">
		<div className="mt-4">
			<h1>Characters</h1>
			<Card nature="people"/>
		</div >
		<div className="mt-5">
			<h1>Planets</h1>
			<Card nature="planets"/>
		</div >
		<div className="mt-5">
			<h1>Vehicles</h1>
			<Card nature="vehicles"/>
		</div >
	</div>
);
