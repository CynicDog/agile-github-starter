const adjectives: string[] = [
    'brave', 'calm', 'bright', 'sneaky', 'loud',
    'gentle', 'witty', 'bold', 'shy', 'fierce',
    'jolly', 'graceful', 'quick', 'silent', 'quirky'
];

const nouns: string[] = [
    'ocean', 'forest', 'sky', 'mountain', 'river',
    'valley', 'canyon', 'desert', 'meadow', 'island',
    'glacier', 'volcano', 'tundra', 'reef', 'grove'
];

const animals: string[] = [
    'fox', 'eagle', 'wolf', 'otter', 'bear',
    'lynx', 'owl', 'panther', 'dolphin', 'hawk',
    'badger', 'moose', 'beetle', 'crab', 'sparrow'
];

function getRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateSlug(): string {
    return `${getRandom(adjectives)}-${getRandom(nouns)}-${getRandom(animals)}`;
}