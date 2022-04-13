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
                            <h2 className="title">Card title</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h4 className="px-5 text-danger">Name
                                <h5 className="pt-2 text-danger">{info.properties?.name}</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Birth Year
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Gender
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Height
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Skin Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Eye Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
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
                            <h2 className="title">Card title</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h4 className="px-5 text-danger">Planeta
                                <h5 className="pt-2 text-danger">{info.properties?.name}</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Birth Year
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Gender
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Height
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Skin Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Eye Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
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
                            <h2 className="title">Card title</h2>
                            <p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
                        </div>
                    </div>
                    <div className="container2 d-flex border-top border-danger border-2">
                        <div className="details d-flex pt-4">
                            <h4 className="px-5 text-danger">Name
                                <h5 className="pt-2 text-danger">{info.properties?.name}</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Birth Year
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Gender
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Height
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Skin Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                            <h4 className="px-5 text-danger">Eye Color
                                <h5 className="pt-2 text-danger">Nombre</h5>
                            </h4>
                        </div>
                    </div>
                </div>
                ) : null}
        </>
    );
};

