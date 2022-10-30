import { ChangeEvent, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useTheme } from 'next-themes';

import { Layout } from '../components/layouts/Layout';

const ThemeChanger: NextPage = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('');

	useEffect(() => {
		setCurrentTheme(theme === 'system' ? systemTheme! : theme!);
	}, [systemTheme, theme]);

	const onChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentTheme(e.target.value);
		setTheme(e.target.value);
	};

	return (
		<Layout>
			<h1 className='mb-4'>ThemeChanger</h1>

			<div className='bg-gray-300 dark:bg-gray-600 p-4 rounded'>
				<h2 className='text-xl mb-4 font-bold'>Tema</h2>

				<div className='flex items-center gap-4'>
					<input
						type='radio'
						name='mode'
						id='light'
						value={'light'}
						checked={theme === 'light' ? true : false}
						onChange={onChangeTheme}
					/>
					<label htmlFor='light'>Light</label>
				</div>

				<div className='flex items-center gap-4'>
					<input
						type='radio'
						name='mode'
						id='dark'
						value={'dark'}
						checked={theme === 'dark' ? true : false}
						onChange={onChangeTheme}
					/>
					<label htmlFor='dark'>Dark</label>
				</div>

				<div className='flex items-center gap-4'>
					<input
						type='radio'
						name='mode'
						id='system'
						value={'system'}
						checked={theme === 'system' ? true : false}
						onChange={onChangeTheme}
					/>
					<label htmlFor='system'>System</label>
				</div>
			</div>
		</Layout>
	);
};

export default ThemeChanger;
