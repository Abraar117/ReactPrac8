function navbar() {
    return(
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
	    <div class="container-fluid">
		<a class="navbar-brand" href="index.html.html"><img src="https://i.pinimg.com/originals/3f/a0/17/3fa017d59acb965a83a290796a3aeee3.jpg" width="64" height="64" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
			<span class="navbar-toggler-icon"></span>
		</button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://naruto.fandom.com/wiki/Itachi_Uchiha">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://naruto.fandom.com/wiki/Anbu">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Connect</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}