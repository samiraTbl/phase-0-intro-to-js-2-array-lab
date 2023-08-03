// Write your solution he
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name)
{cats.push(name);}

destructivelyAppendCat('Ralph')

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyPrependCat(name)
{cats.unshift(name);}
destructivelyPrependCat("Bob");
console.log(cats)

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat()
{cats.pop();}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat()
    {cats.shift()}

    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function appendCat(name)
{ let ncats=[...cats,name]
return ncats;}
appendCat("Broom")

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function prependCat(name)
{ let ncats=[name,...cats]
return ncats;}
prependCat("Arnold")

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeLastCat ()
{let ncats=cats.slice(0,2)
    return ncats;}
   console.log( removeLastCat())

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeFirstCat ()
{let ncats=cats.slice(1)
    return ncats;}
   console.log( removeFirstCat())

   cats.length = 0;
cats.push("Milo", "Otis", "Garfield");