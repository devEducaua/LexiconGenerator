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

3. compile
```sh
bun run build
```

4. run the api
```sh
bun run start
```

# How to use
This api need's a request in the ```POST``` method with the Content: ```Application/json```.
Send a body with an json with: an array of consonants and other of vowels. the number of words, and the max number of syllables for word. syllables for exclude of the generation, and the struct of the syllables.
ex: 
```
{
    "consonants": [ "p", "t", "k", "l", "m", "n", "s" ],
    "vowels": [ "a", "i", "u" ],
    "numberWords": 30,      // Number of Words to generate
    "maxLength": 4,         // Max number of syllables for word
    "minLength": 1,         // Min number of syllables for word
    "exclusions": [ "ku" ], // Syllables for no generate
    "struct": "(C)V(C)"     // Struct C -> consonant, V -> vowels. () -> optional
    "rewrites": {           // Syllables for substitute for others
        "aa": "a",
        "ee": "e",
        "ii": "i",
        "uu": "u",
        "oo": "o"
    }
}
```

# Updates
see TODO.md for this
