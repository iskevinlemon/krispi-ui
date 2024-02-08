(function (Global) {

  // Predefined colours
  // Colour is inspired & taken from MdBoostrap 
  Global.Color = {
    Blue: "#3A71CA",
    White: "#fff",
    Red: "#DC4B64"
  };

  // Predefined positions
  Global.CENTER = "CENTER";

  // TODO: fix this
  Global.LEFT = "k-left";
  Global.RIGHT = "k-right";

  // Inline
  Global.FlexContainer = function(a){
    return `<div class="d-flex">${a}</div>`;  
  }

  // Button
  Global.Button = function(properties){
    var background = properties.Background;
    var color = properties.Color;
    var text = properties.Text;

    var position = properties.Position;
    var marginTop = properties.MarginTop;
    var marginBottom = properties.MarginBottom;
    var marginLeft = properties.MarginLeft;
    var marginRight = properties.MarginRight;
    var click = properties.Click;
    
    return `
        <button
            class="krispi-btn ${position == CENTER ? "k-center" :""}"
            style="
                background: ${background || ""};
                color: ${color || ""};
                margin-top: ${marginTop || ""};
                margin-bottom: ${marginBottom || ""};
                margin-left: ${marginLeft || ""};
                margin-right: ${marginRight || ""};
            "
            onclick="${click}"
        >
        ${text}
        </button>
    `;
  }

  // Text (h1)
  Global.H1 = function(properties){

    var id = properties.Id;

    var background = properties.Background;
    var color = properties.Color;
    var text = properties.Text;

    var position = properties.Position;
    var marginTop = properties.MarginTop;
    var marginBottom = properties.MarginBottom;
    var marginLeft = properties.MarginLeft;
    var marginRight = properties.MarginRight;

    return `
        <h1
            id="${id}"
            class="krispi-btn ${position == CENTER ? "k-center" :""}"
            style="
                background: ${background || ""};
                color: ${color} !important;
                margin-top: ${marginTop || ""};
                margin-bottom: ${marginBottom || ""};
                margin-left: ${marginLeft || ""};
                margin-right: ${marginRight || ""};
            "
        >
        ${text}
        </h1>
    `;
  }

  // Card
  Global.Card = function(properties){
    var background = properties.Background;
    var color = properties.Color;
    var text = properties.Text;

    var position = properties.Position;
    var marginTop = properties.MarginTop;
    var marginBottom = properties.MarginBottom;
    var marginLeft = properties.MarginLeft;
    var marginRight = properties.MarginRight;

    return `
        <div
            class="card k-card p-3 ${position == CENTER ? "k-center" :""}"
            style="
                background: ${background || ""};
                color: ${color || ""};
                margin-top: ${marginTop || ""};
                margin-bottom: ${marginBottom || ""};
                margin-left: ${marginLeft || ""};
                margin-right: ${marginRight || ""};
            "
        >
        ${text}
        </div>
    `;
  }

})(window);