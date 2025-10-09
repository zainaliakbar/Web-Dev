async function getdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data Received');
        }, 3000);
})
}

async function main(){ 
console.log('Load Modules');
console.log('Load Data');
console.log('Process Data');

let data = getdata(); 

console.log(data)

}

main()
