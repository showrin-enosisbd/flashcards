import { createStore } from "zustand/vanilla";
import { CounterSlice, createCounterSlice } from "./counter-store";
import { createNameSlice, NameSlice } from "./name-store";

export type AppStore = CounterSlice & NameSlice;

export const createAppStore = () => {
    return createStore<AppStore>()((...args) => ({
        ...createCounterSlice(...args),
        ...createNameSlice(...args),
    }));
};
