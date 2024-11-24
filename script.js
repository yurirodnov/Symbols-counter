function countSymbols(){
	withSpaces.innerHTML = 'Символов с пробелами:';
	without.innerHTML = 'Символов без пробелов:';
	
	let notSpace = 0;
	let space = 0;
	let atAll = 0;
	
	var getText = textfield.value.split('');
	
	
	for(var i = 0; i < getText.length; i++){
		if(getText[i] != ' '){
			notSpace++;
		}
		else if(getText[i] == ' '){
			space++;
		}
	}
	
	atAll = space + notSpace;
	

	withSpaces.innerHTML += ' ' + atAll;
	without.innerHTML += ' ' + notSpace;	
}


function clearResult(){
	withSpaces.innerHTML = 'Символов с пробелами:';
	without.innerHTML = 'Символов без пробелов:';
}