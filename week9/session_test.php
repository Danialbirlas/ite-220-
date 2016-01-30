<?php
 session_start();
 if (!isset($_SESSION['count']))
   $_SESSION['count'] = 0;
 else
  ++$_SESSION['count'];

 echo $_SESSION['count'];
 echo "<br/>";
 echo "<a href='session_clear.php'>Clear Count Session</a>";
 ?>   