// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"


function numbers(num){
    if(num > 0){
        console.log("dadebitia")
    } else if(num<0){
        console.log("uaryofitia")
    }
}

numbers(10)

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე


function sumOfNumbers(){
    let sum = 0;
    for(let i=1; i<100; i++){
        sum+=i
    }
    return sum;
}
console.log(sumOfNumbers())


// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი


function oddOrEven(num){
    if(num % 2 == 0){
        console.log("Even")
    } else{
        console.log("Odd")
    }
}
oddOrEven(15)


// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი


let car = {
    year : 2014,
    model : 'toyota'
}

function findYear(year){

}


// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი


let array = [5, 10, 55, 9, 34, 70]

function findMax(array){
    let max = 0
    for(let i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    return max;
}
console.log(findMax(array))


// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

let newArr = [1, 37, 16, 15, 20, 43]

function findMin(newArr){
    let min = 0
    for(let i=0; i<newArr.length; i++){
        if(min>newArr[i]){
            min = newArr[i]
        }
    }
    return min;
}
console.log(findMin(newArr))

// ეს არ მუშაობს და ვერ გავიგე 


// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"


function reversedString(){
    let str ="random"
    let reversed=str.split("").reverse("").join("")
    return reversed
}

console.log(reversedString())



