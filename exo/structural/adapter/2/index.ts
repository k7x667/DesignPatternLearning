class AdapterApi implements ICodeBarreApi {
    constructor(private newApi: NewCodeBarreApi) {}
  
    makeRequest(barreCode: string): Promise<IProduit> {
      return this.newApi.fetch(barreCode)
        .then((newApiProduct: INewApiProduit) => {
          return {
            prix: newApiProduct.data.price,
            quantite: newApiProduct.data.quantity,
            poids: newApiProduct.data.weight,
            nutriscore: newApiProduct.data.quality.nutriscore,
            taille: this.parseSize(newApiProduct.data.size),
        };
      });
  }
  
    private parseSize(sizeString: string): { largeur: number, hauteur: number, profondeur: number } {
      const [largeur, hauteur, profondeur] = sizeString.split('x').map(Number);
      return { largeur, hauteur, profondeur };
  }
}
  
  // Utilisation de l'adaptateur
  console.log('Je vais chercher le produit BE49RJ2UFR sur l\'api');
  
  const newApi = new NewCodeBarreApi();
  const apiCodeBarre: ICodeBarreApi = new AdapterApi(newApi);
  
  apiCodeBarre.makeRequest("BE49RJ2UFR")
    .then((product) => {
      console.log(product.prix, product.nutriscore, product.taille.hauteur);
  });
  