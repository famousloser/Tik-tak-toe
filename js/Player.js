class Player {
  constructor(name, color, id, active = false) {
    this.name = name;
    this.color = color;
    this.id = id;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  /*
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an arary of new token objects
   */
  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }

  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }

  /* 
  Gets all the Token that haven't been dropped
  @return {array} of unused tokens
  */

  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }
  /* 
    Gets the active token by returning the first item in the array of unused tokens 
    @return {Object} first Token Object of the unused tokens array
  */

  get activeToken() {
    return this.unusedTokens[0];
  }
}
