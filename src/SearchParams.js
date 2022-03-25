import { useState } from "react";
const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
      function updatedLocation(e) {
        setLocation(e.target.value);
    }
    
    return (
        <div className="search-params">
            <form>
                <lable htmlFor="location">
                    location
                    <input id="location" onChange={updatedLocation}
                    value={location}
                    placeholder="Location" />
                </lable>
                <button>Submit</button>
            </form>

        </div>
    
    );
};
 
export default SearchParams;