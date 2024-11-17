import {useEffect, useState} from "react";
import {IShip} from "../../core/api/ship/typing.tsx";
import {getShipList} from "../../core/api/ship";

import {shipList as SHIP_LIST_MOCK} from "../../core/mock/shipList.ts";
import {installShipRequest as INSTALL_SHIP_REQUEST_MOCK} from "../../core/mock/installShipRequest.ts";

import {ChangeEvent} from "../../App.typing.tsx";

export const useShipCatalogPage = () => {
    const [shipList, setShipList] = useState<IShip[]>([]);
    const [installShipRequestId, setInstallShipRequestId] = useState<number>();
    const [itemsInCart, setItemsInCart] = useState<number>(0);

    const [searchShipTitle, setSearchShipTitle] = useState("");

    const handleSearchShipClick = () => {
        getShipList(searchShipTitle)
            .then((data) => {
                setShipList(data.ships);
            })
            .catch(() => {
                const filteredShip = SHIP_LIST_MOCK.filter((ship) =>
                    ship.ship_name.toLowerCase().startsWith(searchShipTitle.toLowerCase())
                );
                setShipList(filteredShip);
            });
    };

    const handleSearchNameChange = (e: ChangeEvent) => {
        setSearchShipTitle(e.target.value);
    };

    useEffect(() => {
        getShipList()
            .then((data) => {
                setShipList(data.ships);
                setInstallShipRequestId(data.draft_icebreaker_id)
                setItemsInCart(data.ships_count)
            })
            .catch(() => {
                setShipList(SHIP_LIST_MOCK)
                setInstallShipRequestId(0)
                setItemsInCart(INSTALL_SHIP_REQUEST_MOCK.ship_list.length)
            });
    }, []);

    return {
        shipList,
        installShipRequestId,
        itemsInCart,
        handleSearchShipClick,
        handleSearchNameChange,
    };
};