function solve() {
    const sendButton = document.getElementById("send");
    const msgToSend = document.getElementById("chat_input");

    sendButton.addEventListener("click", sendMsg);

    function sendMsg() {

        let msg = msgToSend.value;
        let newMsg = document.createElement("div");
        newMsg.classList.add("message", "my-message");
        newMsg.textContent = msg;

        document.getElementById("chat_messages").appendChild(newMsg);

        msgToSend.value = "";

    }
}


