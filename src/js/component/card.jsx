import React from "react";
import "../../styles/card.css";


export const Card = ({ nature }) => {
	return (

		<>
			{nature == "people" ? (
				<div className="row">
					<div className="card">
						<img src="https://via.placeholder.com/400x200" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-primary">Learn more!</button>
								<button type="button" className="btn btn-warning">Fav</button>
							</div>
						</div>
					</div>
				</div>
			) : nature == "planets" ? (
				<div className="row">
					<div className="card">
						<img src="https://via.placeholder.com/400x200" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-primary">Learn more!</button>
								<button type="button" className="btn btn-warning">Fav</button>
							</div>
						</div>
					</div>
				</div>) :
				nature == "vehicles" ? (
					<div className="row">
						<div className="card">
							<img src="https://via.placeholder.com/400x200" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className="d-flex justify-content-between">
									<button type="button" className="btn btn-primary">Learn more!</button>
									<button type="button" className="btn btn-warning">Fav</button>
								</div>
							</div>
						</div>
					</div>
				) : null}
		</>


		// <div className="container">

		// </div>
	);
};