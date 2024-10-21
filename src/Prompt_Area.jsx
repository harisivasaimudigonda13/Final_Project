import './prompt_area.css'
import { useState } from 'react'
import axios from 'axios'

function Prompt_Area() {
    let [userPrompt, setUserPrompt] = useState("")
    let [steps, setSteps] = useState({ prompts: [] });
    let [answer, setAnswer] = useState('');

    let handleChange = (event) => {
        setUserPrompt(event.target.value)
    }

    // Generate answers from API
    async function generateAnswers() {
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAQFxEMEqJ7rLm6AlVErAXdD6_433LMKsw",
                method: "post",
                data: {
                    contents: [{ parts: [{ text: userPrompt }] }]
                }
            });
            
            const answerText = response.data.candidates[0].content.parts[0].text;
            setAnswer(answerText);
            
            // Add QA to steps and update state
            addQA(userPrompt, answerText);
        } catch (error) {
            console.error('Error generating answer:', error);
        }
    }

    // Handle form submission
    let handlePrompt = (event) => {
        event.preventDefault();
        // generateAnswers();
        setUserPrompt('');  // Clear the input field
    };

    function addQA(question, answer) {
        let newPrompt = {
            prompt: question,
            gen: answer
        };
        setSteps((prevSteps) => ({
            prompts: [...prevSteps.prompts, newPrompt]  // Append new QA pair
        }));
        console.log(steps);
        
    }

    return(     
        <div className="entire_page">
            <div className='chatting'>
                {steps.prompts.map((qa, index) => (
                    <div key={index} className="chat-item">
                        <div className='area'>
                            <p className='prompt'>{qa.prompt}</p>
                            <pre className='genAn'>{qa.gen}</pre>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="input_form">
                <form onSubmit={handlePrompt}>
                    <textarea className="textarea" placeholder="Ask me anything..." value={userPrompt} onChange={handleChange}></textarea>
                    <button className="button" onClick={generateAnswers}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='msg_logo'>
                            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
                        </svg>
                    </button>
                </form>
                {/* <Chating prompt={userPrompt} genAnswer={answer}></Chating> */}
                
            </div>
        </div>
    )
}

export default Prompt_Area