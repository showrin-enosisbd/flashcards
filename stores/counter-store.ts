import { StateCreator } from "zustand";
import { AppStore } from "./app-store";

export type CounterState = {
    count: number;
};

export type CounterActions = {
    decrementCount: () => void;
    incrementCount: () => void;
};

export type CounterSlice = CounterState & CounterActions;

export const defaultCounterInitState: CounterState = {
    count: 0,
};

export const createCounterSlice: StateCreator<
    AppStore,
    [],
    [],
    CounterSlice
> = (set) => ({
    ...defaultCounterInitState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
});
