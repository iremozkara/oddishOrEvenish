// İrem ÖZKARA

function oddishOrEvenish(number) {

    const numSum = String(number)
        .split('')
        .reduce(
            (previousValue, currentValue) => previousValue + Number(currentValue),
            0);
        return (numSum % 2 === 0 ? "Even" : "Odd");
}

//Provide the number here

 const myNum = 43;
 console.log(oddishOrEvenish(myNum));