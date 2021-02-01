"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandFiles = exports.commands = exports.client = void 0;
const discord_rpc_1 = __importDefault(require("discord-rpc"));
const discord_js_1 = __importDefault(require("discord.js"));
const fs_1 = __importDefault(require("fs"));
const process_1 = require("process");
const config_1 = require("./config");
const formatID_1 = require("./functions/formatID");
const globals_1 = require("./globals");
exports.client = new discord_js_1.default.Client({
    ws: {
        properties: {
            $browser: config_1.config.bot.presence.browser,
        },
    },
});
exports.commands = new discord_js_1.default.Collection();
exports.commandFiles = fs_1.default
    .readdirSync(globals_1.path)
    .filter((file) => file.endsWith(".js"));
exports.commandFiles.forEach((file) => {
    const command = require(`${globals_1.path}/${file}`);
    exports.commands.set(command.name, command);
});
exports.client.once("ready", () => {
    exports.client.user?.setActivity(config_1.config.bot.presence.activity.name, {
        name: "H",
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=db_sYdSPD24&ab_channel=FalseNoise-Topic",
    });
    console.log("Ready");
});
exports.client.on("message", async (message) => {
    const prefixRegex = new RegExp(`^(${config_1.config.bot.prefixes.join("|")})( ?)`, "gi");
    if (message.content.match(prefixRegex) == null)
        return;
    const prefix = message.content.match(prefixRegex).join("");
    if (config_1.config.blacklist.users.includes(message.author.id)) {
        logBlacklistedUserAction(message);
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = exports.commands.get(commandName) ||
        exports.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)
        return;
    if (command.restrictions &&
        command.restrictions.ownerOnly &&
        !config_1.config.bot.ownerIds.includes(message.author.id))
        return message.channel.send(":warning: Missing Permissions; You need: `Bot Owner`");
    if (command.restrictions &&
        command.restrictions.guildOnly &&
        message.channel.type === "dm")
        return message.channel.send(":warning: I can't execute that command inside DMs!");
    if (command.usesArgs && !args.length) {
        let reply = `:warning: You didn't provide any arguments;`;
        if (command.usage) {
            reply += ` The proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    try {
        command.run(message, args);
    }
    catch (error) {
        console.error(error);
        message.channel.send(`:warning: ${error}`);
    }
});
exports.client.login(config_1.config.bot.token);
const cc = new discord_rpc_1.default.Client({
    transport: "ipc",
});
cc.on("ready", () => {
    cc.request("SET_ACTIVITY", {
        pid: process_1.pid,
        activity: {
            assets: {
                large_image: "glasses",
            },
            buttons: [
                {
                    label: "<3",
                    url: "https://arcy-at.github.io/page/cutie",
                },
                {
                    label: "hi",
                    url: "https://discord.com/api/oauth2/authorize?client_id=760143615124439040&permissions=8&scope=bot",
                },
            ],
        },
    });
});
cc.login({ clientId: config_1.config.bot.application.clientId });
function logBlacklistedUserAction(message) {
    config_1.config.logs.blacklist.userBlocked.forEach((e) => {
        const ch = exports.client.channels.cache.get(e);
        const channelName = message.channel.type == "dm" ? "DMs" : message.channel;
        const guildName = message.guild ? `on \`${message.guild.name}\`` : "";
        ch.send(`:warning: Blacklisted User **${message.author.tag}** ${formatID_1.formatID(message.author.id)} tried to use command ${message.cleanContent} in ${channelName} ${formatID_1.formatID(message.channel.id)} ${guildName} ${message.guild ? formatID_1.formatID(message.guild.id) : ""}`);
    });
}
