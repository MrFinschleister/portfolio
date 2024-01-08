let imageOne = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheese.jpeg' alt='cheese'>"
let imageTwo = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/goldCheese.gif' alt='cheese'>"
let imageThree = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cosmicCheese.jpeg' alt='cheese'>"
let imageFour = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/smellyCheese.jpeg' alt='cheese'>"
let imageFive = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeNormal.jpeg' alt='cheese'>"
let imageSix = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeFruit.jpeg' alt='cheese'>"
let imageSeven = "<img id='cheeseImage' class 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeChocolateMarble.jpeg' alt='cheese'>"
let autoClickerMax = "MAX"
let cheeseData = {
    regularCounter: 0,
    goldenCounter: 0,
    goldCheese: 'cheeseMedia/goldCheese.gif',
    imageSrc: 'cheeseMedia/cheese.jpeg',
    cheeseAddition: 1,
    cheeseUpgradeAmount: 0,
    cheeseUpgradeCost: 50,
    cheeseAlert: 0,
    extraUpgradeCost: 5,
    extraUpgradeMultiplier: 0,
    goldCheeseAddition: 1,
    goldCheeseChance: 1,
    specialUpgradeCost: 5,
    specialUpgradeAmount: 0,
    regularAutoClickerCostOne: 250,
    goldAutoClickerCostOne: 15,
    autoClickerActiveOne: 0,
    autoClickerRefresh: 50,
    critStrike: 0,
    loopAmount: 0,
    autoClickerRate: 0,
    tickIntervalOne: 101,
    tickCount: 0,
    cheesePerSecond: 0,
    cheesePerSecondAddition: 0,
    cpsStart: 0,
    cpsEnd: 0,
    cpsCheck: 0,
    cheeseImageAchievement: 0,
    achievementCheese: 0,
}
/*function loggit(message) {
    let msgContainer = document.createElement('div')
    msgContainer.innerHTML = message
    msgContainer.classList += 'left'
    document.getElementById('console').appendChild(msgContainer)
}*/
function dataSave() {
    localStorage.setItem('cheeseSave', JSON.stringify(cheeseData))
}
function dataSaveClipboard() {
    prompt("Copy to clipboard",JSON.stringify(cheeseData))
}
function dataLoad() {
    cheeseData = JSON.parse(localStorage.getItem('cheeseSave'))
    if (cheeseData.cheeseAlert === 1) {
        cheeseData.imageSrc = 'cheeseMedia/goldCheese.gif'
        cheeseData.goldCheese = 'cheeseMedia/cosmicCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageTwo
    } else if (cheeseData.cheeseAlert === 2) {
        cheeseData.imageSrc = 'cheeseMedia/cosmicCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/smellyCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageThree
    } else if (cheeseData.cheeseAlert === 3) {
        cheeseData.iageSrc = 'cheeseMedia/smellyCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeNormal.jpeg'
        document.getElementById("headerImage").innerHTML = imageFour
    } else if (cheeseData.cheeseAlert === 4){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeNormal.jpeg'
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        document.getElementById("headerImage").innerHTML = imageFive
    } else if (cheeseData.cheeseAlert === 5){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        document.getElementById("headerImage").innerHTML = imageSix
    }
    drawElementsFromCheeseData()
}
function dataLoadClipboard() {
    cheeseData = JSON.parse(prompt("Insert Save Data"))
    if (cheeseData.cheeseAlert === 1) {
        cheeseData.imageSrc = 'cheeseMedia/goldCheese.gif'
        cheeseData.goldCheese = 'cheeseMedia/cosmicCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageTwo
    } else if (cheeseData.cheeseAlert === 2) {
        cheeseData.imageSrc = 'cheeseMedia/cosmicCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/smellyCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageThree
    } else if (cheeseData.cheeseAlert === 3) {
        cheeseData.iageSrc = 'cheeseMedia/smellyCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeNormal.jpeg'
        document.getElementById("headerImage").innerHTML = imageFour
    } else if (cheeseData.cheeseAlert === 4){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeNormal.jpeg'
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        document.getElementById("headerImage").innerHTML = imageFive
    } else if (cheeseData.cheeseAlert === 5){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        document.getElementById("headerImage").innerHTML = imageSix
    }
    drawElementsFromCheeseData()
}
function testCheese() {
    cheeseData.regularCounter += 100000000000000000
    cheeseData.goldenCounter += 5000000000
    setImages()
    drawElementsFromCheeseData()
}
function drawElementsFromCheeseData() {
    document.getElementById("stupid").innerHTML = cheeseData.regularCounter
    document.getElementById("golden").innerHTML = cheeseData.goldenCounter
    document.getElementById("cheesePerClick").innerHTML = cheeseData.cheeseAddition
    document.getElementById("goldCheesePerClick").innerHTML = cheeseData.goldCheeseAddition
    document.getElementById("autoClickerRate").innerHTML = cheeseData.autoClickerRate
    document.getElementById("regularAutoClickerDisplay").innerHTML = Math.round(cheeseData.regularAutoClickerCostOne)
    document.getElementById("goldAutoClickerDisplay").innerHTML = Math.round(cheeseData.goldAutoClickerCostOne)
    document.getElementById("cheeseUpgradeDisplay").innerHTML = cheeseData.cheeseUpgradeAmount
    document.getElementById("upgradeCost").innerHTML = Math.round(cheeseData.cheeseUpgradeCost)
    document.getElementById("extraUpgradeCostDisplay").innerHTML = Math.round(cheeseData.extraUpgradeCost)
    document.getElementById("extraUpgradeAmountDisplay").innerHTML = cheeseData.extraUpgradeMultiplier
    document.getElementById("specialUpgradeDisplay").innerHTML = cheeseData.specialUpgradeAmount
    document.getElementById("specialCostDisplay").innerHTML = Math.round(cheeseData.specialUpgradeCost)
    document.getElementById("chanceForSpecialCheese").innerHTML = cheeseData.goldCheeseChance
    document.getElementById("achievmentCheese").innerHTML = cheeseData.achievementCheese
}
function setImages() {
    if (cheeseData.regularCounter >= 1499 && cheeseData.cheeseAlert === 0) {
        cheeseData.imageSrc = 'cheeseMedia/goldCheese.gif'
        cheeseData.goldCheese = 'cheeseMedia/cosmicCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageTwo
        alert("You got a new cheese - Golden")
        cheeseData.cheeseAlert = 1
        cheeseData.cheeseAddition += 5
        cheeseData.goldCheeseAddition += 2
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 24999 && cheeseData.cheeseAlert === 1) {
        cheeseData.imageSrc = 'cheeseMedia/cosmicCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/smellyCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageThree
        alert("You got another new cheese - Cosmic")
        cheeseData.cheeseAlert = 2
        cheeseData.cheeseAddition += 20
        cheeseData.goldCheeseAddition += 10
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 99999 && cheeseData.cheeseAlert === 2) {
        cheeseData.imageSrc = 'cheeseMedia/smellyCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeNormal.jpeg'
        document.getElementById("headerImage").innerHTML = imageFour
        alert("You got another new cheese - Smelly")
        cheeseData.cheeseAlert = 3
        cheeseData.cheeseAddition += 100
        cheeseData.goldCheeseAddition += 50
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 499999 && cheeseData.cheeseAlert === 3) {
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeNormal.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeFruit.jpeg'
        document.getElementById("headerImage").innerHTML = imageFive
        alert("You got another new cheese - Cheese Cake")
        cheeseData.cheeseAlert = 4
        cheeseData.cheeseAddition += 500
        cheeseData.goldCheeseAddition += 250
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 2499999 && cheeseData.cheeseAlert === 4) {
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        document.getElementById("headerImage").innerHTML = imageSix
        alert("You got another new cheese - Cheese Cake Syrup")
        cheeseData.cheeseAlert = 5
        cheeseData.cheeseAddition += 1000
        cheeseData.goldCheeseAddition += 500
        cheeseData.achievementCheese += 1
    }
    drawElementsFromCheeseData()
}
function cheeseUpgrade() {
    if (cheeseData.regularCounter >= cheeseData.cheeseUpgradeCost) {
        cheeseData.cheeseAddition += 1
        cheeseData.goldCheeseAddition += 1
        cheeseData.regularCounter -= Math.round(cheeseData.cheeseUpgradeCost)
        cheeseData.cheeseUpgradeCost *= 1.2
        cheeseData.cheeseUpgradeAmount += 1
    }
    drawElementsFromCheeseData()
}
function chanceForExtra() {
    if (cheeseData.goldenCounter >= cheeseData.extraUpgradeCost) {
        cheeseData.goldenCounter -= Math.round(cheeseData.extraUpgradeCost)
        cheeseData.extraUpgradeMultiplier += 1
        cheeseData.extraUpgradeCost *= 1.5
    }
    drawElementsFromCheeseData()
}
function autoCheese() {
    if (cheeseData.goldenCounter >= cheeseData.goldAutoClickerCostOne && cheeseData.regularCounter >= cheeseData.regularAutoClickerCostOne && cheeseData.tickIntervalOne != 1) {
        cheeseData.regularCounter -= Math.round(cheeseData.regularAutoClickerCostOne)
        cheeseData.goldenCounter -= Math.round(cheeseData.goldAutoClickerCostOne)
        cheeseData.regularAutoClickerCostOne *= 1.2
        cheeseData.goldAutoClickerCostOne *= 1.2
        cheeseData.autoClickerActiveOne = 1
        cheeseData.autoClickerRate += 1
        cheeseData.tickIntervalOne -= 1
        cheeseData.cheesePerSecondAddition += 2
    }

    drawElementsFromCheeseData()
    autoInterval()
}
function specialChanceUpgrade() {
    if (cheeseData.goldenCounter >= cheeseData.specialUpgradeCost) {
        cheeseData.goldenCounter -= Math.round(cheeseData.specialUpgradeCost)
        cheeseData.goldCheeseChance += 1
        cheeseData.specialUpgradeCost *= 1.5
        cheeseData.specialUpgradeAmount += 1
    }
    drawElementsFromCheeseData()
}
function pictureAchievement() {
    if (cheeseData.cheeseImageAchievement === 0) {
        alert("good job lol")
        cheeseData.achievementCheese += 1
        cheeseData.cheeseImageAchievement += 1
        drawElementsFromCheeseData()
    }
}
function cheesyFunction() {
    const div = document.createElement('wrap')
    const cheese = document.createElement('img')
    let math = Math.floor(Math.random() * 100 - cheeseData.goldCheeseChance)
    let extraMath = Math.floor(Math.random() * 100 - cheeseData.extraUpgradeMultiplier)
    if (extraMath === 1 && cheeseData.extraUpgradeMultiplier >= 1) {
        cheeseData.cheeseAddition *= 100
        cheeseData.critStrike = 1
    }
    if (math <= 1) {
        cheeseData.goldenCounter += cheeseData.goldCheeseAddition
        cheeseData.regularCounter += cheeseData.cheeseAddition
        cheese.src = cheeseData.goldCheese
        if (cheeseData.critStrike === 1) {
            cheeseData.cheeseAddition /= 100
            cheeseData.critStrike -= 1
        }
    } else {
        cheeseData.regularCounter += cheeseData.cheeseAddition
        cheese.src = cheeseData.imageSrc
        if (cheeseData.critStrike === 1) {
            cheeseData.cheeseAddition /= 100
            cheeseData.critStrike -= 1
        }
    }
    if (cheeseData.autoClickerActiveOne === 1) {
        document.getElementById("cps").innerHTML = cheeseData.cheeseAddition * cheeseData.cheesePerSecondAddition
    }
    setImages()
    cheese.setAttribute('id','cheesePicture')
    cheese.setAttribute('onclick','pictureAchievement()')
    div.appendChild(cheese)
    document.getElementById("cheeseBox").appendChild(div)
    drawElementsFromCheeseData()
}
function dropDown(){
    document.getElementById("dropMenu").innerHTML = 
    "<div style='color:white; display:inline; width:1000em'><a href='notcheese.html'>| not cheese </a><a href='minecraftCheese.html'>| blocky cheese </a><a href='meltyCheese.html'><a href='../index.html'>| Home</a></div>"
    document.getElementById("dropButton").innerHTML = "<p onclick='dropUp()' style='font-weight:bolder;'> <</p>"
}
function dropUp(){
    document.getElementById("dropMenu").innerHTML = 'Links'
    document.getElementById("dropButton").innerHTML = "<p onclick='dropDown()' style='font-weight:bolder;'> ></p>"
}
function autoInterval() {
    setInterval(function() {
        cheeseData.tickCount += 10
        if (cheeseData.autoClickerActiveOne === 1 && cheeseData.tickCount % 500 === 0){
            cheesyFunction()
        }
        if (cheeseData.tickCount % 1000 === 0 && cheeseData.cpsCheck === 0) {
            cheeseData.cpsStart = cheeseData.regularCounter
            cheeseData.cpsCheck = 1
        }
    },10)
}
function imageBounce(){
    document.getElementById("cheeseImage").style.animation = "onClickBounce 0.25s 1"
    setTimeout(function(){
        document.getElementById("cheeseImage").style.animation = "onClickBounceBack 0.25s 1"
    },50)
}