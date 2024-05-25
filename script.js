let n = 10;
for(let i=0;i<n;i++){
    let str = "";
    for(let j=0;j<=i;j++){
        str += "* ";
    }
    console.log(str);
}
let m = n-1;
for(let i=m;i>=1;i--){
    let str = "";
    for(let j=i;j>0;j--){
        str += "* ";
    }
    console.log(str);
}

/**
        *
      * *
    * * *
  * * * *
* * * * *
 */
console.log("-----------------------------------------");
for(let i=n-1;i>=0;i--){
    let str = "";
    // for(let j=0;j<i;j++){
    //     str += "  ";
    //     process.stdout.write("  ");
    // }
    // for(let j=i;j<n;j++){
    //     str += "* ";
    //     process.stdout.write("* ");
    // }
    for(let j=0;j<n;j++){
        if(j>=i) str += "* ";
        else str += "  ";
    }
    console.log(str);
    // process.stdout.write("\n");
}