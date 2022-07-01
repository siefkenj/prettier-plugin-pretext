import type { Plugin } from "./types";
import parser from "./parser";
import printer from "./printer";

const plugin: Plugin = {
    languages: [
        {
            name: "PTX",
            parsers: ["ptx"],
            extensions: [".xml", ".ptx"],
            vscodeLanguageIds: ["xml", "ptx"],
            linguistLanguageId: 399,
        },
    ],
    parsers: {
        ptx: parser,
    },
    printers: {
        ptx: printer,
    },
    options: {
        xmlSelfClosingSpace: {
            type: "boolean",
            category: "XML",
            default: true,
            description: "Adds a space before self-closing tags.",
            since: "1.0.0",
        },
        xmlWhitespaceSensitivity: {
            type: "choice",
            category: "XML",
            default: "strict",
            description: "How to handle whitespaces in XML.",
            choices: [
                {
                    value: "strict",
                    description:
                        "Whitespaces are considered sensitive in all elements.",
                },
                {
                    value: "ignore",
                    description:
                        "Whitespaces are considered insensitive in all elements.",
                },
            ],
            since: "1.0.0",
        },
    },
    defaultOptions: {
        printWidth: 80,
        tabWidth: 4,
    },
};

export = plugin;
