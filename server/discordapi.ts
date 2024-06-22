import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config({ path: './server/credentials.env' });

const TOKEN: string | null = process.env.TOKEN || null;
const CHANNEL_ID: string | null = process.env.CHANNEL_ID || null;
const CLIENT_SECRET: string | null = process.env.CLIENT_SECRET || null;

console.log(GatewayIntentBits);

if (TOKEN === null || CHANNEL_ID == null || CLIENT_SECRET == null) { 
    console.error("Missing environment variables. Please check your credentials.env file.");
    process.exit(1);
}