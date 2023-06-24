function reverseString(str){
    let arr;
    arr = str.split('');
    arr.reverse();
    let newStr = arr.join('');
     console.log(newStr)
    return(str);
}
reverseString('Hello world!')