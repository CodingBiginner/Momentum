// INIT Area
const clock = document.querySelector("#clock");
const handleInterval = function () {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, "0");
  const minute = String(today.getMinutes()).padStart(2, "0");
  const second = String(today.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
};
// INIT Area END

handleInterval();
setInterval(handleInterval, 1000);
