import { Channels } from "./prototypes/channels";
import { GuildChannels } from "./prototypes/guildChannels";
import { GuildMembers } from "./prototypes/guildMembers";
import { Guilds } from "./prototypes/guilds";
import { Users } from "./prototypes/users";
import { Emojis } from "./prototypes/emojis";
import { GuildEmojis } from "./prototypes/guildEmojis";
import { GuildMessages } from "./prototypes/guildMessages";
import { Roles } from "./prototypes/roles";
import { verifyDJSVersion } from "./utils";

export class DJSEasier {
  constructor() {
    verifyDJSVersion();

    new Channels();
    new Emojis();
    new GuildChannels();
    new GuildEmojis();
    new GuildMembers();
    new GuildMessages();
    new Guilds();
    new Roles();
    new Users();
  }
}

