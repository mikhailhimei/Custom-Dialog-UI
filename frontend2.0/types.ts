export interface Condition {
  id: string;
  parent_type: string;
  children_type?: string;
  children_direct_type?: string;
}

export interface Scenario {
  id: string;
  name: string;
  script_entity_id: string;
  conditions: Condition[];
}


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