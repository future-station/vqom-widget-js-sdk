declare global {
    interface Window {
      vQomSettings?: vQomSettings;
      vQomChat?: vQomChatInstance;
      attachEvent?: Function;
    }
  }

  export type vQomChatInstance = (...args: any[]) => void;

  export interface vQomSettings {
    widget_id: string;
    [key: string]: any;
  }

  export {};
