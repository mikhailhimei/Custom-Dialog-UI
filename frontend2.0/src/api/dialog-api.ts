export interface HassLike {
  connection: {
    sendMessagePromise<T>(msg: any): Promise<T>;
  };
  states: Record<string, any>;
}

export class DialogApi {
  constructor(private hass: HassLike) {}

  async getScriptsAction() {
    console.log("WS => dialog/script_actions");

    const result =
      await this.hass.connection.sendMessagePromise({
        type: "dialog_custom_ui/get_script_actions_short",
      });

    console.log("WS script <=", result);

    return result.script_actions;
  }

  async getDetailedScriptAction(uuid: string) {
    console.log("WS => dialog_custom_ui/get_script_action", uuid);
    const result =
      await this.hass.connection.sendMessagePromise({
        type: "dialog_custom_ui/get_script_action",
        uuid,
      });
    console.log("WS script <=", result);
    return result.script_action;
  }

  async saveScriptAction(script_action: any) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/save_script_action",
      script_action,
    });
  }

  async updateScriptAction(uuid: string, script_action: any){
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/update_script_action",
      uuid: uuid,
      script_action,
    });
  }

  async deleteScriptAction(uuid: string) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/delete_script_action",
      uuid,
    });
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