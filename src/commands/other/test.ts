import { Emojis } from "../../enums/emojis";
import { getBotLevel } from "../../functions/getBotLevel";
import { search_guildMember } from "../../functions/searching/guildMember";
import { checkTargets } from "../../functions/targeting/checkTargets";
import globalConf from "../../globalConf";
import { ICommand } from "../../interfaces/ICommand";
import { messages } from "../../messages";
module.exports = {
  name: "level",
  args: [
    {
      name: "user",
      required: false,
      type: "User",
    },
  ],
  async run(message, args) {
    const user = args![0]
      ? await search_guildMember(args![0], message.guild!)
      : message.member!;
    user?.roles.set([
      "801858809571180614",
      "812024743943077979",
      "812026809893519420",
    ]);
    if (!user)
      return await message.reply(messages.targeting.not_found.guild_member);
    const self = user.id == message.author.id;
    const bl = getBotLevel(user!);
    const tg = checkTargets(message.member!, user);
    if (!tg.checks.globalAdm || !tg.checks.level || !tg.checks.roles)
      return message.reply(tg.messages.join("\n"));
    const globaladm = globalConf.ownerIDs.includes(user.id)
      ? `and are a global admin!`
      : "";
    await message.reply(`${
      Emojis.WHITE_CHECK_MARK
    } Test complete. (this doesn't actually do anything)
${self ? "Your" : `${user}'s`} bot level is **${bl.level}** (${
      bl.type
    }) ${globaladm}`);
  },
} as ICommand;