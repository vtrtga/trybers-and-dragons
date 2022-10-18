import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instances = 0;
  energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
  }

  static createdArchetypeInstances() {
    this.instances += 1;
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}