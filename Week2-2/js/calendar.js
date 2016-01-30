// It will display the calendar over here
var j;
var k;
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
var numbers = [1,2,3,4,5,6,7];

for (j = 0; j<5;j++){
	stringHTML+="<tr>"
	for(k = 0; k<7;k++){
		if((numbers[k] + (7*j)) > 31){
			break;
			}
		stringHTML+="<td>" +(numbers[k] + (7*j))+ "</td>"
		
		
		}
	stringHTML+="<tr>"


}

hotelTable.innerHTML += stringHTML;

//i have got help on this one





