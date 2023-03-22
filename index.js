require("dotenv").config();
const readline = require("readline")
const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY,
}))

const startTime = Date.now();

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "What is a goat"}]
})
.then((res) => {
    console.log("res.data.choices", res.data.choices[0].message.content);
    console.log("res.data.usage", res.data.usage);
    console.log(`It took --- ${(Date.now() - startTime)} ms ---. It ended because: ${res.data.choices[0].finish_reason}`);
    })
