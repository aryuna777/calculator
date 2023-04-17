
const OPERATIONS = {
sum:'+',
subtract:'-',
multiplate:'*',
division:'/',
};

function calulator ({a,b, operation}) {
let result = null;
switch (operation) {
case OPERATIONS.sum:
result = sum (a,b);
break;

case OPERATIONS.subtract:
result = subtract (a,b);
break;

case OPERATIONS.multiplate:
result = multiplate (a,b);
break;

case OPERATIONS.division:
result = division (a,b);
break;

}
return result;
}