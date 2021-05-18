var a = 5,b = 12,c = 4,min,max;
if (a<b && a<c)
min = a;
else if (b<a || b<c)
min = b;
else min=c;
alert(min);
if (a>b && a>c)
max=a;
else if (b>a || b>c)
max=b;
else max=c;
alert(max);
