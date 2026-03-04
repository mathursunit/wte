import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import RecipeCard from "./RecipeCard";
import { Search, Plus, Filter } from "lucide-react";

export default async function RecipeList() {
    const session = await getServerSession(authOptions);

    const recipes = await prisma.recipe.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            tags: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold mb-1">Your Recipes</h1>
                    <p className="text-sm text-muted">Manage and discover your favorite meals</p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="btn btn-primary shadow-lg shadow-primary/20">
                        <Plus size={20} />
                        <span>Add Recipe</span>
                    </button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="relative flex-1 min-w-[280px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                    <input
                        type="text"
                        placeholder="Search delicious recipes..."
                        className="input pl-10 h-11"
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
                        All
                    </button>
                    <button className="px-4 py-2 bg-white border border-border text-muted hover:border-primary hover:text-primary rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                        Indian
                    </button>
                    <button className="px-4 py-2 bg-white border border-border text-muted hover:border-primary hover:text-primary rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                        Quick (30m)
                    </button>
                    <button className="px-4 py-2 bg-white border border-border text-muted hover:border-primary hover:text-primary rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                        Vegetarian
                    </button>
                    <button className="p-2 bg-white border border-border text-muted hover:text-foreground rounded-md">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {recipes.length === 0 ? (
                <div className="card p-12 text-center bg-white flex flex-col items-center">
                    <div className="p-4 bg-background rounded-full mb-4">
                        <Plus size={48} className="text-muted opacity-20" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">No recipes yet</h2>
                    <p className="text-muted max-w-xs mx-auto mb-6">
                        Start adding your favorite recipes or use the AI importer to bring them from the web.
                    </p>
                    <button className="btn btn-secondary">
                        Import from Website
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
}
