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
	document.write('	<li style="float: right; padding: 11px 10px 7px 10px;" onclick="window.open(\'https://www.linkedin.com/in/ben-lerman-10b63799\')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></li>');
	document.write('	<li style="float: right;" onclick="window.open(\'mailto:info@lermanengineering.com\')">Contact Me</li>');
	document.write('</ul>');
	document.write('</header>');
}