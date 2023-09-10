import React from "react";
import "./Header.css";
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from "@material-ui/icons/Search";


 

function Header() {  
  return (
    <div className="header">
      
        <div className="header_logo">
              <StorefrontIcon className='header_logoImage' fontSize='large' />
              <h2 className='header_logoTitle'>eComm</h2>
        </div>
            
          
        <div className="header_search">
            <input type="text" className='header_searchInput' />
            <SearchIcon  className='header_searchIcon'/>
        </div>
    </div>
);
}

export default Header;
