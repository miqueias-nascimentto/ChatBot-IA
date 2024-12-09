function sendMessage() {
    let userInput = document.getElementById("user_input").value;
    document.getElementById("user_input").value = "";
  
    displayMessage(userInput, "user");
  
    // Aqui você integraria com a API do seu modelo de IA
    // (ex: OpenAI, ou seu próprio modelo)
    // Substitua o exemplo abaixo pela sua lógica de chamada à API
    let aiResponse = "Resposta da IA para: " + userInput; 
  
    displayMessage(aiResponse, "ai");
  }
  
  function displayMessage(message, sender) {
    let chatbox = document.getElementById("chatbox");
    let newMessage = document.createElement("div");
    newMessage.classList.add("message", sender);
    newMessage.innerHTML = message;
    chatbox.appendChild(newMessage);
  }