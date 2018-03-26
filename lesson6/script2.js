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
	tr.innerHTML=str+"<input type='button' value='click' class='btn'/>";
	tbody.appendChild(tr);
	}
	
	
	var btn=document.getElementsByClassName("btn");
	for(var i=0;i<btn.length;i++){
	btn[i].addEventListener("click", function(){
		
		alert(this.parentNode.firstChild.innerHTML);
	
	})
	}
