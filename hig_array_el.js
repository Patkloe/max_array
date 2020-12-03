
// to get the highest value between element of an array, then update dynamically the array.
function max(tab){
 var maxi = 0;
 var index = 0;
 for(var i = 0; i < tab.length; i++){
    if(tab[i] > maxi ){
        maxi = tab[i];
        index = i;
    }
 }
 let temp = 0;
 temp = tab[0];
 tab[0]= maxi;
 tab[index] = temp;
 tab.shift(tab[index]);
 console.log(tab);
 alert(index);
 return maxi;
}

var tab = [9, 8, 15, 6];
var val1 = max(tab);
console.log(val1);
var val2 = max(tab);
console.log("val1 : " + " " + val1 + " " + "val2 : " + " " + val2);
