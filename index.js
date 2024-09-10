function generateFi(){
    let n = parseInt(prompt("Enter a num: "))

if (isNaN(n) || n<=0){
    console.log('Enter Valid num')
    return
}

let fi = [0,1]
for (let i =2; i< n; i++){
    fi.push(fi[i-1] + fi[i-2])
}
console.log(fi.slice(0,n).join(" ,"))

}
generateFi();