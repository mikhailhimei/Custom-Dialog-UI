import type { MusicOption } from "../types/scripts";

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

  async getLocalMusicOptions(): Promise<MusicOption[]> {
    const audioExtensions = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i;
    const roots = [
      "media-source://media_source/local",
      "media-source://media_source",
    ];
    const visited = new Set<string>();
    const options = new Map<string, MusicOption>();

    const browse = async (mediaContentId: string) => {
      if (visited.has(mediaContentId)) return;

      visited.add(mediaContentId);

      const response: any = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: mediaContentId,
      });

      const children = Array.isArray(response?.children) ? response.children : [];

      await Promise.all(children.map(async (item: any) => {
        const contentId = String(item?.media_content_id || "");
        const title = String(item?.title || contentId);

        if (!contentId) return;

        if (item?.can_expand) {
          await browse(contentId);
          return;
        }

        if (audioExtensions.test(title) || audioExtensions.test(contentId) || item?.media_content_type === "music") {
          const localPrefix = "media-source://media_source/local/";
          const value = contentId.startsWith(localPrefix)
            ? contentId.slice(localPrefix.length)
            : contentId;

          options.set(value, {
            value,
            label: title,
          });
        }
      }));
    };

    for (const root of roots) {
      try {
        await browse(root);
      } catch (error) {
        console.warn("Failed to browse media source", root, error);
      }
    }

    return Array.from(options.values()).sort((left, right) =>
      left.label.localeCompare(right.label),
    );
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