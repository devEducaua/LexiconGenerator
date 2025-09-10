import { describe, expect, it } from "bun:test";
import parseStruct from "../src/core/parseStruct";

describe("parse struct", () => {
    const struct: string = "(c)vc";
    const parsed: Map<string, boolean> = parseStruct(struct);

    const outputMap = new Map()
    outputMap.set("C", false)
    outputMap.set("V", true)
    outputMap.set("C", true)

    it("should parse the struct correctly", () => {
        expect(parsed).toEqual(outputMap);
    })
})
