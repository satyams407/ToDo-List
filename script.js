// Code goes here

var todolist= {

  todos: [],
  name: 'satyam',
  
 /* display: function(){
    if(this.todos.length===0) console.log('List is empty');
    else{
    for(var i=0; i<this.todos.length; i++){
      if(this.todos[i].completed===true) console.log('(x)',this.todos[i].todotext);
      else console.log('( )',this.todos[i].todotext);
     }
    } 
  },
  */
  
  addtodo: function(value){
        this.todos.push({
      todotext: value,
      completed: false
    });
  },
  
  change: function(position,value){
    //debugger;
    this.todos[position].todotext=value;
    //this.display();
  },
  
  delete : function(postion){
    this.todos.splice(postion,1);
    //this.display();
  },
  
  togglecompleted: function(position){
    var todo=this.todos[position];
    todo.completed= !todo.completed;
    //this.display();
  },
  
  toggleall: function(){
   // debugger;
    var completedtodos=0;
    var totaltodos= this.todos.length;
    
    //by using forEachloop instead of for loop
     this.todos.forEach(function(todo){
      if(todo.completed===true) completedtodos++;
    });

    /*//case 1:toogling, if they are completed
    if(completedtodos===totaltodos){
      
    //for(var i=0; i<totaltodos ; i++)
    
    this.todos.forEach(function(todo){
      todo.completed = false;
    });
   }
   
   //case 2:otherwise make everthing true
   else{
     //for(var i=0; i<totaltodos ; i++){
     
     this.todos.forEach(function(todo){
     todos.completed=true;
     });
   }
   //this.display();
  }
  */
  
  this.todos.forEach(function(todo){
    if(completedtodos===totaltodos) todo.completed = false;
    else todo.completed=true;
  });

 }
};  

  /*
  // To have access to the display button
  var displaybutton= document.getElementById('display_id');
  //console.log(displaybutton);
  
  //to perfom clicklistener when someone click on display button 
  displaybutton.addEventListener('click',function(){
    todolist.display();
  });
  
  
  var togglebutton = document.getElementById('toggle_id');
  togglebutton.addEventListener('click',function(){
    todolist.toggleall();
  });
  */
  
  var handlers = {
  
   // displaytodos: function(){
     // todolist.display();
    //},
  
    addthetodo:function(){
      var addtodoinput=document.getElementById('addtodoinput_id');
      todolist.addtodo(addtodoinput.value);
      addtodoinput.value='';
      view.displaytodos();
    },
    
    changed:function(){
       var position=document.getElementById('changeposition_id');
       var input=document.getElementById('changeinput_id');
       todolist.change(position.valueAsNumber, input.value);  
       position.value='';
       input.value='';
       view.displaytodos();

    },
    
    delete: function(position){
      //var position=document.getElementById('deleteposition_input_id');
      todolist.delete(position);
     // position.value='';
      view.displaytodos();
    },
    
    togglecompleted: function(){
      var pos=document.getElementById('toggleposition_input_id');
      todolist.togglecompleted(pos.valueAsNumber);
      pos.value='';
      view.displaytodos();

    },
    
    toggletodos:function(){
      todolist.toggleall();
      view.displaytodos();
    },
  };
  
  var view = {
   
    displaytodos:function(){
      //debugger;
      var todosui =document.querySelector('ul');
      todosui.innerHTML='';
      for(var i=0;i<todolist.todos.length;i++){
        
        var todoli= document.createElement('li');
        var todo = todolist.todos[i];
        var todocompletion= '';
        
        if(todo.completed===true) todocompletion= '(x)'+ todo.todotext;
        else todocompletion= '( )'+ todo.todotext;
        
        todoli.id=i;
        todoli.textContent=todocompletion;
        todoli.appendChild(this.createdeletebutton());
        todosui.appendChild(todoli);
      }
    },
    
  createdeletebutton: function(){
  var deletebutton =document.createElement('button');
  deletebutton.textContent= 'Delete';
  deletebutton.className= 'deletebutton';  
  return deletebutton;
 },
 
 setupeventlistener: function(){
 
   var todosul= document.querySelector('ul');
   todosul.addEventListener('click',function(){
  
   //console.log(event.target.parentNode.id);
    var itemclicked = event.target;
    if(itemclicked.className==='deletebutton'){
     handlers.delete(parseInt(itemclicked.parentNode.id));
    }
   });
  }
 };

 view.setupeventlistener();
  
  
  
  
  
  
  