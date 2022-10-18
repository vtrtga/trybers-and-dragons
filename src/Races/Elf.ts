import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static instances = 0;

  constructor(readonly name: string, readonly dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }

  static createdRacesInstances() {
    this.instances += 1;

    return this.instances;
  }
}