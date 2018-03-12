<?php

class Experience {
  var $period;
  var $employer;
  var $title;
  var $description;
  var $link;

  function __construct($period, $employer, $title, $description, $link = '#') {
    $this->period = $period;
    $this->employer = $employer;
    $this->title = $title;
    $this->description = $description;
    $this->link = $link;
  }

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

  public function getLink() {
    return $this->link;
  }
}
