
var view = "view_landing";

switch(view) {
  case "view_landing":
    // code block
        console.log("Show the landing UI view");
    break;
    // code block
        console.log("Error: The requested view is not recognized by the router");
        break;
      case "view_loading":
            console.log("Show the loading UI view"); 
            view_loading.classList.remove("d-none");
            //$("#view_loading").show();
        break;
}