import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
export default class TagInspectCommand extends BaseCommand {
    constructor(client: CommandClient);
    run: typeof import("../../../tools/format/tag").Tag.inspect;
}