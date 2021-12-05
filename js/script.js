//login Handler
const login_btn= document.getElementById("login_btn")
const login_area= document.getElementById("login_area")
const transaction_area= document.getElementById("transaction_area")
login_btn.addEventListener("click",function(){
        login_area.style.display="none"
        transaction_area.style.display="block"
    })
const depositBtn= document.getElementById("deposit_btn")
let depositTotal= document.getElementById("deposit_total")
const withdrawBtn= document.getElementById("withdraw_btn")
let withdrawTotal= document.getElementById("withdraw_total") 
let balanceTotal= document.getElementById("balance_total")
let balanceSum=parseFloat(depositTotal.innerText)-parseFloat(withdrawTotal.innerText)
balanceTotal.innerText=balanceSum.toFixed(2)
//deposit Handler
depositBtn.addEventListener("click",function(){
    const depositAmount= document.getElementById("deposit_amount").value
    var depositSum=parseFloat(depositTotal.innerText)+ parseFloat(depositAmount)
    let balanceSum=parseFloat(balanceTotal.innerText)+parseFloat(depositAmount)
    if(!depositAmount.match(/^\d/)|| depositAmount<0){alert("Enter valid amount"); document.getElementById("deposit_amount").value=""; return}
    // depositTotal.innerText=depositSum.toFixed(2)
    // balanceTotal.innerText=balanceSum.toFixed(2)
    // document.getElementById("deposit_amount").value=""
    updateUI(depositTotal,depositSum,balanceTotal,balanceSum,"deposit_amount")
})
//withdraw Handler
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount= document.getElementById("withdraw_amount").value
    const depositAmount= document.getElementById("deposit_amount").value
    if(parseFloat(balanceTotal.innerText)<withdrawAmount){alert("Your Balance is low!");
    document.getElementById("withdraw_amount").value="";return}
    var withdrawSum=parseFloat(withdrawTotal.innerText)+ parseFloat(withdrawAmount)
    let balanceSum=parseFloat(balanceTotal.innerText)-parseFloat(withdrawAmount)
    if(!withdrawAmount.match(/^\d/)|| withdrawAmount<0){alert("Enter valid amount"); return}
    // withdrawTotal.innerText=withdrawSum.toFixed(2)
    // balanceTotal.innerText=balanceSum.toFixed(2)
    // document.getElementById("withdraw_amount").value=""
    updateUI(withdrawTotal,withdrawSum,balanceTotal,balanceSum,"withdraw_amount")
})
function updateUI(Doc1,value1,Doc2,value2,clear_id){
    Doc1.innerText=value1.toFixed(2)
    Doc2.innerText=value2.toFixed(2)
    document.getElementById(clear_id).value=""
}

 

    
 
