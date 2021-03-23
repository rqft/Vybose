import { ClientOptions } from "discord.js";
import { CustomEmojis } from "./enums/customEmojis";
import { Secrets } from "./secrets";
type List<T> = {
  [any: string]: T;
};
const globalConf = {
  botId: "760143615124439040",
  badges: {
    "504698587221852172": [`${CustomEmojis.GUI_OWNERCROWN} Bot Owner`],
  } as List<string[]>,
  levels: {
    "760143615124439040": 999,
  } as List<number>,
  token: Secrets.BOT_TOKEN,
  allowPings: {
    repliedUser: false,
    users: [],
  } as ClientOptions["allowedMentions"],
  ownerIDs: ["504698587221852172", "760143615124439040", "533757461706964993"],
  modules: {
    commands: {
      prefixes: ["$"] as string[],
      mentionPrefix: true,
    },
  },
};
export default globalConf;