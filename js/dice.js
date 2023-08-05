function getDice1(){	//1D6
	var dice1 = Math.floor(Math.random() *6 +1);
	document.getElementById('condice1').innerHTML = (dice1);
	document.getElementById('condice1-1').innerHTML = (dice1);
	document.getElementById('log').value += dice1 + ",  ";
}

function getDice2(){	//3D6
	var dice2 = Math.floor(Math.random() *6 +1);
	var dice3 = Math.floor(Math.random() *6 +1);
	var dice4 = Math.floor(Math.random() *6 +1);
	document.getElementById('condice2').innerHTML = (dice2 + ",  " +  dice3 + ",  " + dice4);
	document.getElementById('condice2-1').innerHTML = (dice2 + dice3 + dice4);
	document.getElementById('log').value += (dice2 + ",  " +  dice3 + ",  " + dice4 + ",  ");
}

function getDice3(){	//1D10
	var dice5 = Math.floor(Math.random() *10 +1);
	document.getElementById('condice3').innerHTML = (dice5);
	document.getElementById('condice3-1').innerHTML = (dice5);
	document.getElementById('log').value += (dice5 + ",  ");
}

function getDice4(){	//1D100
	var dice6 = Math.floor(Math.random() *100 +1);
	document.getElementById('condice4').innerHTML = (dice6);
	document.getElementById('condice4-1').innerHTML = (dice6);
	document.getElementById('log').value += (dice6 + ",  ");
}

function getDice5(){
	var select = document.getElementById('roll');
	var options = document.getElementById('roll').options;
	var roll = parseInt(options.item(select.selectedIndex).value)+0;
	
	var select = document.getElementById('men');
	var options = document.getElementById('men').options;
	var men = parseInt(options.item(select.selectedIndex).value)+0;
	
	var dataset = [];
	for(var i=0; i<roll; i++){
		var array = (Math.floor(Math.random()*men +1));
		dataset.push(array);
	}
	document.getElementById('condiceall').innerHTML =(dataset);
	document.getElementById('log').value += (dataset + ",  ");
	
	var sum =0;
	
	for(var i=0; i<dataset.length; i++){
		sum += dataset[i];
	}
	document.getElementById('condicesum').innerHTML =(sum);
}

function getClear(){
	var clear = String("");
	document.getElementById('condice1').innerHTML = (clear);
	document.getElementById('condice1-1').innerHTML = (clear);
	document.getElementById('condice2').innerHTML = (clear);
	document.getElementById('condice2-1').innerHTML = (clear);
	document.getElementById('condice3').innerHTML = (clear);
	document.getElementById('condice3-1').innerHTML = (clear);
	document.getElementById('condice4').innerHTML = (clear);
	document.getElementById('condice4-1').innerHTML = (clear);
	document.getElementById('condicesum').innerHTML =(clear);
	document.getElementById('condiceall').innerHTML =(clear);
	document.getElementById('log').value = (clear);
}

function getClear2(){
	var LogClear = String("");
	document.getElementById('log').value =(LogClear);
}
