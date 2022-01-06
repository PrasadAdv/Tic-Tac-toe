var element = document.querySelectorAll('td')

var restart = document.querySelector('.btn')

var count = 0;

var tur = document.querySelector('#turn');


function clearboard(){
  for (var i = 0; i < element.length; i++) {
      element[i].textContent = '';
  }
  count=0;
  tur.textContent = 'X\'s Turn';
  tur.style.color = 'red';
}


function check(){
  var e=[];

  for(var i=0; i<9; i++){
    e[i]=element[i].textContent;
  }

  var cond1 = (e[0] == 'X' && e[1] == 'X' && e[2] == 'X')
  var cond2 = (e[3] == 'X' && e[4] == 'X' && e[5] == 'X')
  var cond3 = (e[6] == 'X' && e[7] == 'X' && e[8] == 'X')
  var cond4 = (e[0] == 'X' && e[3] == 'X' && e[6] == 'X')
  var cond5 = (e[1] == 'X' && e[4] == 'X' && e[7] == 'X')
  var cond6 = (e[2] == 'X' && e[5] == 'X' && e[8] == 'X')
  var cond7 = (e[0] == 'X' && e[4] == 'X' && e[8] == 'X')
  var cond8 = (e[2] == 'X' && e[4] == 'X' && e[6] == 'X')

  if (cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8) {
    alert("X has won!");
    clearboard();
  }

  cond1 = (e[0] == 'O' && e[1] == 'O' && e[2] == 'O')
  cond2 = (e[3] == 'O' && e[4] == 'O' && e[5] == 'O')
  cond3 = (e[6] == 'O' && e[7] == 'O' && e[8] == 'O')
  cond4 = (e[0] == 'O' && e[3] == 'O' && e[6] == 'O')
  cond5 = (e[1] == 'O' && e[4] == 'O' && e[7] == 'O')
  cond6 = (e[2] == 'O' && e[5] == 'O' && e[8] == 'O')
  cond7 = (e[0] == 'O' && e[4] == 'O' && e[8] == 'O')
  cond8 = (e[2] == 'O' && e[4] == 'O' && e[6] == 'O')

  if (cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8) {
    alert("O has won!");
    clearboard();
  }
}


function change(){
  if (count%2==0) {
    if(this.textContent === ''){
          this.textContent = 'X';
          this.style.color = 'red';
          tur.textContent = 'O\'s Turn';
          tur.style.color = 'yellow';
        }
  }
  else {
    if(this.textContent === ''){
      this.textContent = 'O';
      this.style.color = 'yellow';
      tur.textContent = 'X\'s Turn';
      tur.style.color = 'red';
    }
  }
  count++;
  check();
}

restart.addEventListener('click', clearboard)


for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', change);
}
