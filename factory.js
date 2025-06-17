class Pet {
  constructor(name) {
    this.name = name;
  }
}

class PetFactory {
  createPet(name) {
    return new Pet(name);
  }
}

const factory = new PetFactory();
const pet1 = factory.createPet("Fido");
const pet2 = factory.createPet("Mittens");

console.log(pet1 === pet2);
