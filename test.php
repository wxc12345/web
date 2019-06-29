<?php
setcookie("user", "Alex Porter", time()+3600);
?>

<html>
<body>
<?php
// Print a cookie
//echo $_COOKIE["user"];

// A way to view all cookies
print_r($_COOKIE);
?>
</body>
</html>