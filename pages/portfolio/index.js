import React, { Component, useState, useEffect, Fragment } from 'react';
import PageTitle from '../../components/PageTitle';
import bannerIMG from '../../public/images/background/banner_1.png';
import { ProjectsDetailsData } from '../../data/ProjectsDetailsData';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';




const TagLi = ({ name, handlesettag, tagActive }) => {
	return (

		<li className={` tag ${tagActive ? 'btn active' : 'btn'}`} onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link href={"#"} className="site-button-secondry" ><span>{name} {''}</span> </Link>
		</li>
	);
};


class PortfolioPage extends Component {
	render() {
		return (
			<Fragment>
				<div className="page-content bg-white">
					{/*  banner  */}
					<div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bannerIMG.src + ")" }}>
						<PageTitle motherMenu="Portfolio" activeMenu="Portfolio" />
					</div>
					{/*  Section-1 Start  */}
					<PortfolioItem />

				</div>
			</Fragment>
		)
	}
}
function PortfolioItem() {
	const [tag, setTag] = useState('Show All');
	const [filteredImages, setFilterdImages] = useState([]);

	useEffect(() => {
		tag === 'Show All' ? setFilterdImages(ProjectsDetailsData) : setFilterdImages(ProjectsDetailsData.filter(project => project.Tags.find(element => element === tag)))
	}, [tag])

	return (
		<>
			<Head>
				<title>Aman Chaudhary | Portfolio</title>
			</Head>
			<div className="section-full content-inner portfolio-section mfp-gallery">
				<div className="container-fluid">
					<div className="section-head text-black text-center">
						<h4 className="text-gray-dark font-weight-300 m-b10">Just some of the projects I worked on.</h4>
						{/* <h2 className="box-title m-tb0">Web Development Portfolio<span className="bg-primary"></span></h2> */}
						{/* <p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p> */}
					</div>
					<div className="site-filters clearfix center  m-b40">
						<ul className="filters" data-toggle="buttons">
							<TagLi name="Show All" handlesettag={setTag} tagActive={tag === 'Show All' ? true : false} />
							<TagLi name="Web Development" handlesettag={setTag} tagActive={tag === 'Web Development' ? true : false} />
							<TagLi name="WebGIS Development" handlesettag={setTag} tagActive={tag === 'WebGIS Development' ? true : false} />
							<TagLi name="React JS" handlesettag={setTag} tagActive={tag === 'React JS' ? true : false} />
							<TagLi name="Next JS" handlesettag={setTag} tagActive={tag === 'Next JS' ? true : false} />
							<TagLi name="Flask" handlesettag={setTag} tagActive={tag === 'Flask' ? true : false} />

						</ul>
					</div>


					<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 mfp-gallery ">

						<div className="row">
							{filteredImages.map((project, index) => (
								<li className="card-container col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30 drupal" key={index} >
									<div className="dlab-box portfolio-box">
										<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <Image src={project.Image} alt="" style={{ border: "0.5px solid black" }} />
											<div className="dlab-info-has p-a15 bg-primary">
												<Link href={`/portfolio/${project.ProjectName}`} className="site-button outline radius-xl white">More Details</Link>
												{project.Link && (
													<a href={project.Link} target="blank" className="site-button outline radius-xl white pull-right">Vist Site</a>
												)}
											</div>

											<div className="overlay-bx">
												<div className="overlay-icon text-white p-lr10">
													<h5>{project.ProjectName}</h5>
													<p className="m-b10">{project.TagLine}</p>
													{project.Link && (
														<a href={project.Link} target="blank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
													)}

												</div>
											</div>

											
										</div>
									</div>
								</li>
							))}

						</div>
					</ul>

				</div>
			</div>
		</>
	);
}

export default PortfolioPage;
