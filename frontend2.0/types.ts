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