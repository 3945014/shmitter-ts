import Avatar from "./Avatar.tsx";
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.ts";

const Stats = () => {
    const context = useContext(ShmitterContext);
    if (!context) return null;
    const {user, stats, changeStats} = context;

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={() => changeStats('followers', 1)}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         changeStats('followers', -1)
                     }}
                >Followers: {stats.followers}</div>
                <div onClick={() => changeStats('following', 1)}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         changeStats('following', -1)
                     }}
                >Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;