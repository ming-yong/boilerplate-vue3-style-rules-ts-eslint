<script setup lang="ts">
/**
 * Recommended Rule: https://typescript-eslint.io/rules/await-thenable
 */
// Incorrect
await 'value';
const createValue_wrong = () => 'value';
await createValue_wrong();


// Correct
await Promise.resolve('value');
const createValue_correct = async () => 'value';
await createValue_correct();

/**
 * Stylistic Rule: https://typescript-eslint.io/rules/array-type
 */

// Incorrect
const x_wrong: Array<string> = ['a', 'b'];
const y_wrong: ReadonlyArray<string> = ['a', 'b'];

// Correct
const x_correct: string[] = ['a', 'b'];
const y_correct: readonly string[] = ['a', 'b'];
</script>