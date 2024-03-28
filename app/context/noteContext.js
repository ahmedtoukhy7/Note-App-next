const { createContext } = require("react");

export let NoteContext=createContext()

export function NoteContextProvider({children}){

    function AddNote(){
        
    }


    return <>

    <NoteContext.Provider value={{}}>
    {children}
    </NoteContext.Provider>
    
    </>
}
