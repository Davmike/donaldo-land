import { createContext, useContext } from "react";

interface ComponentsProps {
    // menu
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    // programs
    isHidePrograms: boolean;
    setIsHideprograms: (isHidePrograms: boolean) => void;
    // heros
    isHideHeros: boolean;
    setIsHideHeros: (isHideHeros: boolean) => void;
    // design
    isHideDesign: boolean;
    setIsHideDesign: (isHideDesign: boolean) => void;
    // outdoor
    isHideOutdoor: boolean;
    setIsHideOutdoor: (isHideOutdoor: boolean) => void;
    // eatand drinks
    isHideEat: boolean;
    setIsHideEat: (isHideEat: boolean) => void;
    // contact
    isHideContact: boolean;
    setIsHideContact: (isHideContact: boolean) => void;
    // shows
    isHideShows: boolean;
    setIsHideShows: (isHideShows: boolean) => void;
    // language
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    language: string;
    setLanguage: (language: string) => void;
    // about
    isHideAbout: boolean;
    setIsHideAbout: (isHideAbout: boolean) => void;
    // stars postion
    mousePosition: any;
    setMousePosition: (mousePosition: any) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
    const context = useContext(MyContext);
    return context;
}