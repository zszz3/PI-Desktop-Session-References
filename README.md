# Session References

Load this folder as a Desktop development plugin in a build containing the
session-reference provider. Approve renderer UI and current-project session
read permissions. Version 0.2 uses the current `onLoad` / `composerTrigger`
contract; the old default-export completion API is not supported.

In a project conversation, type `@` and search by title or message content.
Pick a result to insert a mark. The mark sends a native conversation link;
the host resolves it into a bounded quotation when the message is submitted.
No transcript is copied into the completion list. Projectless conversations
cannot search, and the current conversation is excluded.

The host-backed MCP provider contributes `search_sessions` and `read_session`.
Both pin their scope to the calling conversation, require `session.read.project`,
and refuse other projects. Search supports pagination. Read returns user and
assistant text only, bounded to a recent window and a 16 KiB excerpt budget.
Disable/unload removes the trigger and tools. Existing native session links
continue to use the host's normal resolver.
