import React, {useState} from 'react';

export const downloadHook = (params) => {
    const [isDownloaded, setIsDownloaded] = useState(false);

    const downloadHandler = async (event) => {
        event.preventDefault();

        try {
            await sendRequest("http://localhost:5000/api/download/pdf/sample.pdf", "GET", null, null);
        } catch (err) {
            
        };

        setIsDownloaded(true);
        // isDownloadedがtrueならチェックボックスを埋めるかスタイルを変えるなどの変化をつける
        
    }


    return (
        
    )
}