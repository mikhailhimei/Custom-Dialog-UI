export interface HassLike {
  connection: {
    sendMessagePromise<T>(msg: any): Promise<T>;
  };
  states: Record<string, any>;
}

export class DialogApi {
  constructor(private hass: HassLike) {}

  async getScenarios() {
    console.log("WS => dialog/get_scenarios");

    const result =
      await this.hass.connection.sendMessagePromise({
        type: "dialog/get_scenarios",
      });

    console.log("WS <=", result);

    return result.scenarios;
  }

  async saveScenarios(scenarios: any[]) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog/save_scenarios",
      scenarios,
    });
  }

  async getConfig() {
    console.log("WS => dialog_custom_ui/get_config");

    const result =
      await this.hass.connection.sendMessagePromise({
        type: "dialog_custom_ui/get_config",
      });

    console.log("WS <=", result);

    return result.scenarios;
  }

  async saveConfig(config: any[]) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog/save_config",
      config,
    });
  }

  async getLogs(){
    console.log("WS => dialog_custom_ui/get_logs");

    const result =
      await this.hass.connection.sendMessagePromise({
        type: "dialog_custom_ui/get_logs",
      });

    console.log("WS <=", result);

    return result.scenarios;
  }

  getScripts() {
    return Object.values(this.hass.states)
      .filter(
        (entity: any) =>
          entity.entity_id.startsWith("script.")
      )
      .map((entity: any) => ({
        entity_id: entity.entity_id,
        name:
          entity.attributes?.friendly_name ??
          entity.entity_id,
      }));
  }






  //запуск но зачем?
  async runScript(entityId: string) {
    return this.hass.connection.sendMessagePromise({
      type: "call_service",
      domain: "script",
      service: "turn_on",
      service_data: {
        entity_id: entityId,
      },
    });
  }

}


///"dialog_custom_ui/get_config"
///dialog_custom_ui/get_logs