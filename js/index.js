var logEl1 = document.querySelector(".no1");
var logEl2 = document.querySelector(".no2");
var logEl3 = document.querySelector(".no3");
var logEl4 = document.querySelector(".no4");

var battery1 = {
  charged: 0
};

anime({
  targets: battery1,
  charged: 2536,
  cycles: 130,
  round: 1,
  easing: "linear",
  update: function() {
    logEl1.innerHTML = JSON.stringify(battery1.charged);
  }
});

var battery2 = {
  charged: 0
};

anime({
  targets: battery2,
  charged: 6784,
  cycles: 130,
  round: 1,
  easing: "linear",
  update: function() {
    logEl2.innerHTML = JSON.stringify(battery2.charged);
  }
});

var battery3 = {
  charged: 0
};

anime({
  targets: battery3,
  charged: 2239,
  cycles: 130,
  round: 1,
  easing: "linear",
  update: function() {
    logEl3.innerHTML = JSON.stringify(battery3.charged);
  }
});

var battery4 = {
  charged: 0
};

anime({
  targets: battery4,
  charged: 434,
  cycles: 130,
  round: 1,
  easing: "linear",
  update: function() {
    logEl4.innerHTML = JSON.stringify(battery4.charged);
  }
});
