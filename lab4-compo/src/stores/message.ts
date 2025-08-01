import type{ MessageState } from "@/type"
import { defineStore } from "pinia"
export const useMessageStore = defineStore("message", {
  state: (): MessageState => ({
    message: "",
  }),
  actions: {
    updateMessage(message: string): void {
      this.message = message
    },
    reserMessage(): void {
      this.message = ""
    }
  }
})
