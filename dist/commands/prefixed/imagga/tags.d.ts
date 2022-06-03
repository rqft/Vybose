import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
export default class ImaggaTagsCommand extends BaseCommand {
    constructor(client: CommandClient);
    run: typeof import("../../../tools/format/imagga").Imagga.tags;
}
