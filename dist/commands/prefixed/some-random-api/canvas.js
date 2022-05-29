"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("detritus-client/lib/constants");
const command_metadata_1 = require("../../../tools/command-metadata");
const formatter_1 = require("../../../tools/formatter");
const parameters_1 = require("../../../tools/parameters");
const basecommand_1 = require("../basecommand");
class CanvasCommand extends basecommand_1.BaseCommand {
    constructor(client) {
        super(client, {
            name: "canvas",
            metadata: (0, command_metadata_1.ToolsMetadata)("generate images", "<method: CanvasMethods> <target: Image=^>"),
            type: [
                {
                    name: "method",
                    choices: formatter_1.Formatter.SomeRandomApi.CanvasMethods,
                    required: true,
                },
                {
                    name: "target",
                    type: parameters_1.Parameters.imageUrl(constants_1.ImageFormats.PNG),
                    default: parameters_1.Parameters.Default.imageUrl(constants_1.ImageFormats.PNG),
                },
            ],
        });
    }
    run = formatter_1.Formatter.SomeRandomApi.canvas;
}
exports.default = CanvasCommand;