<!DOCTYPE html>
<html>
	<head>
		<title>Mon essai php</title>
	</head>
	<body>

		<?php
		$todo = file_get_content("../README.md");
		echo $todo;
		?>

	</body>
</html>



