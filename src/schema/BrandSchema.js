import { z } from "zod";
import { ColorSchema } from "./ColorSchema";

export const BrandSchema = z.object({
    name: z.object({
        initial: z.string().describe("The initial name of the brand or company"),
        suggestion: z.string().describe("A suggestion for a name of the brand or company"),
    }),
    description: z.object({
        initial: z.string().describe("The initial description of the brand or company"),
        suggestion: z.string().describe("A suggestion for a description of the brand or company"),
    }),
    theme: z.object({
        initial: z.string().describe("The initial theme of the brand or company"),
        suggestions: z.array(z.string()).describe("A list of suggestions for a theme of the brand or company"),
    }),
    colorPalette: z.object({
        initial: ColorSchema.describe("The initial color palette of the brand or company"),
        suggestions: z.array(ColorSchema).describe("A list of suggestions for a color palette of the brand or company"),
    }),
    suggestion: z.string().describe("A suggestion to the user on what more to include in the description to make the generation of a logo tailor for the brand or company more specifically."),
});
