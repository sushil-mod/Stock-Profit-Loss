
var purchasePrice = document.querySelector("#purchase-price");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-button");
var quantityStock = document.querySelector("#quantity-of-stock");
var result = document.querySelector("#output");

checkBtn.addEventListener('click',clickHandlerStock);

function clickHandlerStock(){

    profitAndLoss(Number(purchasePrice.value),Number(quantityStock.value),Number(currentPrice.value));
}

 
function profitAndLoss(purchase,quantity,current){

    if(purchase>current){
        var loss = (purchase-current)*quantity;
        var lossPercentage = (loss/purchase)*100;

        result.innerText = 'you are in loss of ' +loss+' and loss percentage  is '+lossPercentage ;
    }else if(current>purchase){
        var profit = (current-purchase)*quantity;
        var profitPercentage = (profit/purchase)*100;
        result.innerText = 'you are in loss of ' +profit +' and loss percentage  is '+profitPercentage ;
    }else{
        result.innerText = 'Still No gains' ;
    }
}
