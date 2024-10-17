"use client";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/providers/app-store-provider";

const HomePageContainer = () => {
    const { count, incrementCount, decrementCount } = useAppStore(
    (state) => state
);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Button onClick={incrementCount}>+</Button>
                    <span className="text-9xl mx-4">{count}</span>
                    <Button onClick={decrementCount}>-</Button>
                </div>
            </main>
        </div>
    );
};

export default HomePageContainer;
