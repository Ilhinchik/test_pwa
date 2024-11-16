export interface IShip {
    pk: number;
    title: string;
    year: number;
    ice_class: string;
    length: number;
    engine: string;
    status: number;
    description: string;
    image: string;
}

export interface IGetShipListResponse {
    ship: IShip[];
    install_ship_request_id: number;
    items_in_cart: number;
}


export interface ISoftDataInRequestItem {
    pk: number;
    title: string;
    price: number;
    summary: string;
    logo_file_path: string;
}

export interface IShipInRequestItem {
    ship: ISoftDataInRequestItem;
    version: string;
}

export interface IInstallShipRequestByIdResponse {
    pk: number;
    creation_datetime: string;
    formation_datetime: string;
    completion_datetime: string;
    host: string;
    client: number;
    manager: number;
    total_installing_time_in_min: number;
    status: string;
    ship_list: IShipInRequestItem[];
}