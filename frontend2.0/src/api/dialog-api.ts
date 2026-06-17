export interface HassLike {
  connection: {
    sendMessagePromise<T>(msg: any): Promise<T>;
  };
  states: Record<string, any>;
}

export class DialogApi {
  constructor(private hass: HassLike) {}

  async _getShort(type: string) {

    const result =
      await this.hass.connection.sendMessagePromise({
        type: `dialog_custom_ui/${type}`,
      });

    console.log("WS <=", result);

    return result;
  }

  async _getDetail(uuid: string, type: string) {
    const result =
      await this.hass.connection.sendMessagePromise({
        type: `dialog_custom_ui/${type}`,
        uuid,
      });
    return result;
  }

  async _save(data: any, type: string) {
    console.log(data)
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      data,
    });
  }

  async _update(uuid: string, type: string, data: any){
    console.log(data)
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      uuid: uuid,
      data: data,
    });
  }

  async _delete(uuid: string, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
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