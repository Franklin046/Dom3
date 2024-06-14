// script.js

document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");

  function updateCountdown(value, callback) {
    countdownElement.innerHTML = "<h1 class='fadeOut'>" + value + "</h1>";
    setTimeout(function () {
      countdownElement.innerHTML = "<h1>" + value + "</h1>";
      setTimeout(callback, 900);
    }, 100);
  }

  setTimeout(function () {
    updateCountdown(10, function () {
      setTimeout(function () {
        updateCountdown(9, function () {
          setTimeout(function () {
            updateCountdown(8, function () {
              setTimeout(function () {
                updateCountdown(7, function () {
                  setTimeout(function () {
                    updateCountdown(6, function () {
                      setTimeout(function () {
                        updateCountdown(5, function () {
                          setTimeout(function () {
                            updateCountdown(4, function () {
                              setTimeout(function () {
                                updateCountdown(3, function () {
                                  setTimeout(function () {
                                    updateCountdown(2, function () {
                                      setTimeout(function () {
                                        updateCountdown(1, function () {
                                          setTimeout(function () {
                                            countdownElement.innerHTML =
                                              "<h1 style='color: #00698f; animation: fadeIn 2s forwards;'>Happy Independence Day</h1>";
                                          }, 1000);
                                        });
                                      }, 1000);
                                    });
                                  }, 1000);
                                });
                              }, 1000);
                            });
                          }, 1000);
                        });
                      }, 1000);
                    });
                  }, 1000);
                });
              }, 1000);
            });
          }, 1000);
        });
      }, 1000);
    });
  }, 1000);
});
