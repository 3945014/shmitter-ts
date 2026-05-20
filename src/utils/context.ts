import {createContext} from "react";
import type {ShmitterContextValue, StatsType} from "./types";



// export const ShmitterContext = createContext<ShmitterContextValue | null>(null);
export const ShmitterContext = createContext<ShmitterContextValue>({
    user: {
        avatar: '',
        name: ''
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: (url: string) => console.log(url),
    changeName: (name: string) => console.log(name),
    changeStats: (statsType: StatsType, sum: number) => console.log(statsType, sum)
});