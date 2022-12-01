import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const API_KEY = process.env.REACT_APP_API_KEY;
const PointsAndMilesGuide = () => {
	const [singlePost, setSinglePost] = useState([]);

	let { id } = useParams();

	const client = createClient({
		space: 'xwccrbo381oo',
		accessToken: API_KEY,
	});

	useEffect(() => {
		const getEntryById = async () => {
			try {
				await client.getEntry(id).then((entries) => {
					setSinglePost(entries);
				});
			} catch (error) {
				console.log(`Error fetching authors ${error}`);
			}
		};
		getEntryById();
	}, [id]);
	console.log(singlePost.fields);
	return (
		<div className='singleBlog'>
			<div className=''>
				<div>
					<div className='posts'>
						<Link to='/PointsAndMilesGuide' className='content-subhead'>
							Travel Blog
						</Link>

						<section className='single-post'>
							<header className='post-header'>
								<img
									src={singlePost?.fields?.blogImage?.fields?.file?.url}
									title=''
									alt={singlePost?.fields?.title}
									width='578'
									height='291'
								/>

								<h2 className='post-title pt-3'>
									{singlePost?.fields?.title}
								</h2>
								<h2 className='post-title pt-3'>
									{singlePost?.fields?.blogTitle}
								</h2>
								<p className='post-meta'>
									By{' '}
									<a className='post-author'>
										{singlePost?.fields?.blogAuthor}
									</a>{' '}
									Date: <span></span>
									<small>
										{singlePost?.fields?.createdDate.slice(0, 10)}
									</small>
								</p>
							</header>
							<div className='post-description'>
								<ReactMarkdown children={singlePost?.fields?.postContent} />
							</div>
							<div>{singlePost?.fields?.blogImage2?.fields?.title}</div>
							<img
								src={singlePost?.fields?.blogImage2?.fields?.file?.url}
								title=''
								alt={singlePost?.fields?.title}
							/>
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

export default PointsAndMilesGuide;
