// Selecting elements
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Function to send a message
function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText === "") return; // Prevent empty messages

  // Create a message element for sent message
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');
  messageElement.textContent = messageText;
  chatWindow.appendChild(messageElement);

  // Scroll to the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Clear the message input field
  messageInput.value = '';

  // Simulate receiving a reply
  setTimeout(receiveMessage, 1000);
}

// Function to receive a simulated reply
function receiveMessage() {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'received');
  messageElement.textContent = "This is a reply message.";
  chatWindow.appendChild(messageElement);

  // Scroll to the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
