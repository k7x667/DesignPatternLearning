// Interface pour les services d'informations externes
interface ExternalInfoService {
    url: string;
    authenticate(vinVehicule: string): Promise<boolean>;
    getInformation(vinVehicule: string): Promise<string>;
}
  
  // Classe abstraite de la Factory
abstract class ExternalInfoServiceFactory {
    abstract createService(): ExternalInfoService;
}
  
  // Implémentation de CarVertical
class CarVerticalService implements ExternalInfoService {
    url = 'https://carvertical.com';
  
    async authenticate(vinVehicule: string): Promise<boolean> {
      console.log(`Authentification CarVertical vin: ${vinVehicule}`);
      // Logique d'authentification fictive
      return true;
    }
  
    async getInformation(vinVehicule: string): Promise<string> {
      console.log(`Récupération des données CarVertical : ${vinVehicule}`);
      // Logique de récupération de données fictive
      return 'Informations CarVertical';
    }
}
  
  // Implémentation de CamionVertical
class CamionVerticalService implements ExternalInfoService {
    url = 'https://camionvertical.com';
  
    async authenticate(vinVehicule: string): Promise<boolean> {
      console.log(`Authentification CamionVertical vin: ${vinVehicule}`);
      // Logique d'authentification fictive
      return true;
    }
  
    async getInformation(vinVehicule: string): Promise<string> {
      console.log(`Récupération des données CamionVertical : ${vinVehicule}`);
      // Logique de récupération de données fictive
      return 'Informations CamionVertical';
    }
}
  
  // Implémentation de TracteurVertical
class TracteurVerticalService implements ExternalInfoService {
    url = 'https://tracteurvertical.com';
  
    async authenticate(vinVehicule: string): Promise<boolean> {
      console.log(`Authentification TracteurVertical vin: ${vinVehicule}`);
      // Logique d'authentification fictive
      return true;
    }
  
    async getInformation(vinVehicule: string): Promise<string> {
      console.log(`Récupération des données TracteurVertical : ${vinVehicule}`);
      // Logique de récupération de données fictive
      return 'Informations TracteurVertical';
    }
}
  
  // Fonction principale
async function main(vin: string, creator: ExternalInfoServiceFactory) {
    const api = creator.createService();
  
    const authSuccess = await api.authenticate(vin);
    if (!authSuccess) throw new Error('Could not authenticate with the api');
  
    const response = await api.getInformation(vin);
  
    console.log(response);
}
  
  // Utilisation de la fonction principale
main('123F234', new CarVerticalService());
main('282FYF274FA023YFH', new CamionVerticalService());
main('J87UY4HJRUIFYH', new TracteurVerticalService());
  