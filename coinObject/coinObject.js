const body = document.getElementsByTagName('body')[0]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const coin = {
    state: 0,
    flip: function () {
        return this.state = getRandomIntInclusive(0, 1)
    },
    toString: function () {
      if(this.state === 0){
          return 'Heads'
      }else{
          return 'Tails'
      }
    },
    toHTML: function () {
      const image = document.createElement("img");
         if(this.state === 0){
        image.src = 'images/cara.jpg'
        image.alt = "Heads"
        image.classList = 'coins'
    } else{
        image.src = 'images/coroa.jpg'
        image.alt = "Tails"
        image.classList = 'coins'  
     }
     return image
    }
    
}

function display20Flips() {
    const results = [];
    for(let i = 0; i < 20; i++){
        let flipping = coin.flip()
        results.push(coin.toString())
    }
    const flips = document.createElement('p')
    flips.innerText = results
    body.appendChild(flips)
    return results
  }

display20Flips()

function display20Images() {
    const results = [];
    for(let i = 0; i < 20; i++){
        let flipping = coin.flip()
        results.push(body.appendChild(coin.toHTML()))
    }
    return results
  }

display20Images()