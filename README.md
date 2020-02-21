# create-notifier

Lightweight notifier implementation.

Notifier is a source, that you can subscribe to its `update` events, but it doesn't propagate any values.

## Install

```bash
npm install create-notifier
```

## createNotifier

```javascript
import createNotifier from "create-notifier";

const notifier = createNotifier();
// It tracks age and increase it with every `notify` call
notifier.getAge(); // 0
// We can subscribe, to get notified
const unsubscribe = notifier.subscribe(() =>
  console.log("This is subscription")
);

notifier.notify();
// Logs 'This is subscription'
notifier.getAge(); // 1
```
