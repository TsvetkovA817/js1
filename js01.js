//03

var a=10;
var b=2.312;
var c=2.3e+2;  //230
var str1 = 'somestring';
var str2 = "somestring";

d=5; //global

//04 type

var i=5;          alert(typeof(i));  //number
i= new Array();   alert(typeof(i));  //object
i= 3.14;          alert(typeof(i));  //number
i= 'hello';       alert(typeof(i));  //string
i= window.open(); alert(typeof(i));  //object 

//04.1
document.write("It\'s good to say \"Hello\" to someone!");  // It's good to say "Hello" to someone!

//15
result = x = 5 + 7;  //12


//07
a = new Array();  
l= a.length       //0

a = new Array(9); 
l= a.length       //9

a = new Array(9, 'somestring');
l= a.length       //2
a[0]              //9
a[1]              //somestring 

d = [5, 'str1', 2.71828, 'str2'];
l= d.length       //4

u="file:///C:/p1/p2/index.html"
d=u.split(":/")    //(3) ['file', '//C', 'p1/p2/index.html']
d[0]='https://'
d[1]='some.site/'
u=d.join()         // https://,some.site/,p1/p2/index.html
u=d.join("")       // https://some.site/p1/p2/index.html

a = new Array('s1','s2','s3');
a.reverse()        //(3) ['s3', 's2', 's1']
a.sort()           //(3) ['s1', 's2', 's3']

a = new Array(11,21,22,12);
a.reverse()        //(3) ['s3', 's2', 's1']
a.sort()           //(3) ['s1', 's2', 's3']

b = new Array(10,6,300,25,18);
b.sort()                //(5) [10, 18, 25, 300, 6] sort as a string
document.write(b[3]+5)  // 305


//05
if ( a == u1 && b>=c && c!=d || d=="yes")  { document.write("s1"); k = k + 1; }
else if ()  { document.write("s2"); k = k + 2; }
else { document.write("s3"); k = k + 3; }

msg1 = (k>5)? 'ok!' : 'wait...';


//06
var n;
for (  n=0; n<=10; n=n+2 )  {
    alert(n);   //0,2,4,6,8,10
}

var i = 1;

while (i <= 5) {
    document.write(i + "<br>");
    i = i + 1;
}

for (var j = 1; j <= 5; j++) {
    document.write(j + "<br>");
}

document.write(' < 5000:');
for (n=1; n<=100; n++) {  
 s=Math.pow(n,3);
 if(s>5000) break;
 document.write('<BR>'+n+'<sup>3</sup> = '+s);
}

document.write(' > 10 000:');
for (n=1; n<=100; n++) {  
 s=Math.pow(n,3);
 if(s <= 10000) continue;
 document.write('<BR>'+n+'<sup>3</sup> = '+s);
}

//08
function sign(n)
{ 
 if (n>0) return 1;
 if (n<0) return -1;
 return 0;
}



