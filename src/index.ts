import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter"; 
import fight from "./fight";
 

const fighter = new Fighter('John', 100, 15);
const improvedFighter = new ImprovedFighter('Mark', 150, 20);
fight(fighter, improvedFighter, 4,5,3);