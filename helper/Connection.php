<?php
/**
 * Class of connection with database
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 03/09/2011
 */

define('BD_SERVER', '127.0.0.1');
define('BD_NOME', 'admin');
define('BD_USER', 'root');
define('BD_PWD', '');

class Connection  {
	private $conn; 
	public $lastId;
	
	public function __construct() 
	{
		$this->conn = mysqli_connect(BD_SERVER, BD_USER, BD_PWD, BD_NOME) or die('Error ' . mysqli_error($this->conn));
	}
	
	public function close() 
	{
		mysqli_close($this->conn);
	}
	
	public function execute($sql) 
	{
		$sql = trim($sql);
		$return = false;
		
		mysqli_query($this->conn, "SET NAMES 'utf8';");
		
		$result = mysqli_query($this->conn, $sql);
		if (is_bool($result))
		{
			$this->lastId = mysqli_insert_id($this->conn); 
			$return = $result;
		}
		else 
		{		
			while ($row = mysqli_fetch_array($result, MYSQL_ASSOC)) 
			{
   				$return[] = $row;
			}
		}
		
		return $return;
	}
}
?>