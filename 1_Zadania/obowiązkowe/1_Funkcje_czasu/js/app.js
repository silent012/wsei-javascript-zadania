function countHello(number) {

    var counter = 1;
    var interval = setInterval(() => {
        console.log("Hello ", counter++)

        if (counter > number) {
            clearInterval(interval)
        }
         }, 500)



}
countHello(5);