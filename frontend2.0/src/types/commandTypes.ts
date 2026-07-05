type VoiceResponse = {
  actionType: string;
  voiceResponse: string;
};

type NextAction = {
  actionTypeComponent: string;
  actionType: string;
  uuid: string;
  title?: string;
};

type SubDirectControlItem = {
  id?: number;
  subMappingType: string | null;
  title?: string | null;
  subVoiceCommands: string | null;
};

export type ShortCommand = {
  uuid: string;
  title: string;
  status?: boolean;
};

export type ShortResponse = {
  data: ShortCommand[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
};

export type ComponentDialog = {
  endStatus: boolean;
  actionType: string;
  answerType: string;
  forwardText?: boolean;
  voiceCommands: string[];
  nextDirectControl: { uuid: string; actionType?: string; title?: string }[];
  voiceResponseArray: VoiceResponse[];
  nextAction: NextAction[];
  [key: string]: any;
};

export type CommandDetails = {
  status?: boolean;
  title: string;
  uuid?: string;
  componentDialog?: ComponentDialog;
  subComponentDialog?: ComponentDialog;
  directControl?: {
    mappingType: string;
    valueType: string;
    voiceCommands?: string[] | null;
    manual: boolean;
    subDirectControl: string | SubDirectControlItem[];
    [key: string]: any;
  };
  subDirectControl?: SubDirectControlItem[];
  actionType?: string;
  message?: string | null;
  endStatus?: boolean;
  [key: string]: any;
};