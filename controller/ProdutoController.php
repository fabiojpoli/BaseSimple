<?php
require_once '../model/Produto.php';
require_once 'AbstractController.php';

class ProdutoController extends AbstractController {}
new ProdutoController(new Produto());