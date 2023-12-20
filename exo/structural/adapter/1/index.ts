class AdaptateurFourABois implements IFourElectrique {
    private fourABois: FourABois;
  
    constructor(fourABois: FourABois) {
        this.fourABois = fourABois;
  }
  
    ouvrir(porte: Number): Promise<Boolean> {
        return this.fourABois.deverouiller();
  }
  
    cuire(pizza: IPizza): Promise<Boolean> {
        return Promise.all([
            this.fourABois.enclencher(1),
            this.fourABois.placer(pizza),
            this.fourABois.faireTourner(),
            this.fourABois.chaleur(),
        ]).then((results) => results.every((result) => result === true));
  }
}
  
  // Utilisation de l'adaptateur
  console.log("Préparation d'une pizza !");
  const pizza = new Pizza('marguerita', 7);
  
  const voiceCommander = new VoiceCommand();
  const fourABois = new FourABois(voiceCommander);
  
  const adaptateur = new AdaptateurFourABois(fourABois);
  
  adaptateur.ouvrir(1).then(() => adaptateur.cuire(pizza));
  