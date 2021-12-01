let countDown = document.querySelector(".count");
let value = document.querySelector(".independence");
setTimeout(() => {
  countDown.innerText = "10";
  setTimeout(() => {
    countDown.innerText = "9";
    setTimeout(() => {
      countDown.innerText = "8";
      setTimeout(() => {
        countDown.innerText = "7";
        setTimeout(() => {
          countDown.innerText = "6";
          setTimeout(() => {
            countDown.innerText = "5";
            setTimeout(() => {
              countDown.innerText = "4";
              setTimeout(() => {
                countDown.innerText = "3";
                setTimeout(() => {
                  countDown.innerText = "2";
                  setTimeout(() => {
                    countDown.innerText = "1";
                    setTimeout(() => {
                      countDown.innerText = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);