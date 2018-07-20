import Fighter from "./fighter";
import IFighter from "./fighter";

interface IImprovedFighter extends IFighter{
    doubleHit:(Fighter, number) => void;
}
export default class ImprovedFighter extends Fighter implements IImprovedFighter {
  doubleHit(enemy: Fighter, point:number) {
    super.hit(enemy, 2 * point);
  }
}