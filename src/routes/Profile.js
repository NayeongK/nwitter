import { authService, dbService } from "fbase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ userObj }) => {
    const navigate = useNavigate();

    const onLogOutClick = () => {
        authService.signOut();
        navigate.push("/");
    }

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
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;