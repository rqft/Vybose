import { CommandClient } from "detritus-client";
import { AudioMetadata } from "../../../tools/command-metadata";
import { Formatter } from "../../../tools/formatter";
import { Parameters } from "../../../tools/parameters";
import { BaseAudioCommand } from "../basecommand";

export default class AudioVolumeCommand extends BaseAudioCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "audio pitch",
      metadata: AudioMetadata("set pitch", "<target: Audio> <pitch: number>"),
      type: [
        {
          name: "pitch",
          type: Parameters.number({ min: 0.01, max: 2 }),
          required: true,
        },
      ],
    });
  }

  run = Formatter.Audio.pitch;
}