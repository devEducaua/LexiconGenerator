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
Send a body with an json with: the groups. the number of words, and the max number of syllables for word. syllables for exclude of the generation, and the structs of the syllables.
ex: 
```
{
    "groups": {
        "C": [ "p", "t", "k", "l", "m", "n", "s" ],
        "V": [ "a", "i", "u" ],
        "F": [ "m", "n" ]
    }, 
    "structs": "V/CV/CVF/VF",
    "numberWords": 30,
    "maxLength": 4,
    "minLength": 1,
    "exclusions": [ "ti" ],
    "rewrites": {
        "aa": "a"
    }
}
```
