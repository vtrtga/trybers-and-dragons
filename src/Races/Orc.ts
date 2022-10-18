import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  static instances = 0;

  constructor(
    readonly name: string, 
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }

  static createdRacesInstances() {
    this.instances += 1;

    return this.instances;
  }
}