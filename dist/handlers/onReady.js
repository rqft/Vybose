"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReady = void 0;
const __1 = require("..");
const config_1 = require("../config");
const leaveBlacklistedGuilds_1 = require("../logs/leaveBlacklistedGuilds");
const makeConsoleDeployMessage_1 = require("./makeConsoleDeployMessage");
const makeDeployMessage_1 = require("./makeDeployMessage");
async function onReady() {
    const start = Date.now();
    makeConsoleDeployMessage_1.makeConsoleDeployMessage();
    makeDeployMessage_1.makeDeployMessage(config_1.config.logs.starts.keys);
    const ch = __1.client.channels.cache.get(config_1.config.bot.presence.voiceChannel);
    const connection = await ch.join();
    connection.setSpeaking("SPEAKING");
    console.log(`took ${Date.now() - start}ms to complete`);
    leaveBlacklistedGuilds_1.leaveBlacklistedGuilds();
}
exports.onReady = onReady;
