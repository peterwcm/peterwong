<?php

class Reference {
  var $name;

  public function getName() {
    return $this->name;
  }

  function __construct($name) {
    $this->name = $name;
  }
}
