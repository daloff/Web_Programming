	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <title>Assignment 3</title>

	<style>
			table {
				width: 300px;
				border: 1px;
				cellpadding: 1px;
				cellspacing: 1px;
			}
			td {
				width: 35px;
				height: 35px;
			}
	</style>

	  </head>
	  <body>

	  	<h2>Part 1</h2>

	  	<?php
	    function isBitten()
	    {
	      if (rand(0, 1))
	      {
	        return TRUE;
	      }
	      else
	      {
	        return FALSE;
	      }
	    }

	    if (isBitten())
	    {
	      echo "<p>Charlie ate my lunch!</p>";
	    }
	    else
	    {
	      echo "<p>Charlie did not eat my lunch!</p>";
	    }
	    ?>

	     <hr>
	     <h2>Part 2</h2>

	<table>
			<?php
			for ($rows = 0; $rows < 8; $rows++) {
			echo "<tr>";
				for ($cols = 0; $cols < 8; $cols++) {
				if (($rows % 2) == ($cols % 2)) {
				echo "<td bgcolor=black></td>";
			} else {
			echo "<td bgcolor=red></td>";
		}
	}
	echo "</tr>";
	}
	?>
	</table>

		<hr>
	    <h2>Part 3</h2>

	    <?php

	    $month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

	    print("Original array using for loop: ");
	    for ($i=0; $i < count($month); $i++) {
	    print( $month[$i] . ' ' );
	  }

	  print("<br/><br/>\n");

	  sort($month);

	  print("Sorted array in alphabetical order using for loop: ");
	  for ($i=0; $i < count($month); $i++) {
	  print( $month[$i] . ' ' );
	  }

	  print("<br/><br/>\n");

	  $month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

	  print("Original array using foreach loop: ");
	  foreach ($month as $value) {
	  print( $value . ' ' );
	  }

	  print("<br/><br/>\n");

	  sort($month);

	  print("Sorted array in alphabetical order using foreach loop: ");
	  foreach ($month as $value) {
	  print( $value . ' ' );
	  }
	  ?>

	  	<hr>
	    <h2>Part 4</h2>

	    <?php
	  $name = array ('Chama Gaucha', 'Aviva by Kameel', 'Bone’s Restaurant', 'Umi Sushi Buckhead',
	  'Fandangles', 'Capital Grille', 'Canoe', 'One Flew South', 'Fox Bros. BBQ', 'South City Kitchen Midtown');

	  $aCost = array ('40.50', '15.00', '65.00', '40.50', '30.00', '60.50', '35.50', '21.00', '15.00', '29.00');
	  function makeTable($name, $aCost)

	  {
	   echo '<table border="1">'; 
	    echo '<tr>'; 
	      echo '<th>Restaurant Name</th>'; 
	      echo '<th>Average Cost</th>'; 
	    echo '</tr>'; 
	    for ($x=0;$x<10;$x++)
	    {
	      echo '<tr>'; 
	        echo '<td>'.$name[$x].'</td>'; 
	        echo '<td>'.$aCost[$x].'</td>'; 
	      echo '</tr>'; 
	    } 
	  echo '</table>'; 
	  echo '<br>';
	}

	function byName($name, $aCost)
	{
	  array_multisort($name, $aCost);
	  makeTable($name, $aCost);
	}

	function byCost($name, $aCost)
	{
	  array_multisort($aCost, $name);
	  maketable($name, $aCost);
	}

	maketable($name, $aCost);
	byCost($name, $aCost);
	byName($name, $aCost);

	?>

	  </body>
	</html>

