#Legend of emojis:‍
WIFM = 🤑, ✅ = Best practice, 🚀 = Advanced, ‍👯‍ = Analogy, 🖼‍ = Cool visual, 📓 = Literature, 😂 = Joke, 💡 = Insight

# The fundamental of writing tests

## My first pseudo test

- The UAT
- Create file
- Require
- Code 2 scenario
- Run
- Add more tests, run
- Value - Single click, I know whether...

## Preparing my computer

- Install jest
- Jest config examples: files, show notification
- Configure package-json, start watch mode
- npm t
- Watch mode with cool configs 🖼
- Create file, nothing runs

## The suite structure

- Describe - is used for categorization and reporting, like folder 👯‍
- Our first test - name & body, when on sale - 10%
- Make it fail - the aim of test is to catch bugs, see it catching bug once ✅
- The value of describe - bad and good report 🖼

## AAA

- Intent - show 3 parts without AAA
- AAA Formalized
- Arrange - Objects, add records, UI, test doubles
- Act - Do something to our system, one function or UI walk-through
- Assert - Something should change
- Anti-pattern: unstructured code
- Repeating idea: Declarative, as HTML 💡

## Assertions

- Intro - Show get products method with test
- Motivation - This assertion will go complex, loops - bugs? we might write test for tests 😂
- Better - Simple, declarative, HTML ‍‍‍👯‍
- Do it - write expect toContain
- Value1 - Shorter
- Value2 - Better error 🖼‍
- AAA BP ✅
- Exception example
- Show a list of assertions from document 🖼‍
  https://jestjs.io/docs/en/expect
  https://github.com/jest-community/jest-extended
- Show custom ‍🚀
- Recap multiple BPs ✅

## Callback tests

- Intro: Show delete SUT
- Surprising: I plant bugs and still pass!
- Why: The buggy flow exemplified with console.log (Entrance, exit2, exit1)
- Better: the done param

## Coffee break ☕️

# Setup & teardown

- Intro: need to prepare and properly close stuff, like DB, server mockg
- Rundown with console.log 🖼
- Beforeall - Anything that is 'one time', mock server, global.config
- Afterall - Teardown
- Beforeach - Something that a test can change, reset. Like config.value or process.env
- Aftereach - ...
- The risk - Coupling via globals, show shared service, complexity is rising when coupled, not longer just 7 lines of code
- BP: Each test is a tiny universe ✅
- What's wrong with beforeAll - Per file, wasteful for opening precious resources
- Global before all - DB
- Recap: all hooks image 🖼
