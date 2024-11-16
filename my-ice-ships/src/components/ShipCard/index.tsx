import "./index.css"
import {FC} from "react";
import {IShipCardProps} from "./typing.tsx";
import unknownImage from "/images/unknown.png"
import {Link} from "react-router-dom";

export const ShipCard: FC<IShipCardProps> = (ship: IShipCardProps) => {
    return (
        <div className="card ship-card">
            <div className="row">
            <div className="col-md-4"> 
                <img
                    src={ship.logoFilePath ? (ship.logoFilePath) : (unknownImage)}
                    className="card-img-top ship-card-img"
                    alt={ship.title}
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{ship.title}</h5>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Длина:</strong> {ship.length}
                            
                        </li>
                        <li className="list-group-item">
                            <strong>Ледовый класс:</strong> {ship.ice_class}
                        </li>
                        <li className="list-group-item">
                            <strong>Двигатель:</strong> {ship.engine}
                        </li>
                    </ul>
                    <Link
                        to={"/ship/" + ship.id}
                        id={ship.title}
                        className="btn dark-blue-btn"
                        state={{from: ship.title}}
                    >
                        Узнать подробнее
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};