function isEven(x)
{
  if (x==0) return true;
  else if (x==1) return false;
  else if (x<0) return isEven(-x);
  else return isEven(x-2);
}

console.log(isEven(22));

console.log(isEven(87));

console.log(isEven(-6));
