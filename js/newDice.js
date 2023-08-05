function getDice_value(d_before, d_after, roll){
    var playnum  = d_before; //振る回数
    var men      = d_after;　//賽の面数
    var diceroll = roll;     //識別用
    
    switch(diceroll){
        case '1d6':
            var result = playDice(playnum, men);

            document.getElementById('condice1').innerHTML   = (result);
            document.getElementById('condice1-1').innerHTML = (result);
            document.getElementById('log').value            += result + ",";
            break;

        case '3d6':
            var result     = playDice(playnum, men);
            var add_result = addDicenumber(result);

            document.getElementById('condice2').innerHTML   = (result);
            document.getElementById('condice2-1').innerHTML = (add_result);
            document.getElementById('log').value            += (result + ",");
            break;

        case '1d10':
            var result = playDice(playnum, men);

            document.getElementById('condice3').innerHTML   = (result);
            document.getElementById('condice3-1').innerHTML = (result);
            document.getElementById('log').value            += (result + ",");
            break;

        case '1d100':
            var result = playDice(playnum, men);

            document.getElementById('condice4').innerHTML = (result);
            document.getElementById('condice4-1').innerHTML = (result);
            document.getElementById('log').value += (result + ",");
            break;

        default:
            //振る回数の取得
            var d_before        = document.getElementById('roll');
            var d_before_option = document.getElementById('roll').options;
            var roll            = parseInt(d_before_option.item(d_before.selectedIndex).value) + 0;

            //賽の面の数取得
            var d_after        = document.getElementById('men');
            var d_after_option = document.getElementById('men').options;
            var men            = parseInt(d_after_option.item(d_after.selectedIndex).value) + 0;

            var result     = playDice(roll, men);
            var add_result = addDicenumber(result);
            document.getElementById('condiceall').innerHTML =(result);
            document.getElementById('log').value            += (result + ",");
            document.getElementById('condicesum').innerHTML =(add_result);
            break;
    }
}

//ダイスの出目の決定と出力
function playDice(playnum, men){
    var diceroll_result = [];

    for(var i = 0; i<playnum; i++){
        play = Math.floor(Math.random() *men +1);
        diceroll_result.push(play);
    }

    return diceroll_result;
}

//ダイスの出目を合計
function addDicenumber(result){
    var playDice_array = result.length;
    var dicenumber_sum = 0;

    for(i = 0; i<playDice_array; i++){
        dicenumber_sum += result[i];
    }

    return dicenumber_sum;
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
