//This is a single line comment

/*
This is 
a multi line 
comment
*/ 

console.log("Reading Challenge");

//UI Views
var view_landing = document.getElementById("view_landing");
console.log(view_landing);

var view_content = document.getElementById("view_content");
console.log(view_content);

// UI Components (Nav Icons)
var input_ico_locate = document.getElementById("input_ico_locate");
//console.log(input_ico_locate);

// UI Component (Buttons)
var input_btn_reading_log = document.getElementById("input_btn_reading_log");
console.log(input_btn_reading_log);

var dummy_section = document.getElementById("dummy_section");

input_btn_reading_log.addEventListener("click",function(){
   console.log("User click on button reading log."); 
    hide_all_view();
    dummy_section.classList.remove("d-none");
    
});

function hide_all_view(){
    dummy_section.classList.add("d-none");
}
