# Why?
This is api for conlangs (Construct Languages), Good words generators are rarely then I made my own. I am extending this to be more than generate words.

> [!WARNING]
> this is still in development


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

/generate
this endpoint generate a list of words based on the informations that you send, send a POST method request. here an example body:
```json
{
    "groups": {
        "C": [ "p", "t", "k", "l", "m", "n", "s" ],
        "V": [ "a", "i", "u" ],
        "F": [ "m", "n" ]
    }, 
    "numberWords": 30,
    "maxLength": 4,
    "minLength": 1,
    "exclusions": [ "ti" ],
    "structs": "CVF",
    "rewrites": {}
}
```

/frequen
this endpoint discover what is the most common phonemes on a text. send a POST method request, example body:
```json
{
    "phonemes": [ "o", "a", "e" ],
    "text": "The quick brown fox jumps over the lazy dog"
}
```
