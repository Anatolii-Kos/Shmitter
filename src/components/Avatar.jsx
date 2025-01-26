import {useContext} from "react";
import {Twittercontext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(Twittercontext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                changeName(name);
            }
            }
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;
