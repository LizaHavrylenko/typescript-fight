import Fighter from "./fighter";
export default async function fight (fighter: Fighter, improvedFighter: Fighter, ...point: number[]){
    for (let pointValue of point) {
      if ((fighter.health>=0)&&(improvedFighter.health>=0)){
        
      fighter.hit(improvedFighter, pointValue);
      if (improvedFighter.health  < 0) {
        console.log(`${improvedFighter.name as string} is in knockout.`);
        await improvedFighter.knockout();
        console.log(`${fighter.name as string} wins!`);
      } 
  
      improvedFighter.hit(fighter, pointValue);
      if (fighter.health < 0) {
        console.log(`${fighter.name as string} is in knockout.`);
        await fighter.knockout();
        console.log(`${improvedFighter.name as string} wins!`);
      }
    }
    }
  }