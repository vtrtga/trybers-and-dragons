import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  static instances = 0;

  constructor(readonly name: string, readonly dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  static createdRacesInstances() {
    this.instances += 1;

    return this.instances;
  }
}