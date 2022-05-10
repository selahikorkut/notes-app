import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';

const colors = ["hotpink", "darkviolet", "gold", "aqua", "chartreuse"];

function Form() {
  const [note, setNote] = useState();
  const [color, setColor] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ note: note, color: color }));
    setColor(" ");
    setNote(" ");
    console.log(addNote());
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your note here..."
        className="textarea"
        rows="10"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div id="footer">
        <div id="colorPicker">
          {colors.map((color1, index) => (
            <figure
              key={index}
              className="circle"
              style={{ backgroundColor: color1 }}
              onClick={() => setColor(color1)}
            >
              {color === color1 ? "✓" : ""}
            </figure>
          ))}
        </div>
        <button className="btn">ADD</button>
      </div>
    </form>
  );
}

export default Form;