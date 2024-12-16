package org.example.chatbotrag.web;


import org.example.chatbotrag.services.ChatAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.print.attribute.standard.Media;

@RestController
@RequestMapping("/chat")
public class ChatRestController {
    @Autowired
    private ChatAiService chatAiService;

    @GetMapping(value = "/ask",produces = MediaType.TEXT_MARKDOWN_VALUE)
    public String Ask(String question){
        return chatAiService.ragChat(question);
    }

}
