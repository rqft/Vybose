import { MessageEmbed } from "discord.js";
import { formatTimestamp } from "../functions/formatTimestamp";
import { simpleGetLongAgo } from "../functions/getLongAgo";
import { getRole } from "../functions/getRole";
import { getUserPermissions } from "../functions/getUserPermissions";
import { Color } from "../globals";
import { ICommand } from "../interfaces/ICommand";

module.exports = {
  name: "role",
  description: "get roles",
  restrictions: {
    guildOnly: true,
  },
  usage: "<role: Role>",
  usesArgs: false,
  async run(message, args) {
    const role = getRole(message, args, true);
    if (!role) {
      return await message.channel.send("Unknown Role");
    }
    const col = role.color
      ? `https://singlecolorimage.com/get/${role.hexColor.replace(
          "#",
          ""
        )}/256x256`
      : undefined;
    const emb = new MessageEmbed();
    emb.setAuthor(`Role "${role.name}"`, col);
    emb.setColor(Color.embed);
    emb.addField(
      `❯ Role Info`,
      `:gear: **ID**: \`${role.id}\`
:link: **Role**: ${role}
:calendar_spiral: **Created**: ${simpleGetLongAgo(
        +role.createdAt
      )} ${formatTimestamp(role.createdAt)}`
    );
    const posTop = message.guild!.roles.cache.find(
      (e) => e.position == role!.position + 1
    );
    const posLow = message.guild!.roles.cache.find(
      (e) => e.position == role!.position - 1
    );

    emb.addField(
      "❯ Position",
      `**${posTop ? posTop?.position : ""} ${
        posTop ? posTop : "-- Top Of Role list"
      }**
**- ${role.position} ${role}**
**${posLow ? posLow?.position : ""} ${
        posLow ? posLow : "-- Bottom Of Role list"
      }**`
    );
    emb.addField("❯ Permissions", getUserPermissions(role));
    emb.addField(
      "❯ Members",
      role.members.size ? role.members.array().join(", ") : "None"
    );
    await message.channel.send(emb);
  },
} as ICommand;
