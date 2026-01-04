import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.chesson.app',
  appName: 'ChessOn Me',
  webDir: 'dist',
  server: {
    allowNavigation: ['chesson.me', '*.chesson.me'],
  },
};

export default config;
