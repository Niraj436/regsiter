import { useState } from 'react';
import usersData from './assets/data';
function App() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		e.preventDefault();
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		const userData = usersData.find((u) => {
			return u.email === user.email;
		});
		console.log(userData);
	};
	console.log(usersData);

	return (
		<>
			<div>
				<div className='h-screen flex justify-center items-center'>
					<form action=''>
						<div className='flex flex-col justify-center items-center gap-y-5 h-100 p-6 w-80 bg-gray-500 rounded-md'>
							<h1 className='text-center'>Login page</h1>
							<div>
								<label
									htmlFor='email'
									className='block'>
									Email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									onChange={handleChange}
								/>
							</div>
							<div>
								<button
									className='py-2 px-4 bg-green-400 rounded-md'
									type='submit'
									onClick={handleClick}>
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
