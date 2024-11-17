export interface IShip {
    pk: number;
    ship_name: string;
    year: number;
    ice_class: string;
    length: number;
    engine: string;
    status: number;
    description: string;
    image: string;
}

export interface IGetShipListResponse {
    ships: IShip[];
    draft_icebreaker_id: number;
    ships_count: number;
}


export interface ISoftDataInRequestItem {
    pk: number;
    ship_name: string;
    year: number;
    ice_class: string;
    image: string;
}

export interface IShipInRequestItem {
    ship: ISoftDataInRequestItem;
    order: number;
}

export interface IInstallShipRequestByIdResponse {
    pk: number;
    status: number;
    date_created: string;
    date_formation: string;
    date_complete: string;
    owner: number;
    moderator : number;
    date: string;
    start_point: string;
    finish_point: string;
    result: boolean;
    ship_list: IShipInRequestItem[];
}