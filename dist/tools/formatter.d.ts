import { Basic } from "./format/basic";
import { Embed } from "./format/embed";
import { Image } from "./format/image";
import { Imagga } from "./format/imagga";
import { channel } from "./format/info.channel";
import { emoji } from "./format/info.emoji";
import { guild } from "./format/info.guild";
import { image } from "./format/info.image";
import { role } from "./format/info.role";
import { user } from "./format/info.user";
import * as Other from "./format/other";
import { Pxl } from "./format/pxl";
import { SomeRandomApi } from "./format/some-random-api";
import { Tag } from "./format/tag";
import { Todo } from "./format/todo";
export declare const Formatter: {
    code(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext, args: Other.CodeArgs): Promise<import("detritus-client/lib/structures").Message | null>;
    exec(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext, args: Other.ExecArgs): Promise<import("detritus-client/lib/structures").Message | null>;
    kwanzi(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext, args: Other.KwanziArgs): Promise<import("detritus-client/lib/structures").Message | null>;
    stats(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext): Promise<void>;
    define(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext, args: Other.DefineArgs): Promise<import("detritus-client/lib/structures").Message | null>;
    definitions(context: import("detritus-client/lib/interaction").InteractionAutoCompleteContext): Promise<unknown>;
    urban(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext, args: Other.DefineArgs): Promise<import("detritus-client/lib/structures").Message | null>;
    ping(context: import("detritus-client/lib/command").Context | import("detritus-client/lib/interaction").InteractionContext): Promise<import("detritus-client/lib/structures").Message | null>;
    DictionaryInstance: import("pariah/dist/lib").Dictionary.API;
    UrbanInstance: import("pariah/dist/lib").Urban.API;
    Basic: typeof Basic;
    Embed: typeof Embed;
    Pxl: typeof Pxl;
    Image: typeof Image;
    Tag: typeof Tag;
    Imagga: typeof Imagga;
    SomeRandomApi: typeof SomeRandomApi;
    Todo: typeof Todo;
    Info: {
        channel: typeof channel;
        user: typeof user;
        emoji: typeof emoji;
        image: typeof image;
        role: typeof role;
        guild: typeof guild;
    };
};
