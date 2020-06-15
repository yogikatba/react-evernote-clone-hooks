import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebaritem/sidebarItem';

const Sidebar = (props) => {
    const [addingNote, setAddingNote] = useState(false)
    const [title, setTitle] = useState(null)

    const {notes, classes, selectedNoteIndex} = props

    const btnClick = () =>{
        console.log('btn clicked')
        setTitle('')
        setAddingNote(!addingNote)
    }

    const updateTitle = (txt) => {
        setTitle(txt)
    }

    const selectNote = (n, i) => {
        props.selectNote(n, i)
    }

    const deleteNote = (note) =>{
        props.deleteNote(note)
    }

    const newNote = () => {
        props.newNote(title)
        setTitle('')
        setAddingNote(false)
    }

    if(notes){
    return(
        <div className={classes.sidebarContainer}>
            <Button
                onClick={btnClick}
                className={classes.newNoteBtn}>{addingNote ? 'cancel' : 'New note'}</Button>
            {
                addingNote ?
                <div>
                    <input 
                        type="text" 
                        className={classes.newNoteInput} 
                        placeholder="Enter note title" 
                        onKeyUp={e => updateTitle(e.target.value)}>
                    </input>
                    <Button 
                        className={classes.newNoteSubmitBtn}
                        onClick={newNote}>Submit Note</Button>
                </div> : null
            }
            <List>
              {
                notes.map((_note, _index) => {
                  return(
                    <div key={_index}>
                      <SidebarItem
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={selectNote}
                        deleteNote={deleteNote}/>
                      <Divider/>
                    </div>
                  )
                })
              }
            </List>         
        </div>
    )}
    else return <></>
}

export default withStyles(styles)(Sidebar)