import { init, ref } from './instance-manager';
import { vQomSettings } from './types';

const callvQomMethod = (method: string, ...args: any[]) => {
  if (typeof window !== 'undefined' && window.vQomChat) {
    window.vQomChat(method, ...args);
  } else {
    console.warn('Please ensure vQom is set up and running on client-side!');
  }
};

/**
 * Initializes the vQom chat widget.
 * @param props vQomSettings object containing at least the widget_id.
 */
export const vQom = (props: vQomSettings) => {
  if (typeof props !== 'object' || !props.widget_id) {
    console.warn('vQom initializer called with invalid parameters.');
    return;
  }
  if (typeof window !== 'undefined' && !ref) {
    window.vQomSettings = {
      ...props,
    };
    init();
  }
};

export default vQom;

// Export any public methods that vQomChat supports
export const update = (args: any) => callvQomMethod('update', args);
