// İrem ÖZKARA

function oddishOrEvenish(number) {

    const numSum = String(number)
        .split('')
        .reduce(
            (previousValue, currentValue) => previousValue + Number(currentValue),
            0);
            console.log(numSum);
        return (numSum % 2 === 0 ? "Even" : "Odd");
}

//Provide the number here

 const myNum = 124578965;
 console.log(oddishOrEvenish(myNum));