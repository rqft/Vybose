import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
export default class CanvasCommand extends BaseCommand {
    constructor(client: CommandClient);
    run: typeof import("../../../tools/format/some-random-api").SomeRandomApi.canvas;
}