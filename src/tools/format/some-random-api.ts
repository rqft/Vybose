import { Context } from "detritus-client/lib/command";
import { InteractionContext } from "detritus-client/lib/interaction";
import { APIs } from "pariah";
import { Err } from "../error";
import { convert, editOrReply, mergeArrays } from "../tools";
import { ImageArgs } from "./basic";
import * as Embed from './embed';
export const instance = new APIs.SomeRandomApi.API();
    export const BannedImageOps: Array<APIs.SomeRandomApi.Canvas> = [
      APIs.SomeRandomApi.CanvasMisc.COLOR_VIEWER,
      APIs.SomeRandomApi.CanvasMisc.FAKE_TWEET,
      APIs.SomeRandomApi.CanvasMisc.FAKE_YOUTUBE_COMMENT,
      APIs.SomeRandomApi.CanvasMisc.HEX_TO_RGB,
      APIs.SomeRandomApi.CanvasFilter.COLOR,
      APIs.SomeRandomApi.CanvasMisc.ITS_SO_STUPID,
    ];

    export const CanvasMethods = mergeArrays<APIs.SomeRandomApi.Canvas>(
      Object.values(APIs.SomeRandomApi.CanvasFilter),
      Object.values(APIs.SomeRandomApi.CanvasMisc),
      Object.values(APIs.SomeRandomApi.CanvasOverlay)
    ).filter((b) => !BannedImageOps.includes(b));

    export interface CanvasArgs extends ImageArgs {
      method: APIs.SomeRandomApi.Canvas;
      [key: string]: unknown;
    }
    export async function canvas(
      context: Context | InteractionContext,
      args: CanvasArgs
    ) {
      if (!args.target) {
        throw new Err("Can't find any images");
      }

      if (!args.method) {
        throw new Err("No canvas method specified");
      }

      if (!CanvasMethods.includes(args.method)) {
        throw new Err(`Canvas method "${args.method}" is not supported.`);
      }
      args.target = await convert(args.target);

      const data = await instance.canvas(args.method, args.target, args);

      const embed = await Embed.image(
        context,
        data,
        `${args.method}.png`
      );
      return await editOrReply(context, { embed });
    }
    export const AnimalMethods = Object.values(APIs.SomeRandomApi.Animals);
    export const ImageOnlyAnimals = [
      APIs.SomeRandomApi.Animals.WHALE,
      APIs.SomeRandomApi.Animals.PIKACHU,
    ];
    export interface AnimalArgs {
      animal: APIs.SomeRandomApi.Animals;
    }
    export async function animal(
      context: Context | InteractionContext,
      args: AnimalArgs
    ) {
      const onlyImage = ImageOnlyAnimals.includes(args.animal);
      const data: any = onlyImage
        ? await instance.get.json("/img/:animal", {
            ":animal": args.animal,
          })
        : await instance.animal(args.animal);
      const embed = await Embed.image(
        context,
        data.image,
        `${args.animal}.png`
      );
      if ("fact" in data) {
        embed.setDescription(data.fact);
      }
      return await editOrReply(context, { embed });
    }