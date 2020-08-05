class Coin{
    constructor(x,y){
        this.coin=createSprite(x,y,50,50);
        this.image=loadAnimation("images/coin1.png","images/coin2.png");

    }
    display(){
        this.coin.addAnimation("nextLevel",this.image);
    }


}
