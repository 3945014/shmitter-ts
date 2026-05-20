import {useContext} from "react";
import {ShmitterContext} from "../utils/context.ts";

interface AvatarProps {
    size?: 'small';
}

const Avatar = ({size}: AvatarProps) => {
    const context = useContext(ShmitterContext);
    if (!context) return null;
    const {user, changeAvatar, changeName} = context;
    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                if (url) changeAvatar(url);
            }}

            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt('Enter name');
                if (name) changeName(name);
            }
            }
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}/>
    );
};

export default Avatar;
