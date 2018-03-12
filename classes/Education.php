<?php

class Education {
  var $period;
  var $institution;
  var $title;
  var $specialisation;
  var $gpa;
  var $max_gpa = 7;

  function __construct($period, $institution, $title, $gpa, $specialisation = '') {
    $this->period = $period;
    $this->institution = $institution;
    $this->title = $title;
    $this->gpa = $gpa;
    $this->specialisation = $specialisation;
  }

  public function getPeriod() {
    return $this->period;
  }

  public function getInstitution() {
    return $this->institution;
  }

  public function getTitle() {
    return $this->title;
  }

  public function getGpa() {
    return $this->gpa;
  }

  public function getMaxGpa() {
    return $this->max_gpa;
  }

  public function getSpecialisation() {
    return $this->specialisation;
  }
}
