<?php
require_once '../helper/Connection.php';

class AbstractModel {
	public $table;
	public $primaryKey;
	public $data;
	private $columns;

	public function __construct() {
		$this->con = new Connection();
		$sql = "SHOW COLUMNS FROM $this->table";
		$this->columns = $this->con->execute($sql);
		foreach ($this->columns as $column) {
			if($column['Key'] === 'PRI') {
				$this->primaryKey = $column['Field'];
			}
		}
	}
	
	public function select($start = 0, $limit = 25) {
		$sql = "SELECT * FROM $this->table LIMIT $start, $limit";
		return $this->con->execute($sql); 
	}

	public function count() {
		$sql = "SELECT COUNT(*) total FROM $this->table";
		$result = $this->con->execute($sql);
		return (int) $result[0]['total'];
	}
	
	public function insert() {
		$fields = '';
		$values = '';
			
		foreach($this->columns as $column) {
			$columnName = $column['Field'];
			
			if($this->data->$columnName != '' && $columnName !== $this->primaryKey) {
				$value = $this->data->$columnName;
				$valueInsert = (gettype($value) == 'integer') ? $value: "'$value'";
				$fields .= "$columnName,";
				$values .= "$valueInsert,";
			}
		}
		
		$fields = substr($fields, 0, -1);
		$values = substr($values, 0, -1);
		
		$sql = "INSERT INTO $this->table ($fields) VALUES ($values)";
		$result = $this->con->execute($sql);
		$result = $result ? $this->con->lastId : $result;
		
		return $result;
	}
	
	public function update() {
		$values = '';
		$namePk = $this->primaryKey;
		$valuePk = $this->data->$namePk;
			
		foreach($this->columns as $column) {
			$columnName = $column['Field'];
			
			if(isset($this->data->$columnName) && $columnName !== $this->primaryKey) {
				$value = $this->data->$columnName;
				$valueUpdate = (gettype($value) == 'integer') ? $value: "'$value'";
				$values .= "$columnName = $valueUpdate,";
			}
		}
		
		$values = substr($values, 0, -1);

		$sql = "UPDATE $this->table SET $values
				 WHERE $namePk = $valuePk";

		return $this->con->execute($sql);
	}
	
	public function delete($id) {
		$pk = $this->primaryKey;
		
		$sql = "DELETE FROM $this->table
				 WHERE $pk = $id";
		
		return $this->con->execute($sql);
	}
	
	public function __destruct() {
		$this->con->close();
	}
}