/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    txt: {
      primary: string;
      secondary: string;
      // tertiary: string;
      highLight: string;
    },

    bg: {
      primary: string;
      secondary: string;
      // tertiary: string;
      highLight: string;
    }

    app: {
      primary: string;
      secondary: string;
    }
  }
}
