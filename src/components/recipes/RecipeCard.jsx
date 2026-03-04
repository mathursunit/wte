"use client";

import { Clock, Star, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RecipeCard({ recipe }) {
    return (
        <div className="card flex flex-col overflow-hidden bg-white group h-full">
            {/* Recipe Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                {recipe.imageUrl ? (
                    <img
                        src={recipe.imageUrl}
                        alt={recipe.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted">
                        < UtensilsCrossed size={48} opacity={0.2} />
                    </div>
                )}

                {/* Favorite Star */}
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-muted hover:text-yellow-500 transition-colors shadow-sm">
                    <Star size={16} fill={recipe.isFavorite ? "currentColor" : "none"} />
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        {recipe.name}
                    </h3>
                </div>

                <p className="text-muted text-xs line-clamp-2 mb-4">
                    {recipe.description}
                </p>

                <div className="mt-auto">
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-muted mb-3">
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{recipe.prepTime + recipe.cookTime} mins</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                        {recipe.tags?.map((tag) => (
                            <span
                                key={tag.id}
                                className="px-2 py-0.5 bg-background rounded-full text-[10px] font-medium text-muted uppercase tracking-wider"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
