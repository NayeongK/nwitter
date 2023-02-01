import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";


const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                    <Route style={{ maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center" }}>
                        <Route path="/" element={<Home userObj={userObj} />}>
                        </Route>
                        <Route path="/profile" element={<Profile refreshUser={refreshUser} userObj={userObj} />}>
                        </Route>
                    </Route>
                ) : (
                    <Route path="/" element={<Auth />}>
                    </Route>
                )}
                <Route path="*" element={<Navigate replace to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;