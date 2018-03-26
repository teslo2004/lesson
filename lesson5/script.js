	var res1=0;
	var num1=0;
	var res2=0;
	var num2=0;
		function sumNum(){ 

	for (var i=0;i<document.documentElement.childNodes.length;i++){
		if(document.documentElement.childNodes[i].nodeType===document.ELEMENT_NODE  || document.documentElement.childNodes[i].nodeType===document.COMMENT_NODE)
		{
			res1+=document.documentElement.childNodes[i];
			num1=num1+1;
		}
	}console.log(num1);
	}sumNum();

	function sumNum2(){ 
	
		for (var i=0;i<document.body.childNodes.length;i++){
			if(document.body.childNodes[i].nodeType===document.ELEMENT_NODE  || document.body.childNodes[i].nodeType===document.COMMENT_NODE)
			{
				res2+=document.body.childNodes[i];
				num2=num2+1;
			}
		}console.log(num2);
		}sumNum2();
		
function resSum(){
	return sumNum()+sumNum2();
	}	
var num3=document.getElementsByTagName("*").length;
console.log(num3);	
console.log(num1+num2+num3);
