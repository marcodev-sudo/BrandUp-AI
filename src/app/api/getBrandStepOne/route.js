import { NextResponse } from 'next/server';
import openai from '@/utils/openai';

export async function POST(req) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }
        const completion = await openai.chat.completions.create({
            model: "gpt-4.1",
            messages: [{ role: "user", content: prompt }],
        });

        const responseText = completion.choices[0].message.content;
        return NextResponse.json({
            status: 200,
            text: responseText,
        });
    } catch (error) {
        console.error("Error during OpenAI request:", error);
        return NextResponse.json({ error: "Failed to fetch data from OpenAI" }, { status: 500 });
    }
}