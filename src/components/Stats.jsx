import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {Twittercontext} from "../utils/context.js";
import ResizableFontText from "./ResizableFontText.jsx";


const Stats = () => {
    const {user, stats} = useContext(Twittercontext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <ResizableFontText>Followers: {stats.followers}</ResizableFontText>
                <ResizableFontText>Following: {stats.following}</ResizableFontText>
            </div>
        </div>
    );
};

export default Stats;
