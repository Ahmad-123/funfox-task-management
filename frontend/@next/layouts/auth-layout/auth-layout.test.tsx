import { CustomRender } from "test-utils";

import { AuthLayout } from "./auth-layout";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "",
      isReady: true,
      push: jest.fn,
    };
  },
}));

const setup = (): void => {
  CustomRender(<AuthLayout>{undefined}</AuthLayout>);
};

describe("<AuthLayout/>", () => {
  test("Renders correctly", () => {
    setup();
  });
});
