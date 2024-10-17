import { createStore } from "zustand/vanilla";
import { CounterSlice, createCounterSlice } from "./counter-store";
import { createNameSlice, NameSlice } from "./name-store";
import { devtools } from "zustand/middleware";

export type AppStore = CounterSlice & NameSlice;

export const createAppStore = () => {
    return createStore<AppStore>()(
        devtools((...args) => ({
            ...createCounterSlice(...args),
            ...createNameSlice(...args),
        }))
    );
};
