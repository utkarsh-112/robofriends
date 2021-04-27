import React from 'react';
const Searchbox = ({searchfield, searchchange}) => {
	return(
		<div className='pw2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='search robots' 
			onChange={searchchange}
			/>

		</div>
		);
}
export default Searchbox; 