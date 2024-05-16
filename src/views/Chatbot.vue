<template>
    <div>
      <div v-for="(message, index) in messages" :key="index">
        <p>{{ message.text }}</p>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";
  
  export default {
    setup() {
      const messages = ref([]);
      const newMessage = ref('');
  
      const textAnalyticsClient = new TextAnalyticsClient("", new AzureKeyCredential(""));
  
      const sendMessage = async () => {
        if (newMessage.value.trim() !== '') {
          messages.value.push({ text: newMessage.value, sender: 'user' });
  
          const response = await textAnalyticsClient.analyzeSentiment([newMessage.value]);
          const sentiment = response[0].sentiment;
  
          messages.value.push({ text: `The sentiment of your message is: ${sentiment}`, sender: 'bot' });
  
          newMessage.value = '';
        }
      };
  
      return {
        messages,
        newMessage,
        sendMessage
      };
    }
  };
  </script>