import React from 'react';
import digitalOceanIcon from "./assets/do.svg";

const Footer = () => {
	return <footer className="ts-footer text-center">
				<div className="links d-flex space-evenly col-12">
					<div className="links-col">
						<h5>References</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
							<li><a href="https://docs.tradestatistics.io/datasets.html#api" target="_blank" rel="noopener noreferrer">API</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Resources</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/datasets.html#compressed-data" target="_blank" rel="noopener noreferrer">Datasets</a></li>
							<li><a href="https://docs.tradestatistics.io/datasets.html#r-package" target="_blank" rel="noopener noreferrer">R Package</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Organization</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/datasets.html#code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Contact</h5>
						<ul>
							<li><a href="https://twitter.com/opentradestats" target="_blank" rel="noopener noreferrer">Github</a></li>
							<li><a href="https://github.com/tradestatistics" target="_blank" rel="noopener noreferrer">Twitter</a></li>
							<li><a href="mailto:contact@tradestatistics.io">Email</a></li>
						</ul>
					</div>
				</div>
				<div className="powered-by col-12 d-flex justify-center">
					<img src={digitalOceanIcon} alt="digital ocean" width="200" height="auto"/>
				</div>
				<div className="copyright d-flex justify-center align-center direction-column">
					<div>Copyright 2019 Trade Statistics, All Right Reserved</div>
					<div>Web by <a href="https://github.com/erasmo-marin">erasmo-marin</a> with ❤️</div>
				</div>
			</footer>
}

export default Footer;


