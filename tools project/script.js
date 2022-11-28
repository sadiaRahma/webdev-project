let buttoncount=0 
totalprice=0
netPrice =0


const Addtocard=(payel)=>{
    buttoncount++ ;
    document.getElementById('total-products').innerText=buttoncount;
    totalprice+=Arafat;
    document.getElementById('price').innerText=totalprice;
    deliveryCharge(totalprice);
    netPrice = totalprice;

}
const deliveryCharge =(price)=>{
    DC=0;
    if(price<500){
        DC=0
    }
    else if(price>=500 && price<800){
       DC=100
    }
    else if(price>800 && price<=1000){
        DC=150
    } else{
       DC=200
    }
    document.getElementById('delivery-charge').innerText=DC;
    document.getElementById('shipping-total').innerText=DC;
    // console.log(totalprice)
    netPrice += DC + DC+totalprice;
    document.getElementById('ttt').innerText=netPrice;
    // console.log(netPrice)
    Tax()
}
function Tax(){
      const tax = netPrice* 0.15;
      document.getElementById('tax').innerText = tax.toFixed(2);
    //   console.log(tax);
      netPrice += tax;
    //   console.log(netPrice);
      document.getElementById('total').innerText=netPrice.toFixed(2);
}


const orderProducts=()=>{
    
    alert('Thank You for purchasing our burger\n Your total price: '+ document.getElementById('total').innerText);
}