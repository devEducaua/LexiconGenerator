import { describe, expect, it } from "bun:test";
import parseStruct, { letterType } from "../src/core/parseStruct";

describe("parse struct", () => {
    const struct: string = "(c)vc";
    const parsed = parseStruct(struct);

    const lt: letterType[] = [{ C: false },
                              { V: true, },
                              { C: true, }];

    it("should parse the struct correctly", () => {
        expect(parsed).toEqual(lt);
    })
})
