// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    const catsDestroyed =cats.push("Ralph");
      return catsDestroyed;
  }

  function destructivelyPrependCat(){
    const catsDestroyed2 =cats.unshift("Bob");
    return catsDestroyed2;
  }

  function destructivelyRemoveLastCat(){
    const catsDestroyed3 =cats.pop();
    return catsDestroyed3;
  }


  function destructivelyRemoveFirstCat(){
    const catsDestroyed4 =cats.shift();
    return catsDestroyed4;
  }


  function appendCat(){
    const catsShallow = [...cats,"Broom"];
    return catsShallow;
  }

  function  prependCat(){
    const catsShallow2 = ["Arnold",...cats];
    return catsShallow2;
  }

  function removeLastCat(){
    const catsShallow3 =cats.slice(0,-1);
    return catsShallow3;
  }

  function removeFirstCat(){
    const catsShallow4 = cats.slice(1);
    return catsShallow4;
  }