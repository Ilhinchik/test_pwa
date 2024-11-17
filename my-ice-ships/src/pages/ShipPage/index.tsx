import "./index.css";
import {FC, useEffect, useState} from "react";
import {IShipPageProps} from "./typing.tsx";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {IShip} from "../../core/api/ship/typing.ts";

import {getShipById} from "../../core/api/ship";
import {shipList as SHIP_LIST_MOCK} from "../../core/mock/shipList.ts";
import unknownImage from "/images/unknown.png"
import {Navbar} from "../../components/Navbar";
import {Breadcrumbs} from "../../components/Breadcrumbs";


export const ShipPage: FC<IShipPageProps> = () => {
    const {id} = useParams();
    const [shipData, setShipData] = useState<IShip | null>(null);

    useEffect(() => {
        if (id) {
            getShipById(id)
                .then((data) => {
                    setShipData(data);
                })
                .catch(() => {
                    const ship = SHIP_LIST_MOCK.find(
                        (ship) => ship.pk === Number(id)
                    );
                    setShipData(ship || null);
                });
        }
    }, [id]);

    if (!shipData || !shipData.ship_name) {
        return (
            <>
                <Navbar/>
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <Container className="div">
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Каталог",
                            link: "/ship_catalog"
                        }
                    ]}
                    endItem={shipData?.ship_name}
                />
                <div className="row mt-4">
                    <div className="col-7">
                        <h2>{shipData?.ship_name}</h2>
                        <p className=""><strong>Год создания: </strong> {shipData?.year}</p>
                        <p className=""><strong>Ледовый класс:</strong> {shipData?.ice_class}
                        </p>
                        <p className=""><strong>Длина:</strong> {shipData?.length} м </p>
                        <p className=""><strong>Двигатель:</strong> {shipData?.engine} </p>
                        <p className=""><strong>Описание:</strong> {shipData?.description}</p>
                    </div>
                    <div className="col-5">   
                        <img src={shipData?.image ? (shipData?.image) : (unknownImage)}
                             alt={shipData?.ship_name}
                             width="300px"/>
                        
                    </div>
                    
                </div>
                
            </Container>
        </>
    );
};