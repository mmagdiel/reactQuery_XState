import { Machine } from "xstate";

const valid = (_, event) => event.flat;

export const page_machine = Machine({
  id: "fetch",
  initial: "home",
  context: {
    retries: 0,
  },
  states: {
    home: {
      on: {
        go_one: {
          target: "one",
          cond: valid,
        },
        go_two: {
          target: "two",
          cond: valid,
        },
      },
    },
    one: {
      on: {
        go_three: {
          target: "three",
        },
      },
    },
    two: {
      on: {
        go_four: "four",
      },
    },
    three: {
      type: "final",
    },
    four: {
      type: "final",
    },
  },
});
