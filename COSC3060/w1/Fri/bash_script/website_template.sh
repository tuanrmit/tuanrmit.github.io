mkdir newproject
cd newproject
mkdir public src
cd public 
touch index.html
echo "<DOCTYPE html>
	<html lang='en'>
		<head>
			<title>index</title>
		</head>
		<body>
			<header>
				<h1>Webpage template</h1>	
			</header>
			<main>
			</main>
			<footer>
			</footer>
		</body>
	<html>" > index.html

cd ../src
mkdir html css js
echo "A new project has been successfully created"
