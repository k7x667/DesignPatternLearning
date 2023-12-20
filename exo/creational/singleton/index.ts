class AppConfig {
    private static instance: AppConfig | null = null;
    private apiKey: string | null = null;
    private databaseUrl: string | null = null;
  
    private constructor() {}
  
    public static getInstance(): AppConfig {
      if (!AppConfig.instance) {
        AppConfig.instance = new AppConfig();
    }
      return AppConfig.instance;
  }
  
    public setApiKey(apiKey: string): void {
      this.apiKey = apiKey;
  }
  
    public setDatabaseUrl(databaseUrl: string): void {
      this.databaseUrl = databaseUrl;
  }
  
    public validateConfig(): void {
      if (!this.apiKey || !this.databaseUrl) {
        throw new Error("Configuration is incomplete. Please set apiKey and databaseUrl.");
    }
      // Add more validation logic if needed
  }
}
  
class ApiService {
    private config: AppConfig;
  
    constructor(config: AppConfig) {
      this.config = config;
  }
  
    public performOperation(): void {
      // Check if the configuration is valid before using it
      this.config.validateConfig();
  
      // Use the configuration properties
      console.log("Performing operation with API Key:", this.config.getApiKey());
      console.log("Using Database URL:", this.config.getDatabaseUrl());
  }
}
  
// Utilisation dans le programme principal
const appConfigInstance = AppConfig.getInstance();
appConfigInstance.setApiKey("your-api-key");
appConfigInstance.setDatabaseUrl("your-database-url");

const apiService = new ApiService(appConfigInstance);
apiService.performOperation();
  