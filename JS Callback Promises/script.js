console.log("Zain plays")
console.log("Harry plays")


// asyncronous function: runs at a later time
setTimeout(() => {
    console.log("I am inside setTimeout")
}, 2000);

console.log("End")

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload=callback("Zain");
    document.head.append(sc);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", callback);

// Promises
