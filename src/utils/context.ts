import {createContext} from "react";
import {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    hero: {
    	name: '',
    	gender: '',
    	birth_year: '',
    	height: 0,
    	mass: 0,
    	hair_color: '',
    	skin_color: '',
    	eye_color: ''
    },
    setHero: (hero: HeroInfo) => {},
});