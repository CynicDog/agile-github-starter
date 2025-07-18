import { generateSlug } from '../src/main';

test('should generate different slugs on repeated calls', () => {
    const results = new Set<string>();
    for (let i = 0; i < 100; i++) {
        results.add(generateSlug());
    }
    expect(results.size).toBeGreaterThan(80);
});