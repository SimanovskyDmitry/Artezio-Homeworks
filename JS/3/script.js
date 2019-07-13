var noimgsrc='https://lh4.googleusercontent.com/proxy/5jp2fc4gHJM1K_mYrsqe9f62iIzgYLhFCc8J5dh4xWh4kswdLMKGcwLAH9dfizC6jSrWHr4xliwR4MTVW3UADLxcopU=w1200-h630-n-k-no-nu'
var imgs = ['http://a1327.phobos.apple.com/us/r30/Purple4/v4/69/d9/b2/69d9b296-863f-fc1c-cf44-9ebe07e8b9ca/mzl.rlfkiuff.png',
			'https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/d0/92/70/d0927059-05c3-625d-88d5-342c83e71273/source/512x512bb.jpg',
			'https://kuaza.com/wp-content/uploads/2015/01/img-src-php-html.gif',
			'https://demo.cyotek.com/assets/img/image-4x.png',
			'http://is2.mzstatic.com/image/thumb/Purple111/v4/af/43/54/af4354ed-55c6-2620-a9a1-0ffe3adf3c7a/source/512x512bb.jpg',
			'http://fb.ru/misc/i/gallery/40126/2632960.jpg',
			'https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/42/46/a1/4246a197-8af7-6097-d4a5-5024da3d7136/source/512x512bb.jpg',
			'http://cdn.onlinewebfonts.com/svg/img_487591.png'];
var coords = [];
var table;
var game = [];
var status;
var score = 8;
function startFunction(){
	table = document.getElementById("table");
	//console.log(table);
	//console.log(table.children[0].children[0]);	
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			coords.push(table.children[i].children[j]);
		}
	}
	newGame();
	status = 0;
}
function newGame(){
	for (var i = 0; i < 16; i++) {
		game[i] = -1;
		coords[i].src = noimgsrc;
	}
	for (var i = 0; i < 7; i++) {			
		x1 = getRandomInt(0, 15);
		while(game[x1] != -1){			
			x1 = getRandomInt(0, 15);
		}
		x2 = getRandomInt(0, 15);
		while((game[x2] != -1)||(x2 == x1)){
			x2 = getRandomInt(0, 15);
		}
		game[x1] = i;
		game[x2] = i;
	}
	for (var i = 0; i < 16; i++) {
		if(game[i] == -1){
			game[i] = 7;
		}
	}
	score = 8;
	//console.log(game);
}
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var neededid;
var neededid2;
function returnCell(){
	neededid = FindId(event.target);
	if (coords[neededid].src == noimgsrc) {
		if (status==1) {
			coords[neededid].src = imgs[game[neededid]];
			if (game[neededid] != game[neededid2]){
				setTimeout(function() { 
					coords[neededid].src = noimgsrc;
					coords[neededid2].src = noimgsrc;
				 }, 1000);				
			}else{
				score = score - 1;
			}
			status = 0;
		}else{
			neededid2 = neededid;
			coords[neededid2].src = imgs[game[neededid2]];
			status = 1;
		}
	}
	if (score==0){
		alert('You WON!');
	}
}
function FindId(target){
	for (var i = 0; i < 16; i++) {
		if (coords[i] == target) {
			break;
		}
	}
	return(i);
}