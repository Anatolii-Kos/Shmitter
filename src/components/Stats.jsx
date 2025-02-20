import Avatar from "./Avatar.jsx";
import { changeFollowers, changeFollowing } from "../redux/accountActions.js";
import { useDispatch, useSelector } from "react-redux";

const Stats = () => {
    const user = useSelector(state => state.user) || {}; // Защита от null
    const stats = useSelector(state => state.stats) || {}; // Защита от null
    const dispatch = useDispatch();

    const { name } = user;
    const { followers, following } = stats;

    return (
        <div className="user-stats">
            <div>
                <Avatar />
                {name}
            </div>
            <div className="stats">
                <div
                    onClick={() => dispatch(changeFollowers(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowers(-1));
                    }}
                >
                    Followers: {followers}
                </div>
                <div
                    onClick={() => dispatch(changeFollowing(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowing(-1));
                    }}
                >
                    Following: {following}
                </div>
            </div>
        </div>
    );
};

export default Stats;
