
let num1;
let num2;
let  operator;

function calculator(num1, num2, operator)
{
  let result;
  switch (operator)
  {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
  }
  console.log(result);
  return result;
}

calculator(3, 4, '*'); // returns 12
