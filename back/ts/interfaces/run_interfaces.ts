import {IRunInventoryItem} from "../../models/User";

export interface IRunCurrentState {
    data?: {
        paymentMethods?: {
            id: number;
            name: string;
            titleRu: string;
            titleEn: string;
            type: string;
            isActive: boolean;
            order: number;
            category: number;
            img: string;
            minAmount: number;
            currency: number;
            createdAt: Date;
            updatedAt: Date;
        }[],
        online?: string,
        user?: {
            id?: number;
            steamId?: string;
            name?: string;
            deposit?: number;
            hasDeposit?: boolean;
            avatar?: string;
            balance?: number;
            items?: IRunInventoryItem[];
        }
    },
    success: boolean,
    date?: Date
}

export interface IRunExchange {
    success?: boolean;
    date?: Date;
    data?: {
        balance?: number;
        spent?: number;
        userItems?: {
            removeIds?: number[];
            newItems?: IRunInventoryItem[];
        };
    };
}

export interface IRunBet {
    success: boolean;
    date: Date;
    data: {
        id: number;
        gameId: number;
        status: number;
        coefficientAuto: number;
        createdAt: Date;
        coefficient?: any;
        deposit: {
            amount: number;
            items: {
                id: number;
                itemId: number;
                name: string;
                colorId: number;
            }[];
        };
        withdraw?: {
            amount?: any;
            items?: any[];
        };
        user: {
            id: number;
            steamId: string;
            name: string;
            avatar: string;
            blm: boolean;
        };
        likes: number;
    };
}


