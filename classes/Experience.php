<?php

class Experience {
  var $period;
  var $employer;
  var $title;
  var $description;

  public function getPeriod() {
    return $this->period;
  }

  public function getEmployer() {
    return $this->employer;
  }

  public function getTitle() {
    return $this->title;
  }

  public function getDescription() {
    return $this->description;
  }

  function __construct($period, $employer, $title, $description) {
    $this->period = $period;
    $this->employer = $employer;
    $this->title = $title;
    $this->description = $description;
  }
}
