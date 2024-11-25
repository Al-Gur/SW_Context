import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

import {HeroInfo} from "./utils/types";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {

    const [hero, setHero] = useState<HeroInfo>();

    return (
        <>
            <SWContext.Provider value={{hero, setHero}}>
            	<Header/>
            	<Main/>
            </SWContext.Provider>
            <Footer/>
        </>
    )
}

export default App