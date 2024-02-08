(function (Global) {

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

})(window);