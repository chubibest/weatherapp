console.log("starting app")

setTimeout(()=> {console.log("middle")},2000)
setTimeout(()=> {console.log("next")},0)

console.log("finishing app")