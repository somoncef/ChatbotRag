import '../styles/tailwind.css';
import {Button, TextField} from "@vaadin/react-components";
import {ReactNode, useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import {set} from "@polymer/polymer/lib/utils/path";
import {BundleId} from "rollup-plugin-visualizer/dist/shared/types";

function Markedown(props: { children: ReactNode }) {
    return null;
}

export default function Chat(){
    const [question, setQuestion]=useState<string>();
    const [response, setResponse]=useState<string | undefined>()
async function send(){
        ChatAiService.ragChat(question).then(resp=>{
            setResponse(resp);
        });
}
    return (
        <div className="p-10">
            <h3>Chat bot</h3>
            <div>
                <TextField
                    onChange={(e=>setQuestion(e.target.value))}
                    className="w-[50%]"/>
                <Button onClick={send} >Send</Button>
                <Markedown>{response}</Markedown>
            </div>
         </div>
    );
}