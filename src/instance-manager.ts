import { vQomSettings, vQomChatInstance } from './types';

const scriptElementId = '_vQom_npm_loader';

const queueHolder: {
  (...args: any[]): void;
  q: any[];
  loaderQueue: (...args: any[]) => void;
} = function () {
  queueHolder.loaderQueue(arguments);
};
queueHolder.q = [];
queueHolder.loaderQueue = function (args: any) {
  queueHolder.q.push(args);
};

const addWidgetToPage = () => {
  const d = document;
  if (d.getElementById(scriptElementId)) {
    return;
  }
  const s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.id = scriptElementId;
  s.src = 'https://widget.vqom.chat/widget';
  const x = d.getElementsByTagName('script')[0];
  x.parentNode?.insertBefore(s, x);
};

const isDocumentReady = () =>
  document.readyState === 'complete' || document.readyState === 'interactive';

export const init = () => {
  const w = window as Window;
  const vc = w.vQomChat;

  if (typeof vc === 'function') {
    vc('update', w.vQomSettings);
  } else {
    w.vQomChat = queueHolder;
    if (isDocumentReady()) {
      addWidgetToPage();
    } else {
      document.addEventListener('readystatechange', () => {
        if (isDocumentReady()) {
          addWidgetToPage();
        }
      });
      if (w.attachEvent) {
        w.attachEvent('onload', addWidgetToPage);
      } else {
        w.addEventListener('load', addWidgetToPage, false);
      }
    }
  }
};

export let ref: vQomChatInstance | undefined = undefined;
