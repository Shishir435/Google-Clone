
import SearchIcon from "@mui/icons-material/Search";
// import MicIcon from "@mui/icons-material/Mic";
const MicIcon = './MicIcon.svg'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";
import Icons from "./Icons";



const Search = ({ hideButtons = false }) => {

  const [{}, dispatch ] =useStateValue()
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log("heh he  he search", input);

    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    })
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
        placeholder="Search Google or Type a URL"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <img draggable="false" src={MicIcon} alt="mic" /> 
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <button style={{display: 'none'}} type="submit" onClick={search}>
            Google Search
          </button>
          <Icons />
        </div>
      ) : (
        <div className="search__buttons">
          <button
            className="search__buttonHindden"
            type="submit"
            onClick={search}
          >
            Google Search
          </button>
        
        </div>
      )}
    </form>
  );
};

export default Search;
