import { Command, CommandClient } from "detritus-client";
import { Markup } from "detritus-client/lib/utils";
import { Imagga } from "pariah";
import { Color } from "pariah/dist";
import { Brand } from "../../../enums/brands";
import { createBrandEmbed } from "../../../functions/embed";
import { Parameters } from "../../../functions/parameters";
import { padCodeBlockFromRows } from "../../../functions/tools";
import { Secrets } from "../../../secrets";
import { BaseCommand, ImageUrlArgs } from "../basecommand";

export default class ImaggaColorsCommand extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "colors",

      label: "image",
      type: Parameters.imageUrl,
    });
  }
  async run(context: Command.Context, args: ImageUrlArgs) {
    const im = new Imagga(Secrets.Key.imaggaAuth);
    const colors = await im.colors({ image_url: args.image });
    if (colors.status.type === "error") throw new Error(colors.status.text);

    const embed = createBrandEmbed(Brand.IMAGGA, context);
    embed.setThumbnail(args.image);
    embed.addField(
      "Background Colors",
      Markup.codeblock(colorsTable(colors.result.colors.background_colors))
    );
    embed.addField(
      "Foreground Colors",
      Markup.codeblock(colorsTable(colors.result.colors.foreground_colors))
    );
    return await context.editOrReply({ embed });
  }
}
function colorsTable(colors: Array<Color>): string {
  return padCodeBlockFromRows([
    ["Color", "Percentage"],
    ...colors.map((v) => [
      `${v.closest_palette_color} (${v.html_code})`,
      v.percent.toFixed(3),
    ]),
  ]).join("\n");
}
