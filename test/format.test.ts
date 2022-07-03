import fs from "fs";
import path from "path";
import prettier from "prettier";

import { Options } from "../src/types";
import plugin from "../src/plugin";

const fixture = fs.readFileSync(path.join(__dirname, "./fixture.ptx"), "utf-8");
const example2 = fs.readFileSync(
    path.join(__dirname, "./example2.ptx"),
    "utf-8"
);

function format(content: string, opts: Partial<Options> = {}) {
    return prettier.format(content, {
        ...opts,
        parser: "ptx",
        plugins: [plugin as any as string], // hacky but it works
    });
}

test("defaults", () => {
    const formatted = format(fixture);
    expect(formatted).toMatchSnapshot();
});

test("basic pretext source", () => {
    const formatted = format(example2);
    expect(formatted).toMatchSnapshot();
});


test("bracketSameLine => true", () => {
    const formatted = format(fixture, {
        bracketSameLine: true,
    });

    expect(formatted).toMatchSnapshot();
});

test("xmlSelfClosingSpace => false", () => {
    const formatted = format(fixture, {
        xmlSelfClosingSpace: false,
    });

    expect(formatted).toMatchSnapshot();
});

test("bracketSameLine => true, xmlSelfClosingSpace => false", () => {
    const formatted = format(fixture, {
        bracketSameLine: true,
        xmlSelfClosingSpace: false,
    });

    expect(formatted).toMatchSnapshot();
});

test("singleAttributePerLine => true", () => {
    const formatted = format(fixture, {
        singleAttributePerLine: true,
    });

    expect(formatted).toMatchSnapshot();
});
