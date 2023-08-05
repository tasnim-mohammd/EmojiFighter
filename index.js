let fighters = ["💩", "🐝","🐥", "🐢", "🐸", "🐩", "🤖", "🦭", "🦀" , "🕷",  "🦍", "🐘","🐊", "🦕","🐉","🐆", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let resultStatement = document.getElementById("result")
let resetButton = document.getElementById("reset")
fightButton.addEventListener("click", function() {

    let randomIndex1 = Math.floor( Math.random() * fighters.length )
    let randomIndex2 = Math.floor( Math.random() * fighters.length )
    result =fighters[randomIndex1] + " VS " + fighters[randomIndex2]
    stageEl.textContent = result 
    if(randomIndex1 > randomIndex2)
    {
        resultStatement.textContent = "This "+ fighters[randomIndex1] +" is the winner"
    }
    else
    {
        resultStatement.textContent = "This "+ fighters[randomIndex2] +" is the winner"
    }
})

resetButton.addEventListener("click", function() {
    resultStatement.textContent = " "
    stageEl.textContent = " "
})
