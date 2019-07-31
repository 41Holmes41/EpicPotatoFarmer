/* --------------------variables ------------------------*/
let win=0;
let potato = {
    level: 1,
    number: 0,
    increase: 10,
    upgradeReq: 10,
    storage : 50,
    storageIncrease : 10,
    storageIncreasePrice : 1
};
let tots = {
    number : 0,
    potatoPrice : 50,
    sellPrice : 1,
    storage : 5,
    storageIncrease : 1,
    storageIncreasePrice : 5
};
let gold = {
    number : 200
};
let battery = {
    number : 0,
    goldPrice : 20,
    storage : 5,
    storageIncrease : 1,
    storageIncreasePrice : 10,
    present : 0
};
let electricity = {
    number : 0
};

/* ------------------ defining DOM interaction Variables ------------------ */

$('.upgrade-potato').click(function(){
    potato.number = potato.number - potato.upgradeReq;
    potato.increase += 1;
    potatoLeveler();
    render();
});

$('.upgrade-potato-storage').click(function(){
    potato.storage += potato.storageIncrease;
    gold.number -= potato.storageIncreasePrice;
    potato.storageIncreasePrice += 1;
    render();
});

$('.grow-potato').click(function(){ 
    if (potato.number + potato.increase > potato.storage) potato.number=potato.storage;
    else potato.number = potato.number + potato.increase;
    render();
});



$('.make-tots').click(function(){
    potato.number -= tots.potatoPrice;
    tots.potatoPrices += 2;
    tots.number += 1;
    render();
})

$('.sell-tots').click(function(){
    gold.number = gold.number + tots.number * tots.sellPrice;
    tots.number = 0;
    tots.potatoPrice +=1;
    render();
});

$('.upgrade-tots-storage').click(function(){
    gold.number -= tots.storageIncreasePrice;
    tots.storage += tots.storageIncrease;
    tots.storageIncreasePrice += 1;
    render();
});



$('.make-battery').click(function(){
    gold.number = gold.number - battery.goldPrice;
    battery.number = battery.number + 1 ;
    electricity.number += 1;
    battery.present=1;
    render();
})



/* ---------------------- functions --------------------------*/

function potatoLeveler() {
    potato.increase = Math.floor(potato.level * 1.2);
    potato.upgradeReq =  10 + potato.level * 15;
    potato.level +=1;
}

function render(){

    if ((potato.number >= potato.storage)) $('.grow-potato').fadeOut();
    else $('.grow-potato').fadeIn();

    if (potato.number> potato.upgradeReq) $('.upgrade-potato').fadeIn();
    else $('.upgrade-potato').fadeOut();

    $('.total-potato').html(`${potato.number} / ${potato.storage} potatoes`);

    if (gold.number>=potato.storageIncreasePrice)     $('.upgrade-potato-storage').fadeIn();
    else $('.upgrade-potato-storage').fadeOut();



    if (tots.number > 0) $('.sell-tots').fadeIn();
    else $('.sell-tots').fadeOut();

    if ((potato.number >= tots.potatoPrice) && (tots.storage >= tots.number)) $('.make-tots').fadeIn();
    else $('.make-tots').fadeOut();

    if(gold.number >= tots.storageIncreasePrice) $('.upgrade-tots-storage').fadeIn();
    else $('.upgrade-tots-storage').fadeOut();

    $('.tot-count').html(`${tots.number} / ${tots.storage} Tots`);



    if (battery.number > 0) $('.battery-count').fadeIn();
    else $('.battery-count').fadeOut();

    $('.battery-count').html(`${battery.number} / ${battery.storage} Potato Batteries`);

    if ((gold.number >= battery.goldPrice)  && (battery.storage > battery.number)) $('.make-battery').fadeIn();
    else $('.make-battery').fadeOut(); 

    if((gold.number >= battery.storageIncreasePrice) && (battery.present === 1)) $('.upgrade-battery-storage').fadeIn();
    else $('.upgrade-battery-storage').fadeOut();



    $('.gold-coins').html(`${gold.number} Gold Coins`);

    console.log(battery.number);
}




/* declare and initialize functions */






