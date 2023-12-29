## Pure Function

### A pure function is deterministic

- that given the same input, the function will always return the same output.
- it’s output is solely dependent on the arguments it receives.

### A pure function will not cause side effects

- Side effects make our code harder to read.

### why should our functions be pure?

- Readability
- Testability
  - pure functions are deterministic by nature, writing unit tests for them is a lot simpler.
- parallel code
  - Since pure functions only depend on their input, and will not cause side effects, they are great for scenarios where parallel threads run and use shared memory.
- Modularity and Reusability
  - Because they only depend on the input you feed them, you can easily reuse functions between different parts of your codebase or different projects altogether.
- Referential Transparency
  - a function call could be replaced by its output value, without changing the overall behavior of our program.

### unpure to pure

- First ensure that all the variables that the function depends on are passed as arguments
- Instead of mutating (manipulating) b and c, we can return new values which will reflect the new values.
