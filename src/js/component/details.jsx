import React, { useEffect, useState, useContext } from "react";

import "../../styles/details.css";
import { Context } from "../store/appContext"
import { useParams } from "react-router-dom";


export const Details = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const { nature, id } = params;
    const { people, planets, vehicles } = store;
    const [info, setInfo] = useState({});

    const getDetails = () => {
        let detail = store[nature].find((item) => {
            return item.uid == id
        })
        if (detail) {
            setInfo(detail)
        }
    }
    console.log(info)
    console.log(params)

    useEffect(() => {
        getDetails()
    }, [])
    return (
        <>
            {nature == "people" ? (
                <div className="main">
                    <div className="container1">
                        <div className="image mb-3">
                            <div className="container g-0 d-flex">
                                <img src="https://via.placeholder.com/550x350" alt="..." />
                            </div>
                        </div>
                        <div className="text text-center p-4">
                            <h2 className="title">{info.properties?.name}</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h5 className="px-5 text-danger">Name:
                                <p className="pt-2 text-danger">{info.properties?.name}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Birth Year:
                                <p className="pt-2 text-danger">{info.properties?.birth_year}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Gender:
                                <p className="pt-2 text-danger">{info.properties?.gender}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Height:
                                <p className="pt-2 text-danger">{info.properties?.height}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Skin Color:
                                <p className="pt-2 text-danger">{info.properties?.skin_color}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Eye Color:
                                <p className="pt-2 text-danger">{info.properties?.eye_color}</p>
                            </h5>
                        </div>
                    </div>
                </div>

            ) : nature == "planets" ? (

                <div className="main">
                    <div className="container1">
                        <div className="image mb-3">
                            <div className="container g-0 d-flex">
                                <img src="https://via.placeholder.com/550x350" alt="..." />
                            </div>
                        </div>
                        <div className="text text-center p-4">
                            <h2 className="title">{info.properties?.name}</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h5 className="px-5 text-danger">Name:
                                <p className="pt-2 text-danger">{info.properties?.name}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Climate:
                                <p className="pt-2 text-danger">{info.properties?.climate}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Population:
                                <p className="pt-2 text-danger">{info.properties?.population}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Orbital Period:
                                <p className="pt-2 text-danger">{info.properties?.orbital_period}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Rotation Period:
                                <p className="pt-2 text-danger">{info.properties?.rotation_period}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Diameter
                                <p className="pt-2 text-danger">{info.properties?.diameter}</p>
                            </h5>
                        </div>
                    </div>
                </div>
            ) :
                nature == "vehicles" ? (

                    <div className="main">
                    <div className="container1">
                        <div className="image mb-3">
                            <div className="container g-0 d-flex">
                                <img src="https://via.placeholder.com/550x350" alt="..." />
                            </div>
                        </div>
                        <div className="text text-center p-4">
                            <h2 className="title">{info.properties?.name}</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h5 className="px-5 text-danger">Name:
                                <p className="pt-2 text-danger">{info.properties?.name}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Model:
                                <p className="pt-2 text-danger">{info.properties?.model}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Manufacturer:
                                <p className="pt-2 text-danger">{info.properties?.manufacturer}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Vehicle Class:
                                <p className="pt-2 text-danger">{info.properties?.vehicle_class}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Crew:
                                <p className="pt-2 text-danger">{info.properties?.crew}</p>
                            </h5>
                            <h5 className="px-5 text-danger">Consumables:
                                <p className="pt-2 text-danger">{info.properties?.consumables}</p>
                            </h5>
                        </div>
                    </div>
                </div>
                ) : null}
        </>
    );
};

