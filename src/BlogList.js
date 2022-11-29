import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
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
console.log(blogPosts);
	return (
		<div  className='blogPosts'>
			<div className='content pure-u-1 pure-u-md-3-4'>
				<div>
					<div className='posts'>
						{blogPosts?.items?.map((post) => (
							<section className='post' key={post.sys.id}>
								<header className='post-header'>
									<h2 className='post-title pt-3'>{post.fields.title}</h2>
									<p className='post-meta'>
										By <a className='post-author'>{post.fields.blogAuthor}</a>{' '}
										Date <span></span>
										<small>{post.fields.createdDate.slice(0, 10)}</small>
									</p>
								</header>
								<div className='post-description'>
									<p>{post.fields.blogSummary}</p>
									<Link
										to={`/blogDetails/${post.sys.id}`}
										className='button button1'>
										Read More
									</Link>
								</div>
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
