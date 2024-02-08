(function (Global) {

  // Text
  Global.Text = function(properties){

    var id = properties.Id;

    var background = properties.Background;
    var color = properties.Color;
    var text = properties.Text;

    var position = properties.Position;
    var marginTop = properties.MarginTop;
    var marginBottom = properties.MarginBottom;
    var marginLeft = properties.MarginLeft;
    var marginRight = properties.MarginRight;
    var fontSize = properties.FontSize;

    return `
        <div
            id="${id}"
            class="krispi-btn ${position == CENTER ? "k-center" :""}"
            style="
                background: ${background || ""};
                color: ${color} !important;
                margin-top: ${marginTop || ""};
                margin-bottom: ${marginBottom || ""};
                margin-left: ${marginLeft || ""};
                margin-right: ${marginRight || ""};
                font-size: ${fontSize};
            "
        >
        ${text}
        </div>
    `;
  }

})(window);