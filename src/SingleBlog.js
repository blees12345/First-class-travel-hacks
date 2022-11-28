import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
const API_KEY = process.env.REACT_APP_API_KEY;
const SingleBlog = () => {
	const [singleBlogPost, setSingleBlogPost] = useState([]);

	let { id } = useParams();

	const client = createClient({
		space: 'xwccrbo381oo',
		accessToken: API_KEY,
	});

	useEffect(() => {
		const getEntryById = async () => {
			try {
				await client.getEntry(id).then((entries) => {
					setSingleBlogPost(entries);
				});
			} catch (error) {
				console.log(`Error fetching authors ${error}`);
			}
		};
		getEntryById();
	}, [id]);
console.log(singleBlogPost.fields);
	return (
		<div id='layout' className='pure-g'>
			<div className='content pure-u-1 pure-u-md-3-4'>
				<div>
					<div className='posts'>
						<Link to='/blogList' className='content-subhead'>
							Travel Blog
						</Link>

						<section className='single-post'>
							<header className='post-header'>
								<img
									src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
									title=''
									alt={singleBlogPost?.fields?.title}
									width='578'
									height='291'
								/>

								<h2 className='post-title pt-3'>
									{singleBlogPost?.fields?.title}
								</h2>
								<h2 className='post-title pt-3'>
									{singleBlogPost?.fields?.blogTitle}
								</h2>
								<p className='post-meta'>
									By{' '}
									<a className='post-author'>
										{singleBlogPost?.fields?.blogAuthor}
									</a>{' '}
									Date: <span></span>
									<small>
										{singleBlogPost?.fields?.createdDate.slice(0, 10)}
									</small>
								</p>
							</header>
							<div className='post-description'>
								<ReactMarkdown children={singleBlogPost?.fields?.postContent} />
							</div>
							<div>{singleBlogPost?.fields?.blogImage2?.fields?.title}</div>
							<img
								src={singleBlogPost?.fields?.blogImage2?.fields?.file?.url}
								title=''
								alt={singleBlogPost?.fields?.title}
								width='578'
								height='291'
							/>

							<div>
								{singleBlogPost?.fields?.blogImage2?.fields?.description}
							</div>
						</section>
					</div>
					<div className='footer'>
						<div className='pure-menu pure-menu-horizontal'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
