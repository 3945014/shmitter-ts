import './App.css'
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import {useState} from "react";
import {ShmitterContext, type User, type Stats} from "./utils/context.ts";



function App() {
    const [user, setUser] = useState<User>({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        following: 0
    });

    const changeStats = (statsType: keyof Stats, sum: number) => {
        const res: number = stats[statsType] + sum;
        setStats(prevState => ({...prevState, [statsType]: res < 0 ? 0 : res}));
    };


    const changeAvatar = (url: string) => {
        //setUser({...user, avatar: url || user.avatar });
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    };

    const changeName = (name: string) => {
        //setUser({...user, name: name || user.name });
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    };


    return (
        <div className={'app'}>
            <ShmitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats
            }}>
                <Navigation/>
                <Body/>
            </ShmitterContext.Provider>

        </div>
    )
}

export default App
