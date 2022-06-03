"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interactions = exports.commands = exports.selfclient = exports.client = void 0;
const detritus_client_1 = require("detritus-client");
const secrets_1 = require("./secrets");
const cache = {
    users: true,
    guilds: true,
    channels: true,
    emojis: true,
    members: true,
    roles: true,
    interactions: true,
    messages: true,
    applications: false,
    connectedAccounts: false,
    guildScheduledEvents: false,
    notes: false,
    presences: false,
    relationships: false,
    sessions: false,
    stageInstances: false,
    stickers: false,
    typings: false,
    voiceCalls: false,
    voiceConnections: false,
    voiceStates: false,
};
exports.client = new detritus_client_1.ShardClient(secrets_1.Secrets.Token, {
    isBot: true,
    gateway: { loadAllMembers: true, intents: "ALL" },
    cache,
});
exports.selfclient = new detritus_client_1.ShardClient(secrets_1.Secrets.UserToken, {
    isBot: false,
});
exports.commands = new detritus_client_1.CommandClient(exports.client, {
    prefix: secrets_1.Secrets.DefaultPrefix,
    activateOnEdits: true,
});
exports.interactions = new detritus_client_1.InteractionCommandClient(exports.client, {
    checkCommands: true,
    strictCommandCheck: true,
});
