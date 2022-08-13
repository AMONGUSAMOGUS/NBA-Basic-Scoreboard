let homeT =0
let visitorT =0

let hT = document.getElementById("scoreh")
let vT = document.getElementById("scorev") 

let lH = document.getElementById("leadh")
let lV = document.getElementById("leadv")
function add1h() {
  homeT +=1
  hT.textContent=homeT
  console.log(homeT) 
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
}
} 
function add2h() {
    homeT +=2
  hT.textContent=homeT
  console.log(homeT) 
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
} 
} 
function add3h() {
    homeT +=3
  hT.textContent=homeT
  console.log(homeT) 
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
}
} 
function add1v() {
  visitorT +=1
  vT.textContent=visitorT
  console.log(visitorT)  
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
}
} 
function add2v() {
    visitorT +=2
  vT.textContent=visitorT
  console.log(visitorT)  
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
}
} 
function add3v() {
    visitorT +=3
  vT.textContent=visitorT
  console.log(visitorT) 
  if (homeT>visitorT) {
    let leadh= "Home Leads!!"
    lH.textContent=leadh
    let leadv= "-"
    lV.textContent=leadv  
}
else if (visitorT>homeT) {
    let leadv= "Visitors Leads!!"
    lV.textContent=leadv 
    let leadh= "-"
    lH.textContent=leadh  
}
else {
    let leadh="Draw"
    let leadv="Draw"
    lH.textContent=leadh 
    lV.textContent=leadv 
}
} 
function reset() {
    homeT= 0
    visitorT=0
    hT.textContent=homeT
    vT.textContent=visitorT
}

const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we set the variables
  let second = 0,
    minute = 20;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
    timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    // We check if the second equals 0
    if (second == 0) {
      // If so, we remove a minute and reset our seconds to 60
      if (minute === 0) {
        // Full done
        clearInterval(timerInterval);
        alert('Time is up!');
      }
      minute--;
      second = 60;
    }
    second--;
  }, 1000);
};