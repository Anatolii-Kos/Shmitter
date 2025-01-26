import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {Twittercontext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 42,
        following: 10
    });

    const changeAvatar = url => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = name => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }

    const changeStatsUp = field => {
        setStats((prevValue) => ({
            ...prevValue,
            [field]: prevValue[field] < 1000
                ? prevValue[field] + 1
                : 0
        }));
    };

    const changeStatsDown = field => {
        setStats((prevValue) => ({
            ...prevValue,
            [field]: prevValue[field] > 1
                ? prevValue[field] - 1
                : prevValue[field]
        }));
    };

    return (
        <div className={'app'}>
            <Twittercontext.Provider value={{
                user,
                stats,
                changeAvatar,
                changeName,
                changeStatsUp,
                changeStatsDown
            }}>
                <Navigation/>
                <Body/>
            </Twittercontext.Provider>
        </div>
    )
}

export default App
