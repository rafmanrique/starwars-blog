import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
	
	const { store, actions } = useContext(Context)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-around p-3">
			<Link to="/">
				<img src="https://www.picng.com/upload/star_wars_logo/png_star_wars_logo_65410.png" alt="" width="20%" heigh="auto" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => (
							<li key={index}><span className="dropdown-item d-flex justify-content-between align-items-center">{item}<button type="button" className="btn" onClick={() => { actions.deleteFavs(index) }}><i className="fas fa-trash"></i></button></span></li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
