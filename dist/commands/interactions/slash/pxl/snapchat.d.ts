import { BaseSlashSubCommand } from "../baseslash";
export declare class PxlSnapchatSlashSubCommand extends BaseSlashSubCommand {
    name: string;
    description: string;
    constructor();
    run: typeof import("../../../../tools/format/pxl").Pxl.snapchat;
}