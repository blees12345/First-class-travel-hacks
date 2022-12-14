import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
import HomeModal from './HomeModal';
const API_KEY = process.env.REACT_APP_API_KEY;
const BlogList = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const client = createClient({
		space: 'xwccrbo381oo',
		accessToken: API_KEY,
	});

	useEffect(() => {
		const getAllEntries = async () => {
			try {
				await client.getEntries().then((entries) => {
					setBlogPosts(entries);
				});
			} catch (error) {
				console.log(`Error fetching authors ${error}`);
			}
		};
		getAllEntries();
	}, []);
	

	return (
		<div className='blogPosts'>
			<HomeModal/>
			<div className='content pure-u-1 pure-u-md-3-4'>
				<div>
					<div className='posts'>
						{blogPosts?.items?.map((post) => (
							<section className='post' key={post.sys.id}>
								<div className='post-description'>
									<p>{post.fields.blogSummary}</p>
								</div>
								<header className='posts-header'>
									<h2 className='post-title'>{post.fields.title}</h2>
									<p className='post-meta'>
										By <a className='post-author'>{post.fields.blogAuthor}</a>{' '}
										Date <span></span>
										<small>{post.fields.createdDate.slice(0, 10)}</small>
									</p>
								</header>
								<Link
									to={`/blogDetails/${post.sys.id}`}
									className='button button1'>
									Read More
								</Link>
							</section>
						))}
					</div>

					<div className='footer'>
						<div className='pure-menu pure-menu-horizontal'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogList;
