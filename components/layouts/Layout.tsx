import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui/Navbar';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false);

	// Evitamos error del Server Side Render provocado por el camcio de Tema (dark, light)
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className='min-h-screen flex flex-col bg-white dark:bg-gray-800 dark:text-white '>
			<Head>
				<title>Cookie-Master</title>
			</Head>

			<Navbar />

			<main className='container flex-1 mt-4'>{children}</main>
		</div>
	);
};
