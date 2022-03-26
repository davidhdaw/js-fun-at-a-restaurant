var deliveryOrders = [];
function takeOrder(order, array) {
 if (array.length < 3) {
   array.push(order);
 } else {}
};

function refundOrder(orderNumber, array) {
  for (i = 0; i < array.length; i++) {
    if (orderNumber === array[i].orderNumber) {
      array.splice(i, 1);
    } else {}
  }
};

function listItems(array) {
var string = array[0].item;
for (i = 1; i < array.length; i++) {
  string = string + ", " + array[i].item;
  }
  return string;
};




function searchOrder(array, item) {
  for (i = 0; i < array.length; i++) {
    if (item === array[i].item) {
      return true;
    } else {}
  }
  return false
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
