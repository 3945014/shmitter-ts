import './App.css'
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import {useState} from "react";
import {ShmitterContext} from "./utils/context.ts";
import type {StatsType, Stats, User} from "./utils/types";



function App() {
    const [user, setUser] = useState<User>({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        following: 0
    });

    const changeStats = (statsType: StatsType, sum: number) => {
        const res: number = stats[statsType] + sum;
        setStats(prevState => ({...prevState, [statsType]: res < 0 ? 0 : res}));
    };


    const changeAvatar = (url: string | null) => {
        //setUser({...user, avatar: url || user.avatar });
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    };

    const changeName = (name: string | null) => {
        //setUser({...user, name: name || user.name });
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    };


    return (
        <div className={'app'}>
            <ShmitterContext value={{
                user, stats, changeAvatar, changeName, changeStats
            }}>
                <Navigation/>
                <Body/>
            </ShmitterContext>

        </div>
    )
}

export default App
