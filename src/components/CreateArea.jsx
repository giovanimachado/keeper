import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);
   
  const [note, setNote] = useState({
    title:"",
    content:""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote =>{
      return {
        ...prevNote,
        // To use name as key
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(note)
    setNote({
      title:"",
      content:""
    })

    // This code avoid the page refresh
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return(
    <div>
      <form className="create-note">

        {isExpanded ? <input 
          name="title" 
          onChange={handleChange}
          value={note.title} 
          placeholder="title"
        /> : null}

        <textarea 
          name="content" 
          onClick={expand}
          onChange={handleChange}
          value={note.content} 
          placeholder="Take a note" 
          cols="30" 
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
    )
}

export default CreateArea;