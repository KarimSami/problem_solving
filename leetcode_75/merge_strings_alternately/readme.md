# String Merge Challenge

Given two strings `word1` and `word2`, the task is to merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

The function should return the merged string.

## Examples

### Example 1

**Input:** `word1 = "abc"`, `word2 = "pqr"`  
**Output:** `"apbqcr"`  
**Explanation:** The merged string will be merged as so:

### Example 2

**Input:** `word1 = "ab"`, `word2 = "pqrs"`  
**Output:** `"apbqrs"`  
**Explanation:** Notice that as `word2` is longer, `"rs"` is appended to the end.

### Example 3

**Input:** `word1 = "abcd"`, `word2 = "pq"`  
**Output:** `"apbqcd"`  
**Explanation:** Notice that as `word1` is longer, `"cd"` is appended to the end.

## Constraints

-   `1 <= word1.length, word2.length <= 100`
-   `word1` and `word2` consist of lowercase English letters.
