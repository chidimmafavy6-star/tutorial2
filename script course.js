var gpaButton = document.getElementById('calcGpa');
var moneyButton = document.getElementById('calcMoney');
var countButton = document.getElementById('setCountdown');
var resetButton = document.getElementById('resetCount');
var clearButton = document.getElementById('clearMoney');

gpaButton.addEventListener('click', function(){
  var g1 = parseFloat(document.getElementById('g1').value);
  var u1 = parseFloat(document.getElementById('u1').value);
  var g2 = parseFloat(document.getElementById('g2').value);
  var u2 = parseFloat(document.getElementById('u2').value);
  var totalPoints = (g1 * u1) + (g2 * u2);
  var totalUnits = u1 + u2;
  var gpa = totalPoints / totalUnits;
  var rounded = gpa.toFixed(2);
  document.getElementById('gpaResult').innerText = 'Result: ' + rounded + ' GPA';
});

countButton.addEventListener('click', function(){
  var dateValue = document.getElementById('examDate').value;
  if(dateValue === ''){
    alert('Pick exam date');
    return;
  }
  var examTime = new Date(dateValue).getTime();
  var now = new Date().getTime();
  var diff = examTime - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if(days < 0){
    document.getElementById('countResult').innerText = 'Exam don pass!';
  } else {
    document.getElementById('countResult').innerText = days + ' DAYS LEFT — LOCK IN';
  }
});

resetButton.addEventListener('click', function(){
  document.getElementById('examDate').value = '';
  document.getElementById('countResult').innerText = 'Select date';
});

moneyButton.addEventListener('click', function(){
  var allowance = parseFloat(document.getElementById('allowance').value);
  var spent = parseFloat(document.getElementById('spent').value);
  if(isNaN(allowance) === true || isNaN(spent) === true){
    alert('Enter allowance and spent');
    return;
  }
  var balance = allowance - spent;
  document.getElementById('moneyResult').innerText = 'Balance: ₦' + balance;
});

clearButton.addEventListener('click', function(){
  document.getElementById('allowance').value = '';
  document.getElementById('spent').value = '';
  document.getElementById('moneyResult').innerText = 'Balance: -';
});

var resButtons = document.querySelectorAll('.res-btn');
for(var i = 0; i < resButtons.length; i++){
  resButtons[i].addEventListener('click', function(){
    var fileName = this.getAttribute('data-file');
    alert(fileName + ' will download soon — joining hub gives instant access');
    document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
  });
}

document.getElementById('goTools').addEventListener('click', function(){
  document.getElementById('tools').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goResources').addEventListener('click', function(){
  document.getElementById('resources').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goMarket').addEventListener('click', function(){
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('startBtn').addEventListener('click', function(){
  document.getElementById('tools').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('demoBtn').addEventListener('click', function(){
  alert('Demo video coming soon — for now try the GPA calc');
});

document.getElementById('joinBtn').addEventListener('click', function(){
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('waBtn').addEventListener('click', function(){
  window.open('https://wa.me/2348012345678', '_blank');
});

document.getElementById('joinForm').addEventListener('submit', function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var dept = document.getElementById('dept').value;
  var level = document.getElementById('level').value;
  var phone = document.getElementById('phone').value;
  var need = document.getElementById('need').value;
  var msg = 'CAMPUS HUB JOIN:%0AName: ' + name + '%0ADept: ' + dept + '%0ALevel: ' + level + '%0APhone: ' + phone + '%0ANeed: ' + need;
  document.getElementById('formMsg').innerText = 'Welcome to the hub ' + name + '! Redirecting to WhatsApp...';
  setTimeout(function(){
    window.open('https://wa.me/2348012345678?text=' + msg, '_blank');
  }, 800);
});