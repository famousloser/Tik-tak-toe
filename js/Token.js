class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token - ${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }
  /*
  
   *Draw New HTML Token

   */

  drawHTMLToken() {
    const token = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(token);
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    token.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    return document.getElementById(this.id);
  }

  /**
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }
  /**
   * Moves html token one column to left.
   */
  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  moveRight(column) {
    if (this.columnLocation < column - 1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }
  /**
   * Drops html token into targeted board space.
   * @param   {Object}   target - Targeted space for dropped token.
   * @param   {function} reset  - The reset function to call after the drop animation has completed.
   */
  drop(target, resetFunc) {
    this.dropped = true;
    $(this.htmlToken).animate(
      {
        top: target.y * target.diameter
      },
      750,
      "easeOutBounce",
      resetFunc
    );
  }
}
