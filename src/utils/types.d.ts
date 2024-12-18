export interface HeroInfo {
    name: string,
    gender: string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
}

export interface SWContextValue {
    hero: HeroInfo,
    setHero: (hero: HeroInfo) => void,
}

export interface Item {
    title: string,
    path: string
}

export interface Hero {
    name: string,
    img: string,
    url: string
}

export interface Characters {
    [key: string]: Hero
}