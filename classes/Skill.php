<?php

class Skill {
  var $name;
  var $level;

  public function getName() {
    return $this->name;
  }

  public function getLevel() {
    return $this->level;
  }

  function __construct($name, $level) {
    $this->name = $name;
    $this->level = $level;
  }
}
