import { z } from "zod";

export const ColorSchema = z.object({
    name: z.string().describe("A name to describe the color palette"),
    colors: z.array(
        z.object({
            hashCode: z.string().describe("The hash code of the color"),
            colorName: z.string().describe("A name to describe the color"),
        })),
    bestFor: z.string().describe("Who the intended audience it would best suit"),
});