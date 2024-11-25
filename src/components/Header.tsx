import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface Props3 {
    heroH: HeroInfo
}

const Header = ({heroH}: Props3) => {

    //const {hero} = useContext(SWContext);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{heroH.name}</h1>
        </header>
    );
};

export default Header;