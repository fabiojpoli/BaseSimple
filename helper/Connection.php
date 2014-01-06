<?php
/**
 * Class of connection with database
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 03/09/2011
 */

define('BD_SERVER', 'localhost');
define('BD_NOME', 'admin');
define('BD_USER', 'root');
define('BD_PWD', '');

class Connection  {
	private $conn; 
	public $lastId;
	
	public function __construct() 
	{
		$this->conn = mysql_connect(BD_SERVER, BD_USER, BD_PWD);
		if (!$this->conn) {
			die('Could not connect to server: ' . mysql_error());
		}
		
		if (!mysql_select_db(BD_NOME, $this->conn)) {
			die ('Unable to select database: ' . mysql_error());
		}
	}
	
	public function close() 
	{
		mysql_close($this->conn);
	}
	
	public function execute($sql) 
	{
		$sql = trim($sql);
		$return = false;
		
		mysql_query("SET NAMES 'utf8';");
		
		$result = mysql_query($sql);
		if (is_bool($result))
		{
			$this->lastId = mysql_insert_id($this->conn); 
			$return = $result;
		}
		else 
		{		
			while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) 
			{
   				$return[] = $row;
			}
		}
		
		return $return;
	}
}
?>