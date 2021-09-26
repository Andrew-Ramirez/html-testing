function getRandomNumber() {
  let numb = new Promise((resolve) => {
    // that *100 is just to get bigger numbers. the floor is that the numbers are integers. not necessary~
    setTimeout(() => resolve(Math.floor(Math.random() * 100)), 500);
  });
  return numb;
}

async function idk() {
  let temp = await getRandomNumber();
  console.log(temp);
}

idk();


async function cityLanLon(city) {
  let url = "https://geocode.xyz/" + city + '?json=1';
  console.log(url);
  let pos = await fetch(url);
  console.log(pos);
  if ((pos.status == 200)) {
    //I spent like 3 hours trying to figure out what I was meant to do. I just needed to add the next line ;-;
    let data = await pos.json();
    let lat = data.latt;
    let long = data.longt;
    console.log(data);
    console.log(long);
    console.log(lat);
  }
}

cityLanLon("seattle");

