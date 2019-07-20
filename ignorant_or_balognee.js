const is = require('is-thirteen');
var arr = ['balognee', 12, 13, "text", "13", "nonsense"]

function checkList(list) {
    list.forEach(item =>{
        let boolen = is(item).thirteen()
        if(boolen){
            console.log("youre ignorant");
        }
        else {
            console.log("your're balognee")
        }
    })
}

checkList(arr);