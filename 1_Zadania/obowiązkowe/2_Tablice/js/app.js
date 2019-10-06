function distFromAvarage(array) {
    for (let i = 0; i < array.length; i++) {
        averageSum += array[i];
    }

    var averageValue = averageSum / array.length;
    const outputArray = [];

    for (let i = 0; i < array.length; i++) {

        outputArray.push(array[i]) - averageValue);
    };

    console.log(outputArray);
    return outputArray;
};

distFromAvarage([1, 2, 3, 4, 5, 6, 7]);