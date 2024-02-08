(function (Global) {

  // Prevent right click, inspect element
  Global.ContextMenu = function(){
    document.addEventListener('contextmenu', event => event.preventDefault());
  }
  
  // Shorthand for console.log
  Global.log = function(a){
    console.log(a);
  }

  // Shorthand for $
  Global.locate = function(a){
    return $(a);
  }

  // Convert string function name to function
  Global.Function = function(a){
    return `${a}()`;
  }

  // Holds all components
  Global.componentList = [];

  // When something is defined as a component,
  // it automatically adds it into componentList
  Global.Component = function(a){
    componentList.push(a);
  }

  // Holds all components to be rendered (add to view)
  var componentView = "";

  // Add all items in componentList to componentView
  Global.addAllComponentsToView = function(){
    componentList.forEach((component) => {
        componentView += component;
    });
  }

  // Function to re-render UI (including mobile)
  Global.DisplayScreen = function () {
    componentView = "";

    console.log("Screen is rendered.");
    addAllComponentsToView();

    // Mobile screen - View 1
    Global.viewOne = `
    <div class="card mobile-card-border p-3 bg-dark mt-3">
        <div class="card-body mobile-card-view bg-white">
            ${componentView}
        </div>
        <div class="text-center mt-2">
          <i class="text-white far fa-circle"></i>
        </div>
    </div>
    `;

    // Add the screen to browser
    $("#_root").html(viewOne);
    // console.log("Mobile device mounted");
    
  };
})(window);


