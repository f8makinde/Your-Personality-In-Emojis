const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
const pushBtn = document.getElementById("push-btn")
function renderEmoji(){
for(let i = 0; i < myEmojis.length; i++){
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
    renderEmoji();
}
}
pushBtn.addEventListener("click", function(){
    const inputEl = document.getElementById("emoji-input");

    if(inputEl.value){
        myEmojis.push(inputEl.value);
        inputEl.value = ""
    }
  
})
