import createRef from "create-ref-value";
import { forEach, append, withoutOne } from "./utils";

const createNotifier = () => {
  const subscriptions = createRef([]);
  const age = createRef(0);
  return {
    getAge: () => age.get(),
    notify: () => {
      age.set(prev => prev + 1);
      forEach(cb => cb(), subscriptions.get());
    },
    subscribe: cb => {
      subscriptions.set(prev => append(cb, prev));
      return () => {
        subscriptions.set(prev => withoutOne(cb, prev));
      };
    }
  };
};

export default createNotifier;
