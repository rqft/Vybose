declare const _default: {
    new (client: import("detritus-client").CommandClient): {
        run(context: import("detritus-client/lib/command").Context, args: import("../wrap/parser").Values<() => {}, "ping">): unknown;
        metadata: import("../wrap/base-command").CommandMetadata;
        readonly _file?: string | undefined;
        readonly argParser: import("detritus-client/lib/command").ArgumentParser;
        readonly commandClient: import("detritus-client").CommandClient;
        arg: import("detritus-client/lib/command").Argument;
        disableDm: boolean;
        disableDmReply: boolean;
        permissions?: bigint[] | undefined;
        permissionsClient?: bigint[] | undefined;
        permissionsIgnoreClientOwner?: boolean | undefined;
        priority: number;
        ratelimits: import("detritus-client/lib/commandratelimit").CommandRatelimit[];
        responseOptional: boolean;
        triggerTypingAfter: number;
        onDmBlocked?(context: import("detritus-client/lib/command").Context): any;
        onBefore?(context: import("detritus-client/lib/command").Context): boolean | Promise<boolean>;
        onBeforeRun?(context: import("detritus-client/lib/command").Context, args: any): boolean | Promise<boolean>;
        onCancel?(context: import("detritus-client/lib/command").Context): any;
        onCancelRun?(context: import("detritus-client/lib/command").Context, args: any): any;
        onError?(context: import("detritus-client/lib/command").Context, args: any, error: any): any;
        onPermissionsFail?(context: import("detritus-client/lib/command").Context, permissions: import("detritus-client/lib/command").FailedPermissions): any;
        onPermissionsFailClient?(context: import("detritus-client/lib/command").Context, permissions: import("detritus-client/lib/command").FailedPermissions): any;
        onRatelimit?(context: import("detritus-client/lib/command").Context, ratelimits: import("detritus-client/lib/command").CommandRatelimitInfo[], metadata: import("detritus-client/lib/command").CommandRatelimitMetadata): any;
        onRunError?(context: import("detritus-client/lib/command").Context, args: import("../wrap/parser").Values<() => {}, "ping">, error: any): any;
        onSuccess?(context: import("detritus-client/lib/command").Context, args: import("../wrap/parser").Values<() => {}, "ping">): any;
        onTypeError?(context: import("detritus-client/lib/command").Context, args: any, errors: any): any;
        aliases: string[];
        args: import("detritus-client/lib/command").ArgumentOptions[];
        choices: any[] | undefined;
        default: any;
        readonly fullName: string;
        help: string;
        label: string;
        name: string;
        readonly names: string[];
        prefixes: string[];
        type: import("detritus-client/lib/command").ArgumentType;
        setAliases(value: string[]): any;
        setArgs(value: import("detritus-client/lib/command").ArgumentOptions[]): any;
        setChoices(value: any[] | undefined): any;
        setDefault(value: any): any;
        setHelp(value: string): any;
        setLabel(value: string): any;
        setName(value: string): any;
        setPrefixes(value: string[]): any;
        setType(value: import("detritus-client/lib/command").ArgumentType): any;
        check(name: string): boolean;
        getArgs(attributes: import("detritus-client").CommandAttributes, context: import("detritus-client/lib/command").Context): Promise<{
            errors: any;
            parsed: any;
        }>;
        getName(content: string): string | null;
    };
};
export default _default;
