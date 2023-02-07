import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { getTruffleClient, TruffleClient } from ".";
import * as postEvent from "./postEvent";

describe("getTruffleClient (disabled)", () => {
  let client: TruffleClient;

  beforeEach(() => {
    client = getTruffleClient({
      enabled: false,
      app: { name: "1", phase: "2" },
      apiKey: "3",
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("capture", () => {
    const spy = vi.spyOn(postEvent, "postEvent");
    client.capture(new Error("test"));
    expect(spy).not.toBeCalled();
  });
});

describe("getTruffleClient (enabled)", () => {
  let client: TruffleClient;

  beforeEach(() => {
    client = getTruffleClient({
      enabled: true,
      app: { name: "1", phase: "2" },
      apiKey: "3",
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("capture", () => {
    const spy = vi.spyOn(postEvent, "postEvent");
    client.capture(new Error("test"));
    expect(spy).toBeCalledWith("3", {
      app: { name: "1", phase: "2" },
      description: "about:blank",
      exception: {
        className: "Error",
        message: "test",
        elements: expect.any(Array),
      },
      runtime: { name: "browser", version: "" },
      version: "v1",
    });
  });

  it("capture (sdk error)", () => {
    const spy = vi.spyOn(postEvent, "postEvent");
    client.capture("test" as unknown as Error);
    expect(spy).toBeCalledWith("3", {
      app: { name: "1", phase: "2" },
      description: "Cannot parse given Error object",
      exception: {
        className: "sdk error",
        message: "sdk error",
        elements: expect.any(Array),
      },
      runtime: { name: "browser", version: "" },
      version: "v1",
    });
  });
});
