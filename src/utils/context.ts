import {createContext} from "react";

export interface User {
    avatar: string;
    name: string;
}

export interface Stats {
    followers: number;
    following: number;
}

interface ShmitterContextType {
    user: User;
    stats: Stats;
    changeAvatar: (url: string) => void;
    changeName: (name: string) => void;
    changeStats: (statsType: keyof Stats, sum: number) => void;
}

export const ShmitterContext = createContext<ShmitterContextType | null>(null);