import {sendRequest} from "../index.ts";

import {IGetShipListResponse, IInstallShipRequestByIdResponse, IShip} from "./typing.ts";

export const getShipList = async (searchTitle?: string) => {
    try {
        const response: IGetShipListResponse = await sendRequest({
            method: "GET",
            path: "/ships",
            params: searchTitle ? {ship_name: searchTitle} : undefined,
        });
        return response;
    } catch (error) {   
        console.error("Error fetching ship list:", error);
        throw error;
    }
};

export const getShipById = async (id: string) => {
    try {
        const response: IShip = await sendRequest({
            method: "GET",
            path: `/ships/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching ship by id:", error);
        throw error;
    }
};


export const getInstallShipRequestById = async (id: string) => {
    try {
        const response: IInstallShipRequestByIdResponse = await sendRequest({
            method: "GET",
            path: `/icebreakers/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching install ship request by id:", error);
        throw error;
    }
};