import fetch from "node-fetch";
import { config } from "../config";
import { getUser } from "../functions/getUser";
import { ICommand } from "../interfaces/ICommand";
import { CustomEmojis } from "../maps/customEmojis";
module.exports = {
  name: "fapi",
  usesArgs: true,
  restrictions: {},
  description: "fAPI image manipulation",
  usage:
    '<endpoint: string> <type: "user" | "url"> <thing: User | URL> [args: Object]',
  async run(message, args) {
    const ret = await message.reply(CustomEmojis.GUI_TYPING);
    var url = null;
    var usesAtt = false;
    switch (args[1]) {
      case "user":
        const user = await getUser(message, args, false, 2);
        if (!user) return await message.channel.send(":warning: Unknown User");
        url =
          user.avatarURL({ size: 1024, format: "png" }) ??
          user.defaultAvatarURL;
        break;
      case "url":
        url = args[2];
        break;
      default:
        if (!message.attachments.array()[0]) {
          await ret.delete();
          return await message.reply("you need to supply an image");
        }
        url = message.attachments.array()[0]!.url;

        usesAtt = true;
        break;
    }

    const endpoint = args[0]!;
    const argument = args[usesAtt ? 1 : 3]
      ? args.slice(usesAtt ? 1 : 3).join(" ")
      : "{}";
    const baseURL = "https://fapi.wrmsr.io/" + endpoint;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.global.keys.fAPI}`,
    };
    const body = {
      images: [url],
      args: JSON.parse(argument),
    };
    const fAPI = await fetch(baseURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    await ret.delete();
    if (!fAPI.ok) {
      return await message.reply(
        `There was an error (code ${
          fAPI.status
        }). \`\`\`diff\n${fAPI.statusText
          .split("\n")
          .map((e) => `- ${e}`)}\n\`\`\``
      );
    }

    await message.reply(``, {
      files: [
        {
          name: "fAPI.png",
          attachment: await fAPI.buffer(),
        },
      ],
    });
  },
} as ICommand;