const rwClient = require("./client");

const tweet = async () => {
    try {
        await rwClient.v1.tweet("Test");
    } catch (error) {
        console.log(error)
    }
}

tweet()