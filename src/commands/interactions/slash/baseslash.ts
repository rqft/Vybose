import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  ImageFormats,
} from "detritus-client/lib/constants";
import {
  InteractionCommandOption,
  ParsedArgs,
} from "detritus-client/lib/interaction";
import { Find } from "../../../tools/find-image";
import { Parameters } from "../../../tools/parameters";
import { BaseInteraction } from "../baseinteraction";

export class BaseSlashCommand<T = ParsedArgs> extends BaseInteraction<T> {
  error = "Slash";
  permissionsIgnoreClientOwner = true;
  type = ApplicationCommandTypes.CHAT_INPUT;

  triggerLoadingAfter = 1000;
}

export class BaseSlashSubCommand<
  T = ParsedArgs
> extends InteractionCommandOption<T> {
  error = "Slash";
  type = ApplicationCommandOptionTypes.SUB_COMMAND;
}

export class BaseSlashCommandGroup<
  T = ParsedArgs
> extends InteractionCommandOption<T> {
  error = "Slash";
  type = ApplicationCommandOptionTypes.SUB_COMMAND_GROUP;
}

export class BaseImageOption extends InteractionCommandOption {
  constructor(format?: ImageFormats | Find.Formats) {
    super({
      name: "target",
      description: "what to use",
      value: Parameters.imageUrl(format),
      default: Parameters.Default.imageUrl(format),
      type: ApplicationCommandOptionTypes.STRING,
      required: false,
    });
  }
}
