<!DOCTYPE html>
<html>
<body>

<?php
$server="localhost";
$user="root";
$pass="";
$db="rfid";
$connection = mysqli_connect($server, $user, $pass,$db);
function Rfid(){
	global $connection;
	global $row;
    $a = 1;
	$b = "SELECT parent.firstName as firstName_parent, children.firstName as firstName_children, parent.lastName as lastName_parent ,children.lastName as lastName_children , parent.image as parent_image, children.image as children_image FROM parent , children where parent.id = children.id_parent ORDER BY rand() LIMIT $a" ;
	$q=$connection->query($b);
	 $row=$q->fetch_assoc();
	 echo $row['firstName_parent']; 
	 echo '  ';
	 echo "   ".$row['lastName_parent'].' <br />'; 
	 echo "<h>Children <h/><br />"; 
	 echo $row['firstName_children']; 
	 echo $row['lastName_children'].' <br />'; 
     echo '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">';   
	 echo '<img src="data:image/jpeg;base64, ' . base64_encode( $row['parent_image'] ) . '" height="300" width="300" />';
	 echo '<img src="data:image/jpeg;base64, ' . base64_encode( $row['children_image'] ) . '" height="300" width="300" />';

     echo '</div>';

	}			  
	$status=FALSE;

	do { 
	
		Rfid(); //Call your function
	   sleep(5);   //wait for 5 sec for next function call
	
	  
	
	} while($status==TRUE); //loop will run in	
 ?>


</body>
</html>
