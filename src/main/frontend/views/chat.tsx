import '../styles/tailwind.css';
import { Button } from "@vaadin/react-components";
import { TextField } from "@vaadin/react-components";
import { useState } from "react";
import { ChatAiService } from "Frontend/generated/endpoints";
import Markdown from 'react-markdown';

export default function Chat() {
    const [question, setQuestion] = useState<string>('');
    const [response, setResponse] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function send() {
        if (question.trim() !== '') {
            setIsLoading(true);
            try {
                const resp = await ChatAiService.ragChat(question);
                setResponse(resp);
            } catch (error) {
                console.error('Error sending message:', error);
                setResponse('An error occurred while processing your request.');
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Chat Assistant</h3>

                    <div className="flex space-x-2 mb-4">
                        <TextField
                            placeholder="Ask me anything..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="flex-grow"
                            onKeyDown={(e) => e.key === 'Enter' && send()}
                        />
                        <Button
                            onClick={send}
                            disabled={question.trim() === '' || isLoading}
                            className="bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </Button>
                    </div>

                    {response && (
                        <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                            <Markdown
                                className="prose prose-sm max-w-none"
                                components={{
                                    h1: 'h3',
                                    h2: 'h4',
                                }}
                            >
                                {response}
                            </Markdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}