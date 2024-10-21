import { useEffect, useState } from "react";

function Loading() {
    let [text, setText] = useState('')
    let [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false)
            setText('Message')
        }, 3000);
    }, [])

    return(
        <>
            <div>
                {
                    showLoading?(
                        'loading.....'
                    ) : (
                        <h1>{text}</h1>
                    )
                }
            </div>
        </>
    )
}

export default Loading