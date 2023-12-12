import { mergeAlternately } from "./merge_strings_alternately";

function test(description: string, callback: () => void) {
    console.log(`Running test: ${description}`);
    try {
        callback();
        console.log("Test passed!");
    } catch (error) {
        console.error("Test failed:", error);
    }
}

function assertEqual(actual: any, expected: any) {
    if (actual !== expected) {
        throw new Error(`Assertion failed: Expected ${expected}, but received ${actual}`);
    }
}

const runTest = () => {
    test("Merge strings alternately - Example 1", () => {
        const word1 = "abc";
        const word2 = "pqr";
        const expected = "apbqcr";
        const result = mergeAlternately(word1, word2);
        assertEqual(result, expected);
    });

    test("Merge strings alternately - Example 2", () => {
        const word1 = "ab";
        const word2 = "pqrs";
        const expected = "apbqrs";
        const result = mergeAlternately(word1, word2);
        assertEqual(result, expected);
    });

    test("Merge strings alternately - Example 3", () => {
        const word1 = "abcd";
        const word2 = "pq";
        const expected = "apbqcd";
        const result = mergeAlternately(word1, word2);
        assertEqual(result, expected);
    });
};
runTest();
