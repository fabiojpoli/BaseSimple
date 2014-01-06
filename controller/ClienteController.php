<?php
require_once '../model/Cliente.php';
require_once 'AbstractController.php';

class ClienteController extends AbstractController {}
new ClienteController(new Cliente());