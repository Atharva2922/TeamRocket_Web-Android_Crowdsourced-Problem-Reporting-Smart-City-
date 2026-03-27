---
description: How to run commands properly in Windows CMD
---

# Running Commands in Windows CMD

When running commands in this project, there's a known issue where commands need to be executed twice due to how the Windows CMD prompt initializes.

## Steps:

1. **First Attempt**: Run the command using `run_command` tool
   - This will show the Windows header: `Microsoft Windows [Version 10.0.26200.7705]...`
   - The command won't actually execute yet

2. **Immediate Re-run**: Use `send_command_input` to send the exact same command again
   - Command ID: Use the ID from the first attempt
   - Input: The exact same command with a newline at the end
   - This time the command will actually execute

3. **Wait for Completion**: Monitor the command status to ensure it completes

4. **Cleanup**: After the command finishes, terminate the command process if it's still running

## Example for Git Clone:

```bash
# Step 1: Initial run_command (shows Windows header only)
run_command: git clone https://github.com/SairajDcoder/Sairaj_College_ERP.git

# Step 2: Re-run via send_command_input (actually executes)
send_command_input: git clone https://github.com/SairajDcoder/Sairaj_College_ERP.git\n

# Step 3: Verify completion
command_status or list_dir to verify

# Step 4: Terminate if still running
send_command_input with Terminate: true
```

## Important Notes:
- Always re-run the command immediately after seeing the Windows header
- Use the same command ID from the first run_command call
- Include a newline character at the end when using send_command_input
- This pattern applies to ALL commands in this environment
