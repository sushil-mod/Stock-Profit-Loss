
var purchasePrice = document.querySelector("#purchase-price");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-button");
var quantityStock = document.querySelector("#quantity-of-stock");
var result = document.querySelector("#output");


function profitAndLoss(purchase,quantity,current){

    if(purchase>current){
        var loss = (purchase-current)*quantity;
        var lossPercentage = (loss/purchase)*100;
        console.log("loss");
    }else if(current>purchase){
        var profit = (current-purchase)*quantity;
        var profitPercentage = (profit/purchase)*100;
        console.log("profit");
    }else{
        console.log("same");
    }
}
profitAndLoss(100,10,10);