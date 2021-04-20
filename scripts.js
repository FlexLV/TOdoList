// Izveido pogu aizvērt un pievieno to katrai saraksta lietai
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Noklikšķinot uz aizvēršanas pogu  paslēpj sarkasta lietu
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Pievieno vārdu "Pabeigts" kad uzspiež uz sarkasta lietu 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Izveido jaunu saraksta lietu , noklikšķinot uz pogas "Pievienot"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("manaIevade").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Ievadiet kaut ko!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("manaIevade").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var myDate = new Date();
