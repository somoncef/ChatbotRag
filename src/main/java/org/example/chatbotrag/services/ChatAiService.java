package org.example.chatbotrag.services;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import org.stringtemplate.v4.ST;

@Service
public class ChatAiService {

    private ChatClient chatClient;

    public ChatAiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }
    public String ragChat(String question){
        return chatClient.prompt()
                .user(question).
                call().
                content();
    }
}
