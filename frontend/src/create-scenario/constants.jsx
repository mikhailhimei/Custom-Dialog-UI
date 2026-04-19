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
    title: 'дефолтная ошибка комманда не найдено',
    supportsLlm: true,
    hasModal: true,
  },
  {
    type: 'not_understand',
    title: 'Не поняла, повторите пожалуйста.',
    supportsLlm: false,
    hasModal: true,
  },
  {
    type: 'finish_miss',
    title: 'Давайте начнём сначала',
    supportsLlm: false,
    hasModal: false,
  },
  {
    type: 'default_search',
    title: 'Поиск в гугле',
    supportsLlm: true,
    hasModal: true,
  },
];
