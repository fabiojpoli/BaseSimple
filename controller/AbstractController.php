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
		$records = $obj->select($_GET['start'], $_GET['limit'], isset($_GET['sort']) ? $_GET['sort'] : null, isset($_GET['dir']) ? $_GET['dir'] : null);
		$total = $obj->count();
		
		echo json_encode(array(
			"rows" => $records,
			"total" => $total
		));
	}
	
	public function save(){
		$obj = $this->objModel;
		$namePk = $obj->primaryKey;
		
		$obj->data = json_decode($_POST['rows']);
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
			"msg" => $success ? 'Operação realizada com sucesso!' : 'Erro!'
		));
	}
	
	public function destroy(){
		$obj = $this->objModel;
		$namePk = $obj->primaryKey;
		
		$record = json_decode($_POST['rows']);
		$success = $obj->delete($record->$namePk);
		
		$msg = $success ? 'Registro excluido com sucesso!' : 'Erro!';
		
		echo json_encode(array(
			"success" => $success,
			"msg" => utf8_encode($msg)
		));
	}
}