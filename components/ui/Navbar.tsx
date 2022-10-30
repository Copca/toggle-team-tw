import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMenu } from 'react-icons/fi';
export const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('');

	useEffect(() => {
		setCurrentTheme(theme === 'system' ? systemTheme! : theme!);
	}, [systemTheme, theme]);

	return (
		<div className='bg-violet-800 text-white'>
			<nav className='container flex justify-between items-center py-3'>
				<div className='flex gap-4'>
					<FiMenu className='text-2xl' />
					<Link href={'/'}>Cookie Master</Link>
				</div>

				<div className='flex items-center gap-4'>
					<button
						className='bg-violet-500 py-2 px-3 rounded capitalize'
						onClick={() =>
							setTheme(currentTheme === 'light' ? 'dark' : 'light')
						}
					>
						{currentTheme === 'light' ? 'dark' : 'light'}
					</button>

					<Link href={'/theme-changer'}>Cambiar tema</Link>
				</div>
			</nav>
		</div>
	);
};
