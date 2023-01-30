import { authService, dbService } from "fbase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        navigate.push("/");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName });
            refreshUser();
        } 
    };

    // 필터링
    // const getMyNweets = async () => {
    //     const nweets = await dbService
    //         .collection("nweets")
    //         .where("creatorId", "==", userObj.uid)
    //         .orderBy("createdAt", "asc")
    //         .get();

    //         console.log(nweets.docs.map((doc) => doc.data()));
    // };

    // useEffect(() => {
    //     getMyNweets();
    // }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    type="text" 
                    placeholder="Display Name"
                    value={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;