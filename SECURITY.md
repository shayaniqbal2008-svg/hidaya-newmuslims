# Security

This project is archived and has no public deployment.

If you find a vulnerability (for example, a way around the row-level security policies in `supabase/migrations/`, a way to read another user's chats or reflections, or a secret that was committed by mistake), please report it privately with GitHub's **"Report a vulnerability"** button on this repo's Security tab. Don't open a public issue.

What counts as sensitive in this app:
- Convert identity and progress (some users hide their conversion from family)
- AI guide chats and private reflections (encrypted at rest with `APP_ENCRYPTION_KEY`)
- Anything about users under 18
