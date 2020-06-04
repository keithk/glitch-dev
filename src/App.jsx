import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Icon from './components/Icon';
import './styles.css';
import { initialData } from './data/airtable.js';

const roles = [
	{
		name: 'Media & Marketing',
		id: 1,
		background: '#5A78FF',
		header: '#9BE7D8',
	},
	{
		name: 'Engineering',
		id: 2,
		background: '#9BE7D8',
		header: '#5A78FF',
	},
];

export default function Home() {
	const [data, setData] = useState([]);
	// Lets load our initial data
	useEffect(() => {
		setData(initialData);
		async function fetchData() {
			const res = await fetch('https://airtable-api.glitch.me/api');
			res.json().then((res) => {
				setData(res);
			});
		}

		fetchData();
	}, []);

	if (!data) return null;

	return (
		<main id="0" className="0">
			<div className="p-4 md:absolute md:top-1 md:left-1">
				<a href="https://glitch.com">
					<img
						className="inline pb-6 mr-2 md:mr-6 w-12 "
						src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg?v=1489265200041"
					/>
				</a>
			</div>
			<Header roleList={roles} />
			{roles.map((role) => {
				const list = data.filter((d) => d.role === role.name);

				return (
					<section
						id={role.id}
						key={role.id}
						style={{ backgroundColor: role.background }}
						className={`py-4 px-4 md:py-12 md:px-12`}
					>
						<div className="container mx-auto pl-6 flex">
							<div className="w-full pb-6">
								<h2
									className={`font-extrabold p-0 m-0 text-2xl md:text-3xl`}
									style={{ color: role.header }}
								>
									{role.name}
								</h2>
							</div>
							<div className="flex justify-end">
								<a className="cursor-pointer" href={`#home`}>
									<Icon name="up" />
								</a>
							</div>
						</div>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
							{list.map((record) => (
								<Card key={record.name} record={record} />
							))}
						</div>
					</section>
				);
			})}
			<footer className="bg-gray-200 text-center m-4">
				<a href="https://glitch.com">
					<img
						className="inline pb-4 mr-2 md:mr-6 w-12"
						src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg?v=1489265200041"
						alt="Glitch Logo"
					/>
				</a>
			</footer>
		</main>
	);
}
