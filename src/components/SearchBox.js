import React from 'react';

const SearchBox =({searchfield,searchChange}) => {
	return (
		<input 
			className='pa2 ba b--greeen'
			type ='search' 
			placeholder='search robots' 
			onChange={searchChange}
		/>
	);
}
export default SearchBox;