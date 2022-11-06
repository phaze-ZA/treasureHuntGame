export const assets_location = 'assets/treasureHunter.json';

export const assets = [
    "blob.png",
    "door.png",
    "dungeon.png",
    "explorer.png",
    "treasure.png",
];

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export const NUM_ENEMIES: Record<Difficulty, number> = {
    EASY: 5,
    MEDIUM: 8,
    HARD: 10
};