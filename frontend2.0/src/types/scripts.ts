export interface ScriptAction {
  uuid: string;
  title: string;
}

export interface ScriptsResponse {
  script_actions: ScriptAction[];
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}

export interface Condition {
  parent_type: string;
  children_type?: string;
  children_direct_type?: string;
}

export interface ScriptActionDetails {
  uuid: string;
  name: string;
  script_entity_id: string;
  conditions: Condition[];
}

export interface ApiResponse<T> {
  id: number;

  type: string;

  success: boolean;

  result: T;
}