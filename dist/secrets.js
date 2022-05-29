"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secrets = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = process.env;
exports.Secrets = {
    Token: env.TOKEN,
    AltTokens: [],
    UserToken: env.USER_TOKEN,
    Key: {
        WolframAlpha: env.WOLFRAM_ALPHA_API_KEY,
        PxlAPI: env.PXL_API_KEY,
        ImaggaAuth: env.IMAGGA_API_KEY,
        Pylon: env.PYLON_API_KEY,
        OpenAI: env.OPENAI_API_KEY,
        HuggingFace: env.HUGGING_FACE_API_KEY,
        EmojiData: env.EMOJI_DATA_API_KEY,
    },
    AbstractKeys: {
        Holidays: env.ABSTRACT_HOLIDAYS_KEY,
        Timezone: env.ABSTRACT_TIMEZONE_KEY,
        PhoneValidation: env.ABSTRACT_PHONE_VALIDATION_KEY,
        CompanyEnrichment: env.ABSTRACT_COMPANY_ENRICHMENT_KEY,
        IpGeolocation: env.ABSTRACT_IP_GEOLOCATION_KEY,
        EmailValidation: env.ABSTRACT_EMAIL_VALIDATION_KEY,
        ExchangeRates: env.ABSTRACT_EXCHANGE_RATES_KEY,
    },
    InteractionGuilds: env.INTERACTION_GUILD_IDS.split(","),
    DefaultPrefix: env.DEFAULT_PREFIX,
    ClearInteractions: env.CLEAR_INTERACTIONS === "true",
    StorageChannelId: env.STORAGE_CHANNEL_ID,
    Host: env.MODE === "dev" ? "http://localhost:3000" : env.HOST,
    ApiToken: env.API_TOKEN,
};