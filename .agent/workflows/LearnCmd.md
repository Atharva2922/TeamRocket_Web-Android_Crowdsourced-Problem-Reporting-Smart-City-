---
description: Quick onboarding prompt for new agents
---


**🚨 IMPORTANT: Windows CMD Command Execution Pattern**

In this environment, commands require a special execution pattern due to Windows CMD initialization. Please read and follow the workflow in `.agent/workflows/run-command.md` before running ANY commands.

**Quick Summary:**
1. First `run_command` call shows Windows header but doesn't execute
2. Immediately call `send_command_input` with the same command + newline to actually execute
3. Monitor with `command_status` to verify completion
4. Always terminate the command when done

**Example:**
```
run_command: git clone https://github.com/user/repo.git
→ Returns Windows header only

send_command_input (CommandId from above): git clone https://github.com/user/repo.git\n
→ Actually executes the clone

command_status: Check completion

send_command_input (Terminate: true): Clean up
```

Please confirm you understand this pattern before proceeding with any command execution.

