import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
export default class KwanziCommand extends BaseCommand {
    constructor(client: CommandClient);
    run: typeof import("../../../tools/format/other").kwanzi;
}
