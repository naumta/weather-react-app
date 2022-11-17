import { createContext, Dispatch, SetStateAction } from "react";

interface ICity {
    city: string,
    setCity: Dispatch<SetStateAction<string>>,
}

interface IAuth {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

interface IModal {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

type AddContext = ICity & IAuth & IModal;

export const Context = createContext({} as AddContext );