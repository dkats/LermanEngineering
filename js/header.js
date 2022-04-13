function header(level = 0) {
	if(level == 0) {
		dir = '';
	} else if(level == -1) {
		dir = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="noclick">Lerman Engineering</li>');
	document.write('	<li class="dropdown noclick"');
		document.write('		<span id="header_northeastern">Northeastern University</span>');
		document.write('		<div class="droplist">');
			document.write('		<span onclick="window.open(\'capstone.html\',\'_self\');" id="header_capstone">Capstone</span>');
			document.write('		<span onclick="window.open(\'Baja-SAE.html\',\'_self\');" id="header_baja">Baja SAE</span>');
		document.write('		</div>');
		document.write('	</li>');
	document.write('	<li class="dropdown noclick"');
		document.write('		<span id="header_work">Work Experience</span>');
		document.write('		<div class="droplist">');
			document.write('		<span onclick="window.open(\'epam-continuum.html\',\'_self\');" id="header_epam">EPAM Continuum</span>');
			document.write('		<span onclick="window.open(\'boston-childrens-hospital.html\',\'_self\');" id="header_bch">Boston Children\'s Hospital</span>');
			document.write('		<span onclick="window.open(\'flex.html\',\'_self\');" id="header_flex">Flex Innovation Center</span>');
			document.write('		<span onclick="window.open(\'pff.html\',\'_self\');" id="header_pff">Piaggio Fast Forward</span>');
			document.write('		<span onclick="window.open(\'abiomed.html\',\'_self\');" id="header_abiomed">Abiomed</span>');
			document.write('		<span onclick="window.open(\'the-simulation-group.html\',\'_self\');" id="header_sim_group">The Simulation Group</span>');
			document.write('		<span onclick="window.open(\'carbone.html\',\'_self\');" id="header_carbone">Carbone Metal Fabricators</span>');
		document.write('		</div>');
		document.write('	</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'projects.html\',\'_self\')" id="header_proj">Other Projects</li>');
	document.write('	<li style="float: right;" onclick="window.open(\'mailto:info@lermanengineering.com\')" target="_self">Contact Me</li>');
	document.write('</ul>');
	document.write('</header>');
}