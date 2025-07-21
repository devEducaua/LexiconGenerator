import { bodyDto } from "./bodyDto";
import GenerateWords from "./GenerateWords";

const con: string[] = ['p', 't', 'k', 's', 'm', 'n', 'l'];
const vow: string[] = ['a', 'i', 'u'];

const dto: bodyDto = { consonants: con, vowels: vow, numberWords: 100, maxLength: 10 };

const gen = new GenerateWords(dto);

console.log(gen.getWords());
