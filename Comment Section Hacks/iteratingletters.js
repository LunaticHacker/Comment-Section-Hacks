var string = "Baby, Im dancing in the dark with you between my arms Barefoot on the grass, listening to our favorite song When you said you looked a mess, I whispered underneath my breath But you heard it, darling, you look perfect tonight"

var newString ="";
for(var i =0;i<string.length;i++){
for(var j =0;j<=i;j++){
newString+=string[j]
}
newString+="\n"
}
console.log(newString)
