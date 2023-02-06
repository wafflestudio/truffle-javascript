export interface TruffleClient {
  capture(message: Error): void;
}

export interface TruffleConfig {
  enabled?: boolean;
  app: { name: string; phase: string };
  apiKey: string;
}

const baseUrl = "https://truffle-api.wafflestudio.com";
const runtime = { name: "browser", version: "" };

export const getTruffleClient = ({
  enabled = true,
  app,
  apiKey,
}: TruffleConfig): TruffleClient => {
  const send = (body: unknown) =>
    fetch(`${baseUrl}/events`, {
      method: "POST",
      headers: { "x-api-key": apiKey, "content-type": "application/json" },
      body: JSON.stringify(body),
    });

  return {
    capture: (error: Error) => {
      try {
        if (!enabled) return;

        const message = error.message;
        const description = window.location.href;
        const elements = [
          {
            className: error.stack ?? "",
            methodName: "",
            lineNumber: 0,
            fileName: "",
            isInAppInClude: true,
          },
        ];

        const body = {
          version: "v1",
          app,
          runtime,
          description,
          exception: { className: error.name, message, elements },
        };

        send(body);
      } catch (err) {
        send(
          JSON.stringify({
            version: "v1",
            app,
            runtime,
            description: "",
            exception: {
              className: "sdk error",
              message: "sdk error",
              elements: [],
            },
          })
        );
      }
    },
  };
};
