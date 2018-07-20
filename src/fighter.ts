export interface IFighter{
    readonly name: string;
    health: number;
    setDamage:(number) => void;
    hit:(Fighter, number) => void;
    knockout: () => Promise<string>;
}
export default class Fighter implements IFighter{
    public name;
    public health;
    private power;
    constructor(name: string, health: number = 100, power:number = 10){
      this.name = name;
      this.health = health;
      this.power = power;
    }
    public setDamage(damage:number){
      this.health = this.health - damage;
      console.log(this.name+' health: ' + this.health);
    }
    public hit(enemy:Fighter, point:number){
      let damage = point * this.power;
      enemy.setDamage(damage);
    }
    public knockout(): Promise<string>{
      let knockoutPromise =  new Promise<string>((resolve) => {
      setTimeout(() => {
      resolve("Time is over");
      }, 500);
    });
    knockoutPromise
      .then(successMessage => {
      console.log(successMessage);
    })
    .catch(() => { })
      return knockoutPromise;
    }
    }
    
    