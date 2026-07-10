export interface HassLike {
  connection: {
    sendMessagePromise<T>(msg: any): Promise<T>;
  };
  states: Record<string, any>;
}

export class DialogApi {
  private hass: HassLike;

  constructor(hass: HassLike) {
    this.hass = hass;
  }

  setHass(hass: HassLike) {
    this.hass = hass;
  }

  async _getShort(type: string, page?: number, pageSize?: number) {
    const result =
      await this.hass.connection.sendMessagePromise({
        type: `dialog_custom_ui/${type}`,
        ...(page ? { page } : {}),
        ...(pageSize ? { page_size: pageSize } : {}),
      });

    console.log("WS <=", result);

    return result;
  }

  async _getDetail(uuid: string, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      uuid,
    });
  }

  async _save(data: any, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      data,
    });
  }

  async _update(uuid: string, type: string, data: any) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      uuid,
      data,
    });
  }

  async _update_status(type: string, uuid: string, status: any) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      uuid,
      status,
    });
  }

  async searchAssistantCommands(query: string, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      query,
    });
  }

  async _delete(uuid: string, type: string) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${type}`,
      uuid,
    });
  }

  getDevices() {
    return Object.values(this.hass.states)
      .filter((entity: any) => {
        const entityId = String(entity.entity_id || "");

        return (
          entityId.startsWith("media_player.") ||
          entityId.startsWith("speaker.")
        );
      })
      .map((entity: any) => ({
        id: entity.entity_id,
        name: entity.attributes?.friendly_name ?? entity.entity_id,
      }));
  }

  getScripts() {
    return Object.values(this.hass.states)
      .filter((entity: any) => entity.entity_id.startsWith("script."))
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