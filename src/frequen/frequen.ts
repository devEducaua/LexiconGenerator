import { frequenDto } from "../dtos/frequenDto";

export default function frequen(body: frequenDto) {
    const { phonemes, text } = body;

    const results = new Map<string, number>;

    for (const phoneme of phonemes) {
        results.set(phoneme, 0);
    }

    for (const phoneme of phonemes) {
        const regex = new RegExp(phoneme, 'g');

        const matches = text.match(regex);

        const count = matches ? matches.length : 0;

        results.set(phoneme, count);
    }
    return results;
}
