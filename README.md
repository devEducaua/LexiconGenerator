# Why?
This is api for conlangs (Construct Languages), Good words generators are rarely then I made my own.

# How to build
only two dependencies in this API: Bun and Hono

1. clone the repo
```sh
git clone https://github.com/devEducaua/lexicongenerator.git
```

2. install the dependencies
```sh
bun install
```

# How to use
This api need's a request in the ```POST``` method with the Content: ```Application/json```.
Send a body with an json with: an array of consonants and other of vowels. the number of words, and the max number of syllables for word.
ex: 
```
{
    consonants: [ "p", "t", "k", "l", "m", "n", "s" ],
    vowels: [ "a", "i", "u" ],
    numberWords: 100,
    maxLength: 10
}
```

# Updates
Structure of the syllables are only CV still, in future updates will have the option for the Structure of the syllables.
