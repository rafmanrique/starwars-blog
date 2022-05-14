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
				{store.token.length > 0 ?
					<ul className="navbar-nav">
						<button type="button" className="btn btn-warning" onClick={() => actions.handleGetRemoteFavorites()}>Get Favorites</button>
						<button type="button" className="btn btn-danger" onClick={() => actions.handleLogOut()}>Log Out</button>
						<li className="nav-item dropdown ">
							<a className="nav-link dropdown-toggle bg-primary text-light rounded" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites <span className="favorite-text bg-secondary">({store.favorites.length})</span>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

								{store.favorites.length <= 0 ? "empty" :

									store.favorites.map((item) => {

										return (


											<li key={item.id} className="ms-2 d-flex">{item.favorite_name}</li>
										)
									})

								}



							</ul>
						</li>
					</ul> : (
						<>
							<Link to="/login" className="btn btn-primary"> Login </Link>
							<Link to="/register" className="btn btn-primary"> Register </Link>
						</>
					)}
			</div>
		</nav>
	);
};
