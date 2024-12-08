import React from "react";
import MainPage from "./Pages/MainPage/MainPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Contents from "./components/Contents";
import AsideMenu from "./components/AsideMenu";

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <SignedOut>
                <MainPage />
            </SignedOut>
            <SignedIn>
                <Contents />
                <AsideMenu />
            </SignedIn>            
        </div>
    );
};

export default App;