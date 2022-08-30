const myEmojis = ["🤑", "🥰", "😁"];
const emojiContainer = document.getElementById("emojiContainer");
const inputEl = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn");
function renderEmoji(){
    emojiContainer.innerHTML = "";
for(let i = 0; i < myEmojis.length; i++){
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
}
}
renderEmoji();

pushBtn.addEventListener("click", function(){
    if(inputEl.value){
        myEmojis.push(inputEl.value);
        inputEl.value = "";
        renderEmoji();
    }
  
})


unshiftBtn.addEventListener("click", function(){
    if(inputEl.value){
        myEmojis.unshift(inputEl.value);
        inputEl.value = "";
        renderEmoji();
    }
})
popBtn.addEventListener("click", function(){
   myEmojis.pop();
   renderEmoji();
})
shiftBtn.addEventListener("click", function(){
    myEmojis.shift();
    renderEmoji();
})