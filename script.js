function tabuada() {
  var num = Number(document.getElementById('num').value);
  var tab = document.getElementById('seltab')
  if (num==0){
    window.alert('Digite um número!')
  } else{
    tab.innerHTML = ''
    var c = 1
    while (c <=10){
      var item = document.createElement('option')
      item.text = `${num} x  ${c} = ${num*c}`
      tab.appendChild(item)
      c++ 
    }
  }
} 