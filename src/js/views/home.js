import React from "react";
import { Card } from "../component/card.jsx";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store } = useContext(Context)

	return (
		<div className="home">
			<div className="mt-4">
				<h1>Characters</h1>
				<div className="row">
					{store.people.map((person) => (
						<Card key={person.uid} item={person} nature="people" />
					))}
				</div>
			</div >
			<div className="mt-5">
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map((planet) => (
						<Card key={planet.uid} item={planet} nature="planets" />
					))}
				</div>
			</div >
			<div className="mt-5">
				<h1>Vehicles</h1>
				<div className="row">
					{store.vehicles.map((vehicle) => (
						<Card key={vehicle.uid} item={vehicle} nature="vehicles" />
					))}
				</div>
			</div >
		</div>)
};
