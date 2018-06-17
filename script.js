// Task 1
function taskOne() {
	// получение строки из input
	var str = document.getElementById("inputTask1").value;

	// проверка строки
	if (str.length < 1 || str.length > 10000 || str === "") {
		// очистка input
		document.getElementById("inputTask1").value = "";
		alert("Строка введена некорректно");
		return;
	}	

	// выполнение функции для преобразования строки
	var newStr = changeString(str);

	// проверка, есть ли изменения
	if (str === newStr) {
		var p = document.createElement("p");
		p.innerHTML = "Изменений не произошло. Cтрока: " + str;
		document.getElementById("task1").appendChild(p);

		// очистка input
		document.getElementById("inputTask1").value = "";

		return;
	}

	// создание элемента и вывод в нем введенной строки
	var p = document.createElement("p");
	p.innerHTML = "Введенная строка: " + str;
	document.getElementById("task1").appendChild(p);

	// создание элемента и вывод в нем измененной строки + проверка на удаление всех символов
	var p = document.createElement("p");
	if (newStr !== "") {
		p.innerHTML = "Измененная строка: " + newStr;
	} else {
		p.innerHTML = "Удалены все буквы";
	}
	document.getElementById("task1").appendChild(p);	

	// очистка input
	document.getElementById("inputTask1").value = "";
}

function changeString(str) {
	// перевод строки в массив
	var arrStr = str.split('');

	// массив с буквами, которые нужно удалить
	var arrChar = ["Р", "К", "Н"];
	// lowerchar - массив с буквами нижнего регистра
	var lowerChar = arrChar.join('');
	lowerChar = lowerChar.toLowerCase();
	lowerChar = lowerChar.split('');
	// объединение массивов (нижний и верхний регистр)
	arrChar = arrChar.concat(lowerChar);

	for (var i = 0; i < arrStr.length; i++) {
		for (var j = 0; j < arrChar.length; j++) {
			if (arrStr[i] === arrChar[j]) {
				arrStr.splice(i, 1);
				i--;
				break;
			}
		}
	}

	// перевод массива в строку
	str = arrStr.join('');

	return str;
}




// Task 2
function taskTwo() {
	var strA = document.getElementById("inputTask21").value;
	var strB = document.getElementById("inputTask22").value;

	// проверка строки a
	if (strA.length < 1 || strA.length > 10000 || strA === "") {
		// очистка input
		document.getElementById("inputTask21").value = "";
		alert("Строки введены некорректно");
		return;
	}	

	// проверка строки b
	if (strB.length < 1 || strB.length > 10000 || strB === "") {
		// очистка input
		document.getElementById("inputTask22").value = "";
		alert("Строки введены некорректно");
		return;
	}	

	// преобразование в массивы
	var arrayA = strA.split('');
	var arrayB = strB.split('');

	var min;
	var a = stepLeft(arrayA, arrayB);
	var b = stepRight(arrayA, arrayB);
	if (a <= b) {
		min = a;
		var p = document.createElement("p");
		if (min == -1) {
			p.innerHTML = "-1";
			document.getElementById("task2").appendChild(p);
		} else {
			p.innerHTML = "Количество сдвигов: " + min;
			document.getElementById("task2").appendChild(p);
		}
	} else {
		min = b;
		var p = document.createElement("p");
		if (min == -1) {
			p.innerHTML = "-1";
			document.getElementById("task2").appendChild(p);
		} else {
			p.innerHTML = "Количество сдвигов: " + min;
			document.getElementById("task2").appendChild(p);
		}
		
	}

}

function compareArrays(arr1, arr2) {
	if (arr1.length == arr2.length) {
		for (var i = 0; i < arr2.length; i++) {
			if (arr2[i] !== arr1[i]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

function stepLeft(arr1, arr2) {
	if (compareArrays(arr1, arr2)) {
		var p = document.createElement("p");
		p.innerHTML = "Количество сдвигов: 0";
		document.getElementById("task2").appendChild(p); 
	}

	var count = 0;
	while (!compareArrays(arr1, arr2)) {
		arr1 = arr1.slice(1).concat(arr1.slice(0,1));
		if (count == arr1.length) {
			return -1;
		}
		count++;
	}
	return count;
}

function stepRight(arr1, arr2) {
	if (compareArrays(arr1, arr2)) {
		var p = document.createElement("p");
		p.innerHTML = "Количество сдвигов: 0";
		document.getElementById("task2").appendChild(p); 
	}

	var count = 0;
	while (!compareArrays(arr1, arr2)) {
		if (count == arr1.length) {
			return -1;
		}
		arr1 = arr1.splice(-1).concat(arr1);
		count++;
	}
	return count;
}


// Task 3
function taskThree() {
	var time = document.getElementById("inputTask3").value;

	var arr = time.split(' ');
	// проверка на количество введеных элементов
	if ((arr.length > 2) || (arr.length == 1) || (arr.length == 0)) {
		document.getElementById("inputTask3").value = "";
		alert("Введите два числа");
		return;
	}

	var t1 = +arr[0];
	var t2 = +arr[1];

	// проверка на корректность введенных чисел
	if ((t1 < 1) || (t1 > 100000) || (isNaN(t1)) || (t2 < 1) || (t2 > 100000) || (isNaN(t2)) || time === "") {
		document.getElementById("inputTask3").value = "";
		alert("Числа введены некорректно");
		return;
	}

	transformTime(t1, t2);
}

function transformTime(time1, time2) {
	var sumTime = time1 + time2;
	var hours = Math.floor(sumTime / (60*60));
	var minute = 0;
	var second = 0;
	var intermediateValue = 0;
	var prettyTime;

	if (hours > 0) {
		intermediateValue = sumTime - (hours*60*60);
		minute = Math.floor(intermediateValue / 60);
		if (minute > 0) {
			second = intermediateValue - minute*60;
			prettyTime = document.createElement("p");
			if (second == 0) {
				prettyTime.innerHTML = hours + " h " + minute + " min";
			} else {
				prettyTime.innerHTML = hours + " h " + minute + " min " + second + " sec";
			}

			document.getElementById("task3").appendChild(prettyTime);
			document.getElementById("inputTask3").value = "";
		} else {
			second = intermediateValue;	
			prettyTime = document.createElement("p");
			if (second == 0) {
				prettyTime.innerHTML = hours + " h";
			} else {
				prettyTime.innerHTML = hours + " h " + second + " sec";
			}
			document.getElementById("task3").appendChild(prettyTime);
			document.getElementById("inputTask3").value = "";
		}
	} else {
		minute = Math.floor(sumTime / 60);
		if (minute > 0) {
			second = sumTime - minute*60;
			prettyTime = document.createElement("p");
			if (second == 0) {
				prettyTime.innerHTML = minute + " min";
			} else {
				prettyTime.innerHTML = minute + " min " + second + " sec";
			}
			document.getElementById("task3").appendChild(prettyTime);
			document.getElementById("inputTask3").value = "";
		} else {
			second = sumTime;
			prettyTime = document.createElement("p");
			prettyTime.innerHTML = second + " sec";
			document.getElementById("task3").appendChild(prettyTime);
			document.getElementById("inputTask3").value = "";
		}
	}
}