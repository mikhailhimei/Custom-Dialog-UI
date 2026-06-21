export interface AssistantCommandShort {
  uuid: string;
  title: string;
  status: boolean;
}

export interface AssistantCommandsResponse {
  data: AssistantCommandShort[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}

export interface NextDirectControlItem {
  uuid: string;
}

export interface VoiceResponseItem {
  actionType: string;
  voiceResponse: string;
}

export interface NextActionItem {
  actionTypeComponent: string;
  actionType: string;
  uuid: string;
}

export interface AssistantCommandDetails {
  status: boolean;
  title: string;
  uuid?: string;
  componentDialog: {
    endStatus: boolean;
    actionType: string;
    answerType: string;
    voiceCommands: string[];
    nextDirectControl: NextDirectControlItem[];
    voiceResponseArray: VoiceResponseItem[];
    nextAction: NextActionItem[];
  };
}
