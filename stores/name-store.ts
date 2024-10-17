import { StateCreator } from "zustand";
import { AppStore } from "./app-store";

export type NameState = {
    name: string;
};

export type NameActions = {
    changeName: (newName: string) => void;
};

export type NameSlice = NameState & NameActions;

export const defaultNameInitState: NameState = {
    name: "",
};

export const createNameSlice: StateCreator<AppStore, [], [], NameSlice> = (
    set
) => ({
    ...defaultNameInitState,
    changeName: (newName) => set(() => ({ name: newName })),
});
