import { createApp } from './index.js';

const PORT = process.env.PORT ?? 1234;

createApp().listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
