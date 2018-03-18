var tree = {
        Лес:{
            Бук:{},
            Дуб:{},
            Береза:{},
            Липа:{}
        },
        Тайга:{
            Сосна:{},
            Ель:{},
            Кедр:{}
        },
        Лесостепь:{
            Хвоя:{},
            Каштан:{},
            Ясень:{}
        }
    };
    
function createModel(model, obj){
    model.innerHTML = createName(obj);
}
function createName(obj){
    var li="";
    for (var i in obj){
        li+="<li>"+i+createName(obj[i])+"</li>";
    }
    if(li){
        var ul="<ul>"+li+"</ul>";
    }
    return ul || "";
}
var model=document.getElementById("model");
createModel(model, tree);