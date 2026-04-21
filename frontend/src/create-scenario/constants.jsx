export const COMMANDS_PAGE_SIZE = 20;

export const TABS = {
  primary: 'primary',
  secondary: 'secondary',
  direct: 'direct',
  defaults: 'defaults',
};

export const DIRECT_SUBTABS = {
  basic: 'basic',
  templates: 'templates',
};

export const TYPE_COMPONENT_OPTIONS = ['children', 'children_error', 'custom'];
export const DIRECT_TYPE_DATA_OPTIONS = ['all', 'string', 'int', 'time', 'date', 'command'];
export const DEFAULT_COMMANDS_API_PATH = '/api/cms/default_commands';

export const DEFAULT_COMMAND_CONFIGS = [
  {
    type: 'default_main',
    title: 'Default Main',
    supportsLlm: true,
    hasModal: true,
  },
  {
    type: 'not_understand',
    title: 'Not Understand',
    supportsLlm: false,
    hasModal: true,
  },
  {
    type: 'finish_miss',
    title: 'Finish Miss',
    supportsLlm: false,
    hasModal: false,
  },
  {
    type: 'default_search',
    title: 'Default Search',
    supportsLlm: true,
    hasModal: true,
  },
  {
    type: 'default_miss',
    title: 'Default Miss',
    supportsLlm: false,
    hasModal: true,
  },
  {
    type: 'default_integrations',
    title: 'Default Integrations',
    supportsLlm: false,
    hasModal: true,
  },
];
