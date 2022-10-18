export default abstract class Race {
  public readonly _name: string;
  public readonly _dexterity: number;

  constructor(
    readonly name: string, // pq se coloco private fica setavel?
    readonly dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}