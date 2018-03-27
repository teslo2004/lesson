arr2 = [
		["Дмитрий", 33, "программист"],
		["Виктор", 40, "водитель"], 
		["Олег", 25, "журналист"],
		["Игорь", 30, "футболист"]
									];
	var table = document.createElement("table");
	document.body.appendChild(table);

	table.innerHTML="<tbody></tbody>";
	table.setAttribute("border",2);
	var tbody = table.children[0];
	
	for (var i in arr2){
		var tr=document.createElement("tr");
		var data=arr2[i];
		var str="";
		data.forEach(function(item){
		str+="<td>"+item+"</td>";

	});
	tr.innerHTML=str;
	tbody.appendChild(tr);
	}



var red=document.getElementsByTagName("td");
for(var i=0;i<red.length;i++){
	
	red[i].addEventListener("mouseover", function(){
		this.className='red';
	});
}

for(var i=0;i<red.length;i++){
	
	red[i].addEventListener("mouseout", function(){
		
		this.className='red2';

		})

}





//	timer=setTimeout(function(){			
//		}
//	},2000);
//	};
//	red[i].onmouseout=function(){
//		clearTimeout(timer);
//	};
