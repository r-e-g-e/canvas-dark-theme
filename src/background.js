const colorPallet = {
  background: "#333",
  backgroundHoverTable: "#444",
  font:"#fff",
  anchor: "#95a5ff"
};

const elements = {
  colorAndBackground: ["body", "div", "ul", "a"],
  color: ["li", "span", "b", "i", "p", "h1", "h2", "h3", "h4", "h5", "strong"],
  anchor: "a"
};

const updateTableHover = () => {  
  const tables = document.querySelectorAll("tr")

  tables.forEach( table => {
    table.addEventListener("mouseenter", () => {
      table.style.backgroundColor = colorPallet.backgroundHoverTable
    })

    table.addEventListener("mouseleave", () => {
      table.style.backgroundColor = colorPallet.background
    })
  })
}

const updatePageColor = () => {

  for( const currentElement of elements.colorAndBackground ){
    const allElements = document.querySelectorAll(currentElement);
  
    allElements.forEach( element => {
      element.style.color = colorPallet.font;
      element.style.backgroundColor = colorPallet.background;
    })
  }
  
  for( const currentElement of elements.color ){
    const allElements = document.querySelectorAll(currentElement);
  
    allElements.forEach( element => {
      element.style.color = colorPallet.font;
    });
  }
  
  document.querySelectorAll(elements.anchor).forEach( anchor => anchor.style.color = colorPallet.anchor);
}


updatePageColor()
updateTableHover()