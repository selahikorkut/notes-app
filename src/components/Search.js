import { useDispatch } from "react-redux";
import { changeSearcher } from "../redux/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeSearcher(e.target.value));
  };
  return (
    <div>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;