import React from 'react';
/** @jsx jsx */
import { Heading, Text, jsx } from 'theme-ui';

const Header = () => (
	<div id="home" className="p-4 pt-0 md:p-8 md:ml-8">
		<div className="container mx-auto flex md:py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center">
			<div className="md:border-r-2 justify-center" style={{ borderColor: '#5A78FF' }}>
				<div className="pl-4 pr-8">
					<Heading as="h1">Personal CRM</Heading>
					<Heading
						as="h2"
						sx={{
							fontSize: 4,
						}}
					>
						All of my friends listed in one place!
					</Heading>
				</div>
			</div>
			<Text className="pl-4 pb-8">
				<strong>Welcome to my prototype.</strong> This is a prototype of:
				<ul className="list-disc ml-6">
					<li>React with hot module reloading</li>
					<li>PostCSS</li>
					<li>Snowpack</li>
					<li>Tailwind CSS</li>
					<li>
						API Fetching (airtable-api.glitch.me: <strong>not in this project</strong>)
					</li>
					<li>
						Production bundle & deployment (right now goes to firebase, but as an example of the kind of
						workflow we could build, was easier than sending to s3)
					</li>
				</ul>
				<Text>
					This is the <strong>development server</strong>, which runs all of the above. Once you run{' '}
					<strong>npm run deploy</strong> it will bundle it all up, and deploy it to firebase.
				</Text>
			</Text>
		</div>
	</div>
);

export default Header;
