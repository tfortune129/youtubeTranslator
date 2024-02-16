import { YoutubeTranscript } from 'youtube-transcript'
import OpenAI from 'openai'

export default defineEventHandler(async (event) => {
    // Get the youtube url from the body of the request
    const { youtube_url } = await readBody(event);

    // Get the youtube video transcript
    const transcript = await YoutubeTranscript.fetchTranscript(youtube_url)
                        .then((data) => {
                            return data
                        })
                        .catch((error) => {
                            console.log(error)
                            return []
                        })


    // Convert the transcript object array to an array of strings with the text properties
    const str_array: string[] = transcript.map(({ text }) => text)


    // Join all the string elements of the array into a single string
    const str: string = str_array.join(' ')


    // Initialize Open AI
    const openai = new OpenAI({
        apiKey: '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'
    })

    // Send the prompt to Open AI using the model gpt-4-1106-preview
    let chatCompletion: any = await openai.chat.completions.create({
        messages: [
            { role: 'user', 
            content: `Can you summarize this text in 250 words: "${ str }"` 
        }],
        model: 'gpt-4-1106-preview',
    })

    // Get the summary from Open AI
    const summary = chatCompletion.choices.at(0).message.content

    // Return the summary
    return summary
})