import { BaseSlashSubCommand } from "../baseslash";
export declare class TodoPutSlashSubCommand extends BaseSlashSubCommand {
    name: string;
    description: string;
    constructor();
    run: typeof import("../../../../tools/format/todo").Todo.put;
}
