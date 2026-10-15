// Generates the key pair for web push reminders. Run once: `npm run vapid`, then paste into .env.local.
import webpush from "web-push";
const k = webpush.generateVAPIDKeys();
console.log(`NEXT_PUBLIC_VAPID_PUBLIC_KEY=${k.publicKey}\nVAPID_PRIVATE_KEY=${k.privateKey}`);
