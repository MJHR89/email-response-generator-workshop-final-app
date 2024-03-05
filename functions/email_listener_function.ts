import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import OpenAI from "openai/mod.ts";
import { TriggerEventTypes, TriggerTypes } from "deno-slack-api/mod.ts";
import ThreadWorkflow from "../workflows/thread_workflow.ts";

// Add Function definition below

export default SlackFunction(
  EmailListenerFunction,
  async ({ client, inputs, env }) => {
    // 1. Send a message in thread to the e-mail message,
    //    confirming that the AI model is "thinking"

    // 2. Send email contents to AI model and generate a response for us
    // Since the event doesn't contain the file itself, must call
    // `conversations.history` to get that info

    // 3. Update the "thinking" message to the AI model's response

    // 4. Create trigger to listen for new messages on the email message thread

    return {
      outputs: {},
    };
  },
);
