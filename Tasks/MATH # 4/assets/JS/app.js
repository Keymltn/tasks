let arrayEl = [];

counterEl(5)

function counterEl(Number){
    for(let i = 1; i <= Number; i++) {
        arrayEl.push(i)
    }
}

let res = 0;
for (let n of arrayEl)

res += n;

console.log(res);