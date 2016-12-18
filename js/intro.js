//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};


//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
    newitem.addEventListener("click", function() {
        removeItem(this);
        }
                             );
    newitem.addEventListener("mouseover", function() {
        h.innerHTML = this.innerHTML;
        }
                             );
    newitem.addEventListener("mouseout", function() {
        h.innerHTML = orgh;
        }
                             );
};


//remove specified item from list
var removeItem = function(n) {
    n.remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	  age : 15,
	  items : [10, 20, 30, 40],
	  morestuff : {a : 1, b : 'ayo'},
	  func : function(x) {
	      return x+30;
	  }
	};

var l = document.getElementsByTagName("li");

var h = document.getElementById("h");

var orgh = h.innerHTML;

var init = function() {
    for (var i = 0; i < l.length; i++) {
        //console.log(l[i]);
        l[i].addEventListener("click", function() {
            removeItem(this);
            }
                               );
        l[i].addEventListener("mouseover", function() {
            h.innerHTML = this.innerHTML;
            }
                              );
        l[i].addEventListener("mouseout", function() {
            h.innerHTML = orgh;
            }
                              );
        };
    };

init()

var b = document.getElementById("b");

b.addEventListener("click", function() {
    addItem("more elements!");
}
);





