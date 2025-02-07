//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
    const inputVal = Number(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");
    
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputVal}`;
            resolve(inputVal);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = num * 2;
                outputDiv.textContent = `Result: ${multiplied}`;
                resolve(multiplied);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const subtracted = num - 3;
                outputDiv.textContent = `Result: ${subtracted}`;
                resolve(subtracted);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const divided = num / 2;
                outputDiv.textContent = `Result: ${divided}`;
                resolve(divided);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = num + 10;
                outputDiv.textContent = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    });
});
