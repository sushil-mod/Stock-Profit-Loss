
var purchasePrice = document.querySelector("#purchase-price");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-button");
var quantityStock = document.querySelector("#quantity-of-stock");
var result = document.querySelector("#output");

var imageMain = document.querySelector(".main-img");
var imageProfit = document.querySelector(".profit-img");
var imageLoss = document.querySelector(".loss-img");

checkBtn.addEventListener('click',clickHandlerStock);

function clickHandlerStock(){

   if (Number(purchasePrice.value)>0 || Number(currentPrice.value)>0 || Number(quantityStock.value>0) )
   {  
       
    profitAndLoss(Number(purchasePrice.value),Number(quantityStock.value),Number(currentPrice.value));
}else{
    result.innerText = "Enter Valid Amount";
}

   
}

  

 
function profitAndLoss(purchase,quantity,current){

    if(purchase>current){
        var loss = ((purchase-current)*quantity).toFixed(2);
        var lossPercentage = ((loss/purchase)*100).toFixed(2);
        imageMain.style.display = "none"; 
        result.innerText = 'you are in loss of ' +loss+' and loss percentage  is '+lossPercentage;
        imageLoss.style.display = "block";

    }else if(current>purchase){
        var profit = ((current-purchase)*quantity).toFixed(2);
        var profitPercentage = ((profit/purchase)*100).toFixed(2);
        imageMain.style.display = "none"; 
        result.innerText = 'you are in Profit of ' +profit +' and Profit percentage  is '+profitPercentage ;
        imageProfit.style.display = "block";
    }else{
        result.innerText = 'Still No gains' ;
    }
}
