import React from "react";
import "../../styles/card.css";


export const Card = ({ nature, item }) => {
	return (

		<>
			{nature == "people" ? (
				<div className="card">
					<img src="https://via.placeholder.com/400x200" />
					<div className="card-body">
						<h5 className="card-title py-2">{item.properties.name}</h5>
						<h6 className="card-text">Gender: {item.properties.gender}</h6>
						<h6 className="card-text">Hair Color: {item.properties.hair_color}</h6>
						<h6 className="card-text">Eye Color: {item.properties.eye_color}</h6>
						<div className="d-flex justify-content-between">
							<button type="button" className="btn btn-primary">Learn more!</button>
							<button type="button" className="btn btn-warning">Fav</button>
						</div>
					</div>
				</div>

			) : nature == "planets" ? (

				<div className="card">
					<img src="https://via.placeholder.com/400x200" />
					<div className="card-body">
						<h5 className="card-title py-2">{item.properties.name}</h5>
						<h6 className="card-text">Population: {item.properties.population}</h6>
						<h6 className="card-text">Terrain: {item.properties.terrain}</h6>
						<h6 className="card-text">Climate: {item.properties.climate}</h6>
						<div className="d-flex justify-content-between">
							<button type="button" className="btn btn-primary">Learn more!</button>
							<button type="button" className="btn btn-warning">Fav</button>
						</div>
					</div>
				</div>
			) :
				nature == "vehicles" ? (

					<div className="card">
						<img src="https://via.placeholder.com/400x200" />
						<div className="card-body">
							<h5 className="card-title py-2">{item.properties.name}</h5>
							<h6 className="card-text">Model: {item.properties.model}</h6>
							<h6 className="card-text">Manufacturer: {item.properties.manufacturer}</h6>
							<h6 className="card-text">Vehicle Class: {item.properties.vehicle_class}</h6>
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-primary">Learn more!</button>
								<button type="button" className="btn btn-warning">Fav</button>
							</div>
						</div>
					</div>

				) : null}
		</>
	);
};