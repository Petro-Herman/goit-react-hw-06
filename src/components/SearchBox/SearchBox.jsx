// import { useDispatch } from "react-redux";
// import { changeFilter } from "../../redux/filtersSlice";

// export default function SearchBox({ value }) {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => dispatch(changeFilter(e.target.value))}
//         placeholder="Search contacts"
//       />
//     </div>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
    </div>
  );
}
