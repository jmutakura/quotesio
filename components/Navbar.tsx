import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
	return (
		<header className='absolute top-0 w-full flex-none border-b border-slate-900/10 bg-white'>
			<div className='mx-auto max-w-6xl'>
				<div className='mx-4 my-2'>
					<div className='relative flex items-center justify-between'>
						<a href='/'>
							<div className='flex flex-row items-center justify-center space-x-3'>
								<Image src='/brain_logo.png' alt='' width={35} height={35} />
								<p className='text-xl font-bold hover:text-neutral-500'>
									QuotesIO
								</p>
							</div>
						</a>
						<div className='flex flex-row items-center justify-center space-x-4'>
							<a
								href='https://github.com/jmutakura/quotesio'
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub
									size={25}
									className='text-neutral-800 hover:text-neutral-500'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
