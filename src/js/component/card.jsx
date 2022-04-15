import React from "react";
import "../../styles/card.css";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'


export const Card = ({ nature, item }) => {
	
	const {actions} = useContext(Context)
	const [favorite, setFavorite] = useState(false)

	return (
		
		<>
			{nature == "people" ? (
				<div className="card">
					<img src="https://via.placeholder.com/400x200" />
					<div className="card-body">
						<h5 className="card-title py-2">{item.properties.name}</h5>
						<h6 className="card-text"><b>Gender:</b> {item.properties.gender}</h6>
						<h6 className="card-text"><b>Hair Color:</b> {item.properties.hair_color}</h6>
						<h6 className="card-text"><b>Eye Color:</b> {item.properties.eye_color}</h6>
						<div className="d-flex justify-content-between">
							<Link to={`people/${item.uid}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button type="button" className="btn btn-outline-warning" onClick={() => {
								actions.addFavorites(item.properties.name)
								setFavorite(true)
							}}><FontAwesomeIcon icon={faHeart} /></button>
						</div>
					</div>
				</div>

			) : nature == "planets" ? (

				<div className="card">
					<img src="https://via.placeholder.com/400x200" />
					<div className="card-body">
						<h5 className="card-title py-2">{item.properties.name}</h5>
						<h6 className="card-text"><b>Population:</b> {item.properties.population}</h6>
						<h6 className="card-text"><b>Terrain:</b> {item.properties.terrain}</h6>
						<h6 className="card-text"><b>Climate:</b> {item.properties.climate}</h6>
						<div className="d-flex justify-content-between">
						<Link to={`planets/${item.uid}`} className="btn btn-outline-primary">Learn more!
						</Link>
							<button type="button" className="btn btn-outline-warning" onClick={() => {
								actions.addFavorites(item.properties.name)
								setFavorite(true)
							}}><FontAwesomeIcon icon={faHeart} /></button>
						</div>
					</div>
				</div>
			) :
				nature == "vehicles" ? (

					<div className="card">
						<img src="https://via.placeholder.com/400x200" />
						<div className="card-body">
							<h5 className="card-title py-2">{item.properties.name}</h5>
							<h6 className="card-text"><b>Model:</b> {item.properties.model}</h6>
							<h6 className="card-text"><b>Manufacturer:</b> {item.properties.manufacturer}</h6>
							<h6 className="card-text"><b>Vehicle Class:</b> {item.properties.vehicle_class}</h6>
							<div className="d-flex justify-content-between">
							<Link to={`vehicles/${item.uid}`} className="btn btn-outline-primary">Learn more!
							</Link>
								<button type="button" className="btn btn-outline-warning" onClick={() => {
								actions.addFavorites(item.properties.name)
								setFavorite(true)
							}}><FontAwesomeIcon icon={faHeart} /></button>
							</div>
						</div>
					</div>

				) : null}
		</>
	);
};