import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { keyCommandHandlers } from 'configs/handlers';
// TODO
// Allow custom shortcut settings

const getKeyBindingFn = (customKeyBindingFn, editorState, editorProps) => (event) => {
  if (
    event.keyCode === 83 &&
    (KeyBindingUtil.hasCommandModifier(event) ||
      KeyBindingUtil.isCtrlKeyCommand(event))
  ) {
    return 'braft-save';
  }

  if (event.key === 'Tab') {
    if (keyCommandHandlers('tab', editorState, this) === 'handled') {
      event.preventDefault();
    }
    if (editorProps && editorProps.onTab) {
      editorProps.onTab(event);
    }
  }

  if (customKeyBindingFn) {
    return customKeyBindingFn(event) || getDefaultKeyBinding(event);
  }

  return getDefaultKeyBinding(event);
};

export default getKeyBindingFn
