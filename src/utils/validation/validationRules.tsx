
export function validateEmail(value:string){
	if (typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
	  return undefined;
	}
	return 'Please enter a valid email address.';
  };
  
export function validatePassword(value:string){
	if (typeof value === 'string' && value.length >= 8) {
	  return undefined;
	}
	return 'Password must be at least 8 characters long.';
  };
  


export const validateUsername = (username: string) => {
	if( username !== ''){
		return  undefined
	}
	return 'please enter a valid username, it cannot be empty';
};










