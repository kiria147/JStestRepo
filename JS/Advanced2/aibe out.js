var aibe = [
  {id:1, name: "dog", parentId: null},
  {id:2, name: "Buddy", parentId:1 },
  {id:3, name: "Daisy", parentId:1 },
  {id:4, name: "cat", parentId:null },
  {id:5, name: "Smokey", parentId:4 },
  {id:6, name: "Oscar", parentId:4 },
];

var rez = [];
 
var columnDefs = function(key, sortable, resizeable){
    this.key = key;
    this.sortable = sortable;
    this.resizeable = resizeable;
    };
 
var duom = function(id, name){
  var tempB = {[id]: name}
  tempA.push({[id]: [name]});
  console.log(tempB);
}
 
var id = null;
var parentId = null;
var name = null;
  for(i in aibe){
  if(aibe[i].parentId == null)
  {
    name = aibe[i].name;
    if(aibe[i].parentId == null)
      id = aibe[i].id;

    else
    id = aibe[i].parentId;
    var tempA = [];
 
    for(j in aibe){
      if(aibe[j].parentId == id)
        tempA.push(aibe[j].name);
    }
 
    rez.push(new duom(name, tempA));
  } 
}
 
console.log(rez);