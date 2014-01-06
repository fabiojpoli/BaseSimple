<?php
class AbstractController {
	public $objModel;
	
	public function __construct($objModel) {
		$this->objModel = $objModel;

		if(method_exists($this, $_REQUEST['action'])) {
			call_user_func(array($this, $_REQUEST['action']));
		}
	}
	
	public function read(){
		$obj = $this->objModel;
		$records = $obj->select();
		
		echo json_encode(array(
			"rows" => $records
		));
	}
	
	public function save(){
		$obj = $this->objModel;
		$namePk = $obj->primaryKey;
		
		$obj->data = json_decode(stripslashes($_POST['rows']));
		if($obj->data->$namePk) {
			$success = $obj->update();
		}
		else {
			$success = $obj->insert();
			$pk = $this->objModel->primaryKey;
			$obj->data->$pk = $success;
		}
		
		echo json_encode(array(
			"rows" => $obj->data,
			"success" => $success,
			"msg" => $success ? 'Operation successful!' : 'Error!'
		));
	}
	
	public function destroy(){
		$obj = $this->objModel;
		$namePk = $obj->primaryKey;
		
		$record = json_decode(stripslashes($_POST['rows']));
		$success = $obj->delete($record->$namePk);
		
		$msg = $success ? 'Record deleted successfully!' : 'Error!';
		
		echo json_encode(array(
			"success" => $success,
			"msg" => utf8_encode($msg)
		));
	}
}