import React,{useState, useEffect} from 'react'
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Editor = (props) => {
    const [text,setText] = useState(null)
    const [title, setTitle] = useState(null)
    const [id, setId] = useState(null)

    const {classes} = props

    const update = useDebounce(text, 1500)

    useEffect(() => {
        console.log('syncing..')
        props.noteUpdate(id,{
          title: title,
          body: text
        })
    }, [update])

    useEffect(()=>{
      setText(props.selectedNote.body)
      setTitle(props.selectedNote.title)
      setId(props.selectedNote.id)
    },[props.selectedNote])
    //when user stops for 1.5s then update
    

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
      
        useEffect(() => {
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => clearTimeout(handler);
        }, [value, delay]);
      
        return debouncedValue;
      }

    return (
        <div className={classes.editorContainer}>
            <ReactQuill value={text || ''} onChange={e => setText(e)}/>
        </div>
    )
}

export default withStyles(styles)(Editor)
