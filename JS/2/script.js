function btnClick(){
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	var result = document.getElementById('result');	
	if((x1=='')||(x2=='')){
			result.innerText = "Ошибка: поля должны быть заполнены.";
	}else{
		x1 = parseInt(x1);
		x2 = parseInt(x2);
		if(isNaN(x1)||isNaN(x2)){
			result.innerText = "Ошибка: должны быть введены численные значения.";
		}else{
			if (document.getElementById('r1').checked) {
				if(x1 < x2){
					var sum = 0;
					for (var i = x1; i <= x2; i++) {
						sum = sum + i;
					}
					result.innerText = ("X1 +...+ X2 = " + (sum));
				}else{
					result.innerText = "Ошибка: X2 больше X1.";
				}
			} else {
				if (document.getElementById('r2').checked) {
					var proizv = 1;
					if(x1 < x2){
						for (var i = x1; i <= x2; i++) {
							proizv = proizv * i;
						}
						result.innerText = ("X1 *...* X2 = " + (proizv));
					}else{
						for (var i = x2; i <= x1; i++) {
							proizv = proizv * i;
						}
						result.innerText = ("X1 *...* X2 = " + (proizv));
					}
				}else{
					if(x1 <= x2){
						result.innerText = returnSimple(x1,x2);
					}else{						
						result.innerText = "Ошибка: X2 больше X1.";
					}
				}
			}
			
		}
	}
}
function btnClear(){
	document.getElementById('x1').value = '';
	document.getElementById('x2').value = '';
}
function returnSimple(x1, x2){
	if(x2==1){
			return 'Простые числа с X1 по X2: 1.';		
	}else{
		if(x1 == 1){
			var prost = Simple(x2);
			console.log(prost);
			text = 'Простые числа с X1 по X2: 1, ' + prost[0];
			for (var i = 1; i < prost.length; i++) {
				
				text = text + ', ' + prost[i];
			}
			text = text + '.'
			return text;
		}else{
			var prost1 = Simple(x1);
			var prost2 = Simple(x2);
			console.log(prost1);
			console.log(prost2);
			prost1 = prost1.length;
			for (var i = 0; i < prost1; i++) {
				prost2.shift();
			}
			text = 'Простые числа с X1 по X2: ' + prost2[0];
			for (var i = 1; i < prost2.length; i++) {
				
				text = text + ', ' + prost2[i];
			}
			text = text + '.'
			return text;
		}
	}
}
function Simple(x){
	var prost = [2];
//chislo = 600851475143
	var i = 2;
	var j;
	while(i <= x){
		j = 0;
		prost.forEach(function(item){
			if(i%item == 0){
				j++;
			}
		});
		if(j == 0){
			prost.push(i);
			prost.sort(compareNumeric);
		}
		i++;
	}
	prost.sort(compareNumeric);
	return prost;
}
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}