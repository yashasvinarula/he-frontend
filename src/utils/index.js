export const calculatePrices = items => {
  let totalPrice = 0;
  let discount = 0;
  let typeDiscount = 0;
  let finalPrice = 0;
  let itemCount = 0;
  for(let item of items){
    itemCount += item.quantity;
    totalPrice += item.price*item.quantity;
    if(item.type === "fiction"){
      typeDiscount += item.price*item.quantity*(item.discount+15)/100;
    }else{
      discount += item.price*item.quantity*item.discount/100;
    }
  }
  discount = Math.round(discount*100)/100;
  typeDiscount = Math.round(typeDiscount*100)/100;
  finalPrice = totalPrice - discount - typeDiscount;

  return {
    itemCount,
    totalPrice,
    discount,
    typeDiscount,
    finalPrice    
  }
}


