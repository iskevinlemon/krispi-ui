(function (Global) {
  
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