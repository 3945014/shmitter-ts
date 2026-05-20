export interface User {
    avatar: string;
    name: string;
}

export interface Stats {
    followers: number;
    following: number;
}

export type StatsType = keyof Stats;

export interface ShmitterContextValue {
    user: User;
    stats: Stats;
    changeAvatar: (url: string | null) => void;
    changeName: (name: string | null) => void;
    changeStats: (statsType: StatsType, sum: number) => void;
}