export declare const config: {
    __global: {
        guildId: string;
        locale: string;
        timezone: string;
    };
    bot: {
        prefixes: string[];
        id: string;
        token: string;
        application: {
            ownerId: string;
            clientId: string;
            publicKey: string;
        };
        ownerIds: string[];
        presence: {
            activity: {
                name: string;
                type: string;
                url: string;
            };
            browser: string;
        };
    };
    logs: {
        commands: {
            usage: {
                keys: string[];
            };
            onError: {
                keys: string[];
            };
        };
        blacklist: {
            userBlocked: string[];
            guildBlocked: string[];
            guildOwnerBlocked: string[];
        };
    };
    blacklist: {
        guild: {
            owners: string[];
            ids: string[];
        };
        users: string[];
    };
};