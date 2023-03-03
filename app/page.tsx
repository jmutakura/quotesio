'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';

export default function Home() {
	const [quote, setQuote] = useState(null);
	const [author, setAuthor] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		get_quote();
		setLoading(false);
	}, []);

	async function get_quote() {
		try {
			const res = await axios.get('https://api.quotable.io/random');
			console.log(res);
			setQuote(res.data.content);
			setAuthor(res.data.author);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	}

	const buttonStyling = `flex space-x-3 mr-2 font-semibold
  text-gray-100 rounded-md ring-2 ring-slate-400 px-6 py-2 
  bg-gray-500 hover:bg-gray-700 mx-8 shadow-lg shadow-slate-800/100`;

	// const quote = get_quote();
	return (
		<main className="grid h-screen place-items-center bg-[url('../public/jigsaw.svg')] ">
			<div className='flex flex-col items-center justify-center space-y-4'>
				<div className='mx-12 flex-1 rounded-xl bg-neutral-800 px-6 py-6 shadow-xl md:mx-48'>
					<p className='text-2xl font-bold text-neutral-100 md:text-4xl'>
						{loading ? 'Loading Quote ....' : quote}
					</p>
					<p className='text-md mt-4 text-neutral-100 md:text-2xl'>
						- {author}
					</p>
				</div>
				<button className={buttonStyling} onClick={get_quote}>
					<BiRefresh size={'1.7rem'} /> <span>Get a new quote</span>
				</button>
			</div>
		</main>
	);
}
