import ErrorStackParser from 'error-stack-parser';
import { postEvent } from './postEvent';

export interface TruffleClient {
  capture(message: Error): void;
}

export interface TruffleConfig {
  enabled?: boolean;
  app: { name: string; phase: string };
  apiKey: string;
}

const runtime = { name: 'bunjs', version: Bun.version };

export const getTruffleClient = ({ enabled = true, app, apiKey }: TruffleConfig): TruffleClient => {
  return {
    capture: (error: Error) => {
      try {
        if (!enabled) return;

        const message = error.message;
        const fallbackNumber = 99999;
        const elements = ErrorStackParser.parse(error).map((e) => ({
          className: '',
          methodName: e.functionName ?? '',
          lineNumber: e.lineNumber ?? fallbackNumber,
          fileName: e.fileName ?? '',
          isInAppInClude: e.isNative ?? true,
        }));

        const body = {
          app,
          description: '',
          exception: { className: error.name, message, elements },
          runtime,
          version: 'v1',
        };

        postEvent(apiKey, body);
      } catch (err) {
        const body = {
          app,
          description: err && typeof err === 'object' ? (err as { message?: string }).message : '',
          exception: {
            className: 'sdk error',
            message: 'sdk error',
            elements: [],
          },
          runtime,
          version: 'v1',
        };
        postEvent(apiKey, body);
      }
    },
  };
};
