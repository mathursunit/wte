"use client";

import { Plus, Check, Camera, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MealSlot({ date, type, meal, onAdd }) {
    const isPlanned = !!meal;
    const isCooked = meal?.isCooked;

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted">
                    {type}
                </span>
                {isPlanned && (
                    <button className="p-1 text-muted hover:text-foreground">
                        <MoreVertical size={14} />
                    </button>
                )}
            </div>

            {!isPlanned ? (
                <button
                    onClick={() => onAdd(date, type)}
                    className="h-[80px] w-full border-2 border-dashed border-border rounded-md flex items-center justify-center text-border hover:border-primary hover:text-primary transition-all group"
                >
                    <Plus size={20} className="group-hover:scale-110 transition-transform" />
                </button>
            ) : (
                <div
                    className={cn(
                        "p-3 rounded-md border-l-4 shadow-sm min-h-[80px] flex flex-col justify-between",
                        isCooked
                            ? "bg-success-light border-success"
                            : "bg-primary-light border-primary"
                    )}
                >
                    <div>
                        <h4 className="text-sm font-semibold line-clamp-2 leading-tight">
                            {meal.recipe.name}
                        </h4>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <button
                            className={cn(
                                "p-1 rounded-full transition-colors",
                                isCooked ? "bg-success text-white" : "bg-white text-muted hover:bg-primary-light"
                            )}
                        >
                            <Check size={14} />
                        </button>

                        <div className="flex items-center gap-1">
                            {!meal.photoUrl && (
                                <button className="p-1 text-muted hover:text-primary transition-colors">
                                    <Camera size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
