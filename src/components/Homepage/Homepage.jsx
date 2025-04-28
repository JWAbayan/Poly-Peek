import { useEffect, useState } from "react";

const ImportError = {
    WRONG_FILE_EXTENSION: "Please pick a supported file extension",
    NO_FILE: "No model imported"
}

const ValidFileExtension = ["gltf", "fbx"]

export default function Homepage(){
    const [error, setError] = useState("")

    function isValidFile(fileImported){
        const fileExtension = fileImported.name.split('.').pop();
        return ValidFileExtension.includes(fileExtension);
    }

    function handleFileImport(event){
        const fileImported = event.target.files[0];

        if(!fileImported){
            setError(ImportError.NO_FILE);
            return;
        }

        if(!isValidFile(fileImported)){
            setError(ImportError.WRONG_FILE_EXTENSION);
            return;
        }
    }

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-display font-bold text-5xl text-marinblue ">Poly Peek</h1>
            <p className="mt-3 text-darkgray">Take a peek of your models</p>
            <label htmlFor="model-upload" className="mt-5 cursor-pointer underline text-lightgray">
                Import from files
                <input onChange={e => handleFileImport(e)} id="model-upload" type="file" accept=".fbx, .gltf" hidden/>
            </label>
        </div>
    );    
}