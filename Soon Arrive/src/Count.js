const countDown = () => {
  const endDate = new Date("May 30 , 2021 00:00:00");
  const now = new Date().getTime();
  const diffrence = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const timeDays = Math.floor(diffrence / days);
  const timeHours = Math.floor((diffrence % days) / hours);
  const timeMinutes = Math.floor((diffrence % hours) / minutes);
  const timeSeconds = Math.floor((diffrence % minutes) / seconds);

  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};
